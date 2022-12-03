import React, { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import Modal from 'react-modal';

import "./style.css";

export const TotalImageUpload = ({images, setImages, choosenItem, setChoosenItem, savedItem ,setSavedItem}) => {

  const [newText, setNewText] = useState('');
  const onChangeText = (event) => {
    setNewText(event.target.value);
  }

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

  // useEffect(()=>{
  //   console.log(images);
  // },[images])

  useEffect(()=>{
    // console.log('CI',choosenItem, modalIsOpen, savedItem)
    if(choosenItem != null && !modalIsOpen){
      setTimeout(()=> {openModal()},5000);
    }
  },[choosenItem]);

  const saveNewText = () => {
    if(newText == '') return;
    console.log("Clicked")
    const item = {};
    item.type = 'Text';
    item.content = newText;
    const newItems = images;
    newItems.push(item);
    setImages([...images],item);
    setNewText('');
  }

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

            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
              className="myModal1"
            >
              {choosenItem != null ? (
                (images[choosenItem].type == 'Text') ?
                  <>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{images[choosenItem].content}</h2>
                    <button className="mybutton1" onClick={closeModal}>Done</button>
                  </>
                :
                  <>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{images[choosenItem].file.name}</h2>
                    <div>
                      {<img src={images[choosenItem].data_url} />}
                    </div>
                    <button className="mybutton1" onClick={closeModal}>Done</button>
                  </>
              ):<></>}
            </Modal>

            <div className="StyledBox-sc-13pk1d4-0 hHTEjb">
              <div className="StyledBox-sc-13pk1d4-0 drhcvl">
                <input type="number" min="1" value="1" className="MainInput__WeightInput-sc-1kepopg-1 celskH"/>
                <div className="StyledBox-sc-13pk1d4-0 drhcvl">
                  <div className="StyledTextInput__StyledTextInputContainer-sc-1x30a0s-1 imHyBg">
                    <input autocomplete="off" placeholder="Input text here..." style={{height:"40px"}} className="StyledTextInput-sc-1x30a0s-0 komyBt MainInput__MainInputData-sc-1kepopg-2 fqFTW" value={newText} onChange={onChangeText}/>
                  </div>
                  <label for="ImageFileInput" className="MainInput__ImageLabel-sc-1kepopg-3 kzaVUb" style={isDragging ? { color: "red" } : null}
                      onClick={onImageUpload}
                      {...dragProps}>
                    <svg aria-label="Image" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 gqNWiT">
                      <path fill="none" stroke="#000" stroke-width="2" d="M1,3 L23,3 L23,21 L1,21 L1,3 Z M6,9 C6.55228475,9 7,8.55228475 7,8 C7,7.44771525 6.55228475,7 6,7 C5.44771525,7 5,7.44771525 5,8 C5,8.55228475 5.44771525,9 6,9 Z M23,15 L18,9 L12,16 L9,13 L1,21"></path>
                    </svg>
                  </label>
                </div>
              </div>
              <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 kYgNmH"></div>
              <button className="StyledButton-sc-323bzc-0 iiGFSH MainInput__MainInputButton-sc-1kepopg-0 bZqWsO" type="button" onClick={saveNewText}>
                <svg aria-label="Add" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 dwNBBH">
                  <path fill="none" stroke="#000" stroke-width="2" d="M12,22 L12,2 M2,12 L22,12"></path>
                </svg>
              </button>
            </div>

            <br/>
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            <div className="ImageShow">
              {imageList.map((image, index) => (image.type == 'Text')
              ? (
                <div key={index} className="image-item1">
                  <h2 className="myh1">{image.content}</h2>
                  <div className="image-item__btn-wrapper">
                    {/* <button className="img-button1" onClick={() => onImageUpdate(index)}> */}
                    {(images[index].visible == false) ? 
                      <input className="img-button2" onClick={() => unCheckImage(index)} type="checkbox"/>
                    :
                      <input className="img-button2" onClick={() => CheckImage(index)} type="checkbox" checked="checked"/>
                    }
                    <button className="img-button2" onClick={() => onImageRemove(index)}> X </button>
                  </div>
                </div>
              ) : (
                <div key={index} className="image-item1">
                  <img src={image.data_url} alt="" width="100px" height="40px"/>
                  <div className="image-item__btn-wrapper">
                    {/* <button className="img-button1" onClick={() => onImageUpdate(index)}> */}
                    {(images[index].visible == false) ? 
                      <input className="img-button2" onClick={() => unCheckImage(index)} type="checkbox"/>
                    :
                      <input className="img-button2" onClick={() => CheckImage(index)} type="checkbox" checked="checked"/>
                    }
                    <button className="img-button2" onClick={() => onImageRemove(index)}> X </button>
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
