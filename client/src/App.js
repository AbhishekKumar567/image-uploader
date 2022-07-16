

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Image } from './components/Image'
import { AddImage } from './components/AddImage';

export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Image/>} />
      <Route path="/images/add" element={<AddImage/>} />
    </Routes>
    </BrowserRouter>
  );
}



