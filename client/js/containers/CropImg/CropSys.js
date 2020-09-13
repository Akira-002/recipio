import React, { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import ImgDialog from './ImgDialog'
import getCroppedImg from './cropImage'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import defaultImg from '../../../images/jingiss.png';


export const CropSys = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)
  const [dogImg, setDogImg] = useState(defaultImg)


  const onImageLoaded = image => {
    setDogImg(image);
  };

  const onResetFile = () => {
    setDogImg(defaultImg)
  };

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
      setDogImg(reader.result)
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };


  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])


  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        dogImg,
        croppedAreaPixels,
        rotation,
        'newFile.jpeg'
      )
      console.log('donee', { croppedImage })
      setCroppedImage(croppedImage)
    } catch (e) {
      console.log('donee', { croppedImage })
      console.error(e)
    }
  }, [croppedAreaPixels, rotation])

  const onClose = useCallback(() => {
    setCroppedImage(null)
  }, [])

  return (
    <div>
      <div className="cropInputItems">
        <Button
          className="resetButtonSetting"
          onClick={onResetFile}
          variant="contained"
        >
          Reset Image
        </Button>
        <input id="inputFileSetting" type="file" accept="image/*" onChange={onSelectFile} />
      </div>
      <div className="cropPaneSetting">
        <div className="cropPane">
          <Cropper
            image={dogImg}
            // src={src}
            crop={crop}
            rotation={rotation}
            zoom={zoom}
            aspect={4 / 3}
            onCropChange={setCrop}
            onRotationChange={setRotation}
            onZoomChange={setZoom}
            onImageLoaded={onImageLoaded}
            onCropComplete={onCropComplete}
          />
        </div>
      </div>
      <div className="cropItems">
        <div className="sliderSettingsPosition">
          <div className="sliderSettings">
            <div>
              Zoom
            </div>
            <Slider
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e, zoom) => setZoom(zoom)}
            />
          </div>
          <div className="sliderSettings">
            <div>
              Rotation
            </div>
            <Slider
              value={rotation}
              min={0}
              max={360}
              step={1}
              aria-labelledby="Rotation"
              onChange={(e, rotation) => setRotation(rotation)}
            />
          </div>
        </div>
        <Button
          className="showImgButtonSetting"
          onClick={showCroppedImage}
          variant="contained"
          color="primary"
        >
          Show Result
        </Button>
      </div>
      <ImgDialog img={croppedImage} onClose={onClose} />
    </div>
  )
}

export default CropSys;