

import { createImage,getImage,getImages,uploadProfile } from "../controllers/images.js";

import express from 'express'

export const router = express.Router()


router.route('/').get(getImages).post(createImage)
router.route('/:id').get(getImage)
router.route('/:id/profile').post(uploadProfile)