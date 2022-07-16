

import {imgSchema} from '../models/model.js'
import {v2 as cloudinary} from 'cloudinary'
import path from 'path'
import fs from 'fs'


//create an image

export const createImage = async(req,res) =>{

    try
    {
        const image =  await imgSchema.create(req.body)
        res.status(200).json({data:image})
    }
    catch(e){
        res.status(500).json({message:"Internal server error"})
    }
}

//get an image

export const getImage = async(req,res) =>{

    try{
         const image = await imgSchema.findById(req.params.id)

         if(!image)
         {
            res.status(404).json({message:"Resource not found"})  
         }
         res.status(200).json({data:image})
    }
    catch(e){
        res.status(500).json({message:"Internal server error"})
    }
}

//get all images

export const getImages = async(req,res) =>{

    try{
        const images = await imgSchema.find();
        res.status(200).json({data:images})
    }
    catch(e){
        res.status(500).json({message:"Internal server error"})
    }
}



//upload image

export const uploadProfile = async (req, res) => {
    try {
      const student = await imgSchema.findById(req.params.id);
  
      if (!student) {
        return res.status(404).json({ message: "Resource not found" });
      }
      const profile = req.files.profile;
      // Validate Image
      const fileSize = profile.size / 1000;
      const fileExt = profile.name.split(".")[1].toLowerCase();
      if (fileSize > 500) {
        return res
          .status(400)
          .json({ message: "file size must be lower than 500kb" });
      }
  
      if (!["jpg", "png"].includes(fileExt)) {
        return res
          .status(400)
          .json({ message: "file extension must be jpg or png" });
      }
  
      const fileName = `${req.params.id}${path.extname(profile.name)}`;
      console.log(fileName)
  
      cloudinary.uploader.upload(
        profile.tempFilePath,
        {
          //use_filename: true,
          //unique_filename: false,
          folder: "students",
          public_id: req.params.id,
        },
        async (err, image) => {
          if (err) {
            console.log(err);
          }
          console.log("File Uploaded");
          await imgSchema.findByIdAndUpdate(req.params.id, { profile: image.url });
          fs.unlink(profile.tempFilePath, (err) => {
            if (err) console.log(err);
          });
          res.status(200).json({
            data: {
              file: image.url,
            },
          });
        }
      );
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
}