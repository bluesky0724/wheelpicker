import React, { useEffect } from "react";
import ImageUploading from "react-images-uploading";
import Modal from 'react-modal';

import "./style.css";

export const ImageUpload = ({images, setImages, choosenItem, setChoosenItem, savedItem ,setSavedItem}) => {

  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const CheckImage = (item) => {

    const updatedImage = images[item];
    updatedImage.visible = false;
    const newImages = images.map((image,index) => {
      return (index === item) ? updatedImage : image;
    });
    setImages(newImages);
  }
  const unCheckImage = (item) => {

    const updatedImage = images[item];
    updatedImage.visible = true;
    const newImages = images.map((image,index) => {
      return (index === item) ? updatedImage : image;
    });
    setImages(newImages);
  }



  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
    setSavedItem([...savedItem, images[choosenItem]]);
    setChoosenItem(null);
  }

  useEffect(()=>{
    console.log('CI',images, choosenItem, modalIsOpen, savedItem)
    if(choosenItem != null && !modalIsOpen){
      setTimeout(()=> {openModal()},5000);
    }
  },[choosenItem])

  return (
    <div className="App1">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg","png"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {/* <div style={{display:"none"}}>
              <ModalShow />
            </div> */}

            {images.length ?
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
              className="myModal1"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{choosenItem != null && images[choosenItem].file.name}</h2>
              <div>
                {choosenItem != null && <img src={images[choosenItem].data_url} />}
              </div>
              <button className="mybutton1" onClick={closeModal}>Done</button>
            </Modal> : <></>}

            <button className="uploadButton"
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              + Upload Image(s)
            </button>
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            <div className="ImageShow">
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image.data_url} alt="" width="100" height="100" />
                  <div className="image-item__btn-wrapper">
                    {/* <button className="img-button1" onClick={() => onImageUpdate(index)}> */}
                    {(images[index].visible == false) ? 
                      <input className="img-button1" onClick={() => unCheckImage(index)} type="checkbox"/>
                    :
                      <input className="img-button1" onClick={() => CheckImage(index)} type="checkbox" checked="checked"/>
                    }
                    <button className="img-button1" onClick={() => onImageRemove(index)}> X </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading> 
    </div>
  )
}
