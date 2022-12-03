import React, { useEffect, useState } from 'react'
import YesNoWheel from '../Wheel/YesNoWheel';
import Modal from 'react-modal';
import Select from 'react-select';
import { Nav } from './Nav';
import { YesNoBoard } from '../Wheel/YesNoBoard';

function YesNo() {

  const initialcount = [
    {
      name: 'YES', count : 0,
    },
    {
      name: 'MAYBE', count : 0,
    },
    {
      name: 'NO', count : 0,
    },
  ];

  const [images, setImages] = React.useState([]);
  const [countArr, setCountArr] = React.useState(initialcount);
  const [snipset, setSnipset] = React.useState(1);
  const [mode, setMode] = React.useState(2);

  useEffect(()=>{
    if(mode === 1){
      const newItems = [];
      for (let index = 0; index < 2 * snipset; index++) {
        newItems.push({
          type : 'Text',
          content: (index%2) ? 'YES' : 'NO',
        });
      }
      console.log("Mode1",newItems)
      setImages(newItems);  
    }else{
      const newItems = [];
      for (let index = 0; index < 3 * snipset; index++) {
        newItems.push({
          type : 'Text',
          content: (index%3 == 0) ? 'YES' : (index%3 == 1) ? 'MAYBE' : "NO",
        });
      }
      console.log("Mode2",newItems)
      setImages(newItems);  
    }
  },[mode,snipset]);

  useEffect(()=>{
    const temp = document.getElementById('Maybe');
    (mode === 1) ? temp.style.display = 'none' : temp.style.display = 'flex';
  },[mode])

  const onButton1 = (item) => {
    item.target.className = 'Button__ButtonT-sc-12ftdll-0 bugMMk ReactYNW__ModeButton-sc-1wdn6wd-3 iemmUS';
    document.getElementById('mybtn2').className = 'Button__ButtonT-sc-12ftdll-0 RoFgd ReactYNW__ModeButton-sc-1wdn6wd-3 iemmUS';
    setMode(1);
  }

  const onButton2 = (item) => {
    item.target.className = 'Button__ButtonT-sc-12ftdll-0 bugMMk ReactYNW__ModeButton-sc-1wdn6wd-3 iemmUS';
    document.getElementById('mybtn1').className = 'Button__ButtonT-sc-12ftdll-0 RoFgd ReactYNW__ModeButton-sc-1wdn6wd-3 iemmUS';
    setMode(2);
  }

  const onSnipset = (item) => {
    setSnipset(item.target.innerHTML);
    const HHH = document.getElementsByClassName('mycallcss');
    for (let index = 0; index < 5; index++) HHH[index].className = 'Button__ButtonT-sc-12ftdll-0 RoFgd ReactYNW__NumButton-sc-1wdn6wd-5 jkmwYp mycallcss';
    item.target.className = 'Button__ButtonT-sc-12ftdll-0 bugMMk ReactYNW__NumButton-sc-1wdn6wd-5 jkmwYp mycallcss';
  }

  const [choosenItem, setChoosenItem] = React.useState();
  const [savedItem, setSavedItem] = React.useState([]);


  const selectoptions = [
    { value: 'A', label: 'A:' , content: [], filename: ''},
    { value: 'B', label: 'B:' , content: [], filename: ''},
    { value: 'C', label: 'C:' , content: [], filename: ''},
    { value: 'D', label: 'D:' , content: [], filename: ''},
    { value: 'E', label: 'E:' , content: [], filename: ''},
  ];


  const [saveFile,setSaveFile] = useState(selectoptions);
  const [newSaveFile, setNewSaveFile] = useState();
  const [nameSaveFile, setNameSaveFile] = useState('');

  const [uploadAreastatus, setuploadAreastatus] = React.useState(true);
  const toggleUploadArea = () =>{
    setuploadAreastatus(!uploadAreastatus);
  }

  const onSaveButton = () => {
    // document.getElementById('SaveOption').style.display = 'initial';
  }

  useEffect(()=>{
    if(!uploadAreastatus){
      document.getElementById('UploadImageArea').style.display = 'none';
      document.getElementById('ShowButton').style.opacity = '1';
    }else{
      document.getElementById('ShowButton').style.opacity = '0';
      document.getElementById('UploadImageArea').style.display = 'inline-flex';
    }
  },[uploadAreastatus])

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
    setIsOpen1(true);
  };

  const handleMenuTwo = () => {
    // do something
    setIsOpen2(true);
    setOpen(false);
  };

  const handleMenuThree = () => {
    // do something
    setOpen(false);
    setSaveFile(selectoptions);
    setNewSaveFile(null);
    setNameSaveFile('');
  };

  const [open1, setOpen1] = React.useState(false);

  const handleOpen1 = () => {
    setOpen1(!open1);
  };

  const handleMenuOne1 = () => {
    // do something
    setImages(images.sort((a, b) => 0.5 - Math.random()));
    setOpen1(false);
    // setIsOpen1(true);
  };

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
  const [modalIsOpen1, setIsOpen1] = React.useState(false);

  function openModal1() {
    setIsOpen1(true);
  }

  function afterOpenModal1() {
    subtitle.style.color = '#f00';
  }

  function closeModal1(){
    setIsOpen1(false);
  }

  const [modalIsOpen2, setIsOpen2] = React.useState(false);

  function openModal2() {
    setIsOpen2(true);
  }

  function afterOpenModal2() {
    subtitle.style.color = '#f00';
  }

  function closeModal2(){
    setIsOpen2(false);
  }


  const [selectedSaveFile, setSelectedSaveFile] = useState();

  const selectHandleChange = (selectedOption) => {
    setSelectedSaveFile(selectedOption);
    const newSaveFileis = selectedOption;
    newSaveFileis.content = images;
    setNewSaveFile(newSaveFileis);
  };

  const LoadHandleChange = (selectedOption) => {
    // console.log("HERE!!!",selectedOption);
    setSelectedSaveFile(selectedOption);
  };


  const nameHandleChange = (item) => {
    setNameSaveFile(item.target.value);
  }

  // useEffect(()=>{
  //   console.log(`Option selected:`, newSaveFile);
  //   console.log("name",nameSaveFile);
  //   console.log(saveFile, selectedSaveFile);
  // },[saveFile]);

  const onSave = () => {
    if(newSaveFile == null || nameSaveFile == '' || images.length == 0) return;
    const newFinal = newSaveFile;
    newFinal.filename = nameSaveFile;
    newFinal.content = images;
    newFinal.label = newFinal.value + ': ' + nameSaveFile;

    setSaveFile(saveFile.map((item,index)=> (
      (item.value == newFinal.value) ? newFinal : item
    )));

    closeModal1();
  }

  const onLoad = () => {
    setImages(selectedSaveFile.content)
    closeModal2();
    // console.log("Loading",selectedSaveFile,images);
  }

  return (
    <div>
  <div id="___gatsby"><div className="StyledGrommet-sc-19lkkz7-0 dwzQAa"><div style={{outline:"none"}} tabindex="-1" id="gatsby-focus-wrapper"><div className="OuterLayout__Container-sc-1muv0ew-0 feaWOu"><div className="GeneralLayout__ContentBox-sc-u2qpy2-0 bdbtng"><div className="StyledBox-sc-13pk1d4-0 hqiZqU editingHeader__Container-sc-6s2214-0 kZGTQG"><div className="StyledBox-sc-13pk1d4-0 bChNHv"><span className="StyledText-sc-1sadyjn-0 fDoXTz">(Editing Mode)</span></div><div className="StyledBox-sc-13pk1d4-0 gsbLrV"><div className="StyledBox-sc-13pk1d4-0 iopyRj"><div className="StyledBox-sc-13pk1d4-0 iopyRj"><div className="StyledBox-sc-13pk1d4-0 hKDqav Common__RelativeBox-sc-1fs44vl-0 xIhyt"><div className="StyledTextInput__StyledTextInputContainer-sc-1x30a0s-1 imHyBg"><input autoComplete="off" placeholder="Input here..." style={{background:"var(--baseBackground)"}} readonly="" className="StyledTextInput-sc-1x30a0s-0 komyBt"/></div><div style={{cursor:'pointer',right:"0"}} className="StyledBox-sc-13pk1d4-0 fKqHgH Common__AbsoluteBox-sc-1fs44vl-1 jxdDvo"><div tabindex="0" className="StyledBox-sc-13pk1d4-0 iKpNLi"><svg aria-label="Copy" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 eqwWhH"><path fill="none" stroke="#000" stroke-width="2" d="M9,15 L17,15 L9,15 Z M9,11 L19,11 L9,11 Z M9,7 L13,7 L9,7 Z M16,1 L16,7 L22,7 M6,5 L2,5 L2,23 L18,23 L18,19 M22,19 L6,19 L6,1 L17,1 L22,6 L22,19 L22,19 Z"></path></svg></div></div></div></div></div></div><button aria-label="Open Drop" type="button" className="StyledButton-sc-323bzc-0 iiGFSH"><svg aria-label="Down" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 eqwWhH"><polyline fill="none" stroke="#000" stroke-width="2" points="7.086 3.174 17.086 13.174 7.086 23.174" transform="scale(1 -1) rotate(-89 -1.32 0)"></polyline></svg></button><div className="StyledBox-sc-13pk1d4-0 hFflzB"><div className="StyledBox-sc-13pk1d4-0 iopyRj LoadingButton__RelativeBox-sc-1m0bmds-0 cCldwF"><button className="StyledButton-sc-323bzc-0 himdDz LoadingButton__Button-sc-1m0bmds-1 gJaEix" type="button">Save Changes</button></div><div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 WhPzO"></div><button color="text" label="Close (X)" className="TextButton__Button-sc-1qcswzo-0 iaEnlU">Close (X)</button></div></div><div className="StyledBox-sc-13pk1d4-0 nVrOw"><div className="StyledBox-sc-13pk1d4-0 cEkgds"><a href="index.html" className="Header__LinkAHome-sc-h0dv9u-1 gtEbKJ"><div className="StyledBox-sc-13pk1d4-0 eRXcEh Header__LogoBox-sc-h0dv9u-6 dHyMDl"><img alt="logo" className="StyledImage-sc-ey4zx9-0 jFAHLS Header__PWLogoImage-sc-h0dv9u-9 bbokGF" src="data:image/png;base64,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"/></div></a><div className="StyledBox-sc-13pk1d4-0 cvPGaR Header__RightMenuBox-sc-h0dv9u-7 ezsQsZ"><button className="StyledButton-sc-323bzc-0 iiGFSH Header__DropButton-sc-h0dv9u-0 gdANNZ" aria-label="Open Drop" type="button"><svg aria-label="ShareOption" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 rRQaT Header__ShareOptionIcon-sc-h0dv9u-8 gzFaHK"><path fill="none" stroke="#000" stroke-width="2" d="M18,8 C19.6568542,8 21,6.65685425 21,5 C21,3.34314575 19.6568542,2 18,2 C16.3431458,2 15,3.34314575 15,5 C15,6.65685425 16.3431458,8 18,8 Z M6,15 C7.65685425,15 9,13.6568542 9,12 C9,10.3431458 7.65685425,9 6,9 C4.34314575,9 3,10.3431458 3,12 C3,13.6568542 4.34314575,15 6,15 Z M18,22 C19.6568542,22 21,20.6568542 21,19 C21,17.3431458 19.6568542,16 18,16 C16.3431458,16 15,17.3431458 15,19 C15,20.6568542 16.3431458,22 18,22 Z M16,18 L8,13 M16,6 L8,11"></path></svg></button><div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 epPYSv"></div>
  
  <Nav />
  
  <button className="StyledButton-sc-323bzc-0 bMxIcp MoreButton__Menu-sc-rlln92-0 ffxfTm" aria-label="Open Menu" type="button"><div className="StyledBox-sc-13pk1d4-0 kYPXRr"><span className="StyledText-sc-1sadyjn-0 gHGdZI"></span><svg aria-label="Tools" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 eqwWhH"><path fill="none" stroke="#000" stroke-width="2" d="M11,2 L22,13 L17.5,17.5 L6.5,6.5 L11,2 Z M16,6 L17,5 L19,7 L18,8 M13,13 L4,22 L2,20 L11,11 M5,18 L6,19"></path></svg></div></button>
  
  <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 epPYSv"></div>
  
  <button className="StyledButton-sc-323bzc-0 bMxIcp MoreButton__Menu-sc-rlln92-0 ffxfTm" aria-label="Open Menu" type="button"><div className="StyledBox-sc-13pk1d4-0 kYPXRr"><span className="StyledText-sc-1sadyjn-0 gHGdZI"></span><svg aria-label="Menu" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 eqwWhH"><path fill="none" stroke="#000" stroke-width="2" d="M2,19 L22,19 M2,5 L22,5 M2,12 L22,12"></path></svg></div></button></div></div></div>
  <div className="StyledBox-sc-13pk1d4-0 fbINvl Box__BGContainer-sc-wbjuwj-1 gCRmNJ"><div className="Box__FullScreen-sc-wbjuwj-5 eIqCas fullscreen"><div className="StyledBox-sc-13pk1d4-0 hmgtJj PageTitle__TitleAdsBox-sc-1975ioo-0 fGoyyN"><div className="StyledBox-sc-13pk1d4-0 iopyRj PageTitle__TitleParagraphBox-sc-1975ioo-1 iwHUIE"><h2 className="StyledHeading-sc-1rdh4aw-0 CyAkj PageTitle__Title-sc-1975ioo-3 cIYJln">Picker Wheel</h2><p className="StyledParagraph-sc-tbetod-0 dtPhzk PageTitle__ParagraphTitle-sc-1975ioo-4 bhmHtD">Help you to make a random decision</p></div><div id="pageHeader" className="StyledBox-sc-13pk1d4-0 blmKUv PageTitle__PageHeaderBox-sc-1975ioo-2 iDiljY"></div></div><div className="StyledBox-sc-13pk1d4-0 iopyRj Box__ContainerTool-sc-wbjuwj-2 eyoZDu"><div className="StyledBox-sc-13pk1d4-0 bkPboX Box__WheelWhiteBox-sc-wbjuwj-3 vkunp"><div className="StyledBox-sc-13pk1d4-0 fArnBw Box__WheelBox-sc-wbjuwj-4 dIOerX">




  <YesNoWheel items={images} setChoosenItem={setChoosenItem} setSavedItem={setSavedItem} setCountArr={setCountArr} countArr={countArr}/>


<div className="StyledBox-sc-13pk1d4-0 iOLvMP InputBox__StyledInputBox-sc-93rbkl-0 dqFYEQ" id="UploadImageArea" style={{display:'inline-flex !important',width:"500px"}}>



        {/* <div className="StyledBox-sc-13pk1d4-0 hCJgDx Title__TitleBox-sc-1unxr3s-0 dPLYnr">
          <div className="StyledTextInput__StyledTextInputContainer-sc-1x30a0s-1 imHyBg">
            <input autocomplete="off" placeholder="Title: Type Here..." className="StyledTextInput-sc-1x30a0s-0 gifcRh Title__TitleInput-sc-1unxr3s-1 wPHEQ" value=""/>
          </div>
        </div> */}
        <div className="StyledBox-sc-13pk1d4-0 cvKuOz results__Container-sc-1qwspq2-0 cBNarm">
          <div className="StyledBox-sc-13pk1d4-0 iopyRj results__ResultBox-sc-1qwspq2-1 jyZOxU">
            <span className="StyledText-sc-1sadyjn-0 gHGdZI"> </span>
            <span className="StyledText-sc-1sadyjn-0 jwoiSp results__ValueText-sc-1qwspq2-2 gDaWMM">{countArr[0].count}</span>
            <span className="StyledText-sc-1sadyjn-0 jIQdPL">YES</span>
          </div>
          <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 gHeRsx"></div>
          <div className="StyledBox-sc-13pk1d4-0 iopyRj results__ResultBox-sc-1qwspq2-1 jyZOxU" id="Maybe">
            <span className="StyledText-sc-1sadyjn-0 gHGdZI"> </span>
            <span className="StyledText-sc-1sadyjn-0 eNasXq results__ValueText-sc-1qwspq2-2 gDaWMM">{countArr[1].count}</span>
            <span className="StyledText-sc-1sadyjn-0 jIQdPL">MAYBE</span>
          </div>
          <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 gHeRsx"></div>
          <div className="StyledBox-sc-13pk1d4-0 iopyRj results__ResultBox-sc-1qwspq2-1 jyZOxU">
            <span className="StyledText-sc-1sadyjn-0 gHGdZI"> </span>
            <span className="StyledText-sc-1sadyjn-0 jwoiSp results__ValueText-sc-1qwspq2-2 gDaWMM">{countArr[2].count}</span>
            <span className="StyledText-sc-1sadyjn-0 jIQdPL">NO</span>
          </div>
        </div>

        <div className="StyledBox-sc-13pk1d4-0 iopyRj Common__RelativeBox-sc-1fs44vl-0 xIhyt" style={{width:"90%"}}>
          <div className="StyledBox-sc-13pk1d4-0 fCkRfC ReactYNW__Container-sc-1wdn6wd-0 ktJwxo">

            <div className="StyledBox-sc-13pk1d4-0 jxBtFZ">
              <button className="StyledButton-sc-323bzc-0 iiGFSH TooltipButton__Button-sc-rmqt3w-0 eQzZxI" type="button" onClick={() => toggleUploadArea()}>
                <svg aria-label="View" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 eqwWhH">
                  <path fill="none" stroke="#000" stroke-width="2" d="M12,21 C7,21 1,16 1,12 C1,8 7,3 12,3 C17,3 23,8 23,12 C23,16 17,21 12,21 Z M12,7 C9.23875,7 7,9.23875 7,12 C7,14.76125 9.23875,17 12,17 C14.76125,17 17,14.76125 17,12 C17,9.23875 14.76125,7 12,7 L12,7 Z"></path>
                </svg>
              </button>
              <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 epPYSv"></div>
              <button className="StyledButton-sc-323bzc-0 iiGFSH TooltipButton__Button-sc-rmqt3w-0 hITtYK" type="button" onClick={()=>setCountArr(initialcount)}>
                <svg aria-label="Refresh" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 gDgYUv">
                  <path fill="none" stroke="#000" stroke-width="2" d="M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9"></path>
                </svg>
              </button>
            </div>

            <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 kNxpMT"></div>

            <div className="StyledBox-sc-13pk1d4-0 fMsdVx ReactYNW__ModeBox-sc-1wdn6wd-6 kRUATm" style={{width:"100%"}}>
              <div className="StyledBox-sc-13pk1d4-0 iopyRj">
                <span className="StyledText-sc-1sadyjn-0 gHGdZI ReactYNW__Title-sc-1wdn6wd-1 cgqqpO">Mode</span>
                <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 hIUDcK"></div>
                <div className="StyledBox-sc-13pk1d4-0 cvKuOz ReactYNW__InputModeContainer-sc-1wdn6wd-2 euLdKw">
                  <button className="Button__ButtonT-sc-12ftdll-0 RoFgd ReactYNW__ModeButton-sc-1wdn6wd-3 iemmUS" onClick={onButton1} id="mybtn1"> YES or NO</button>
                  <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 gHeRsx"></div>
                  <button className="Button__ButtonT-sc-12ftdll-0 bugMMk ReactYNW__ModeButton-sc-1wdn6wd-3 iemmUS" onClick={onButton2} id="mybtn2"> YES, NO or MAYBE</button>
                </div>
              </div>
              <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 clqCpb"></div>
              <div className="StyledBox-sc-13pk1d4-0 iopyRj">
                <span className="StyledText-sc-1sadyjn-0 gHGdZI ReactYNW__Title-sc-1wdn6wd-1 cgqqpO">Number of Input Sets</span>
                <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 hIUDcK"></div>
                <div className="StyledBox-sc-13pk1d4-0 cvKuOz ReactYNW__NumSetsContainer-sc-1wdn6wd-4 htGBec">
                  <button className="Button__ButtonT-sc-12ftdll-0 bugMMk ReactYNW__NumButton-sc-1wdn6wd-5 jkmwYp mycallcss" onClick={onSnipset}> 1</button>
                  <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 gHeRsx"></div>
                  <button className="Button__ButtonT-sc-12ftdll-0 RoFgd ReactYNW__NumButton-sc-1wdn6wd-5 jkmwYp mycallcss" onClick={onSnipset}> 2</button>
                  <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 gHeRsx"></div>
                  <button className="Button__ButtonT-sc-12ftdll-0 RoFgd ReactYNW__NumButton-sc-1wdn6wd-5 jkmwYp mycallcss" onClick={onSnipset}> 3</button>
                  <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 gHeRsx"></div>
                  <button className="Button__ButtonT-sc-12ftdll-0 RoFgd ReactYNW__NumButton-sc-1wdn6wd-5 jkmwYp mycallcss" onClick={onSnipset}> 4</button>
                  <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 gHeRsx"></div>
                  <button className="Button__ButtonT-sc-12ftdll-0 RoFgd ReactYNW__NumButton-sc-1wdn6wd-5 jkmwYp mycallcss" onClick={onSnipset}> 5</button>
                </div>
              </div>
            </div>
          </div>
        </div>




{/* <div className="StyledBox-sc-13pk1d4-0 hCJgDx Title__TitleBox-sc-1unxr3s-0 dPLYnr">
  <div className="StyledTextInput__StyledTextInputContainer-sc-1x30a0s-1 imHyBg">
    <input autoComplete="off" placeholder="Title: Type Here..." className="StyledTextInput-sc-1x30a0s-0 gifcRh Title__TitleInput-sc-1unxr3s-1 wPHEQ" value=""/></div>
</div> */}
    
    <div className="StyledBox-sc-13pk1d4-0 iopyRj Common__RelativeBox-sc-1fs44vl-0 xIhyt" style={{display:"none"}}><div className="StyledBox-sc-13pk1d4-0 hPqJjE Inputs__Container-sc-1562xvn-0 jFwSP"><div className="StyledBox-sc-13pk1d4-0 gpvHhv"><div className="StyledBox-sc-13pk1d4-0 hKDqav"><h3 className="StyledHeading-sc-1rdh4aw-0 gGUfFh">INPUTS [{images.length}]</h3></div><div className="StyledBox-sc-13pk1d4-0 cvKuOz">

      <button className="StyledButton-sc-323bzc-0 iiGFSH TooltipButton__Button-sc-rmqt3w-0 eQzZxI" type="button" onClick={() => toggleUploadArea()}>
        <svg aria-label="View" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 eqwWhH">
          <path fill="none" stroke="#000" stroke-width="2" d="M12,21 C7,21 1,16 1,12 C1,8 7,3 12,3 C17,3 23,8 23,12 C23,16 17,21 12,21 Z M12,7 C9.23875,7 7,9.23875 7,12 C7,14.76125 9.23875,17 12,17 C14.76125,17 17,14.76125 17,12 C17,9.23875 14.76125,7 12,7 L12,7 Z"></path>
        </svg>
      </button>


      <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 epPYSv"></div>




        <div className="dropdown">
          <button className="StyledButton-sc-323bzc-0 bMxIcp LoadSaveButton__Menu-sc-lm3off-0 dlKAHm" aria-label="Open Menu" type="button" onClick={handleOpen}>
            <div className="StyledBox-sc-13pk1d4-0 kYPXRr">
              <span className="StyledText-sc-1sadyjn-0 gHGdZI"></span>
              <svg aria-label="Folder" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 ejFqbz">
                <path fill="none" stroke="#000" stroke-width="2" d="M2,10 L2,6 L2,2 L10,2 L13,6 L22,6 L22,10 L2,10 Z M2,10 L22,10 L22,22 L2,22 L2,10 Z"></path>
              </svg>
            </div>
          </button>
          {open ? (
            <ul className="menu">
              <li className="menu-item">
                <button type="button" className="StyledButton-sc-323bzc-0 glzuvg" onClick={handleMenuOne}>
                  <div className="StyledBox-sc-13pk1d4-0 kMuKEL">
                    <div className="StyledBox-sc-13pk1d4-0 cvKuOz LoadSaveButton__MenuBox-sc-lm3off-2 iCLAst">
                      <div className="StyledBox-sc-13pk1d4-0 iHGjwE"><svg aria-label="DocumentUpload" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 gDgYUv">
                        <path fill="none" stroke="#000" stroke-width="2" d="M2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L3,23 L2.99787498,0.999999992 Z M16,1 L16,6 L21,6 M12,20 L12,11 M8,14 L12,10 L16,14"></path>
                        </svg> 
                      </div>
                      <span className="StyledText-sc-1sadyjn-0 gHGdZI LoadSaveButton__NoWrapText-sc-lm3off-1 dLWXSW"> Save List to File..</span>
                    </div>
                  </div>
                </button>
              </li>
              <li className="menu-item">
                <button type="button" className="StyledButton-sc-323bzc-0 glzuvg" onClick={handleMenuTwo}>
                  <div className="StyledBox-sc-13pk1d4-0 kMuKEL">
                    <div className="StyledBox-sc-13pk1d4-0 cvKuOz LoadSaveButton__MenuBox-sc-lm3off-2 iCLAst">
                      <div className="StyledBox-sc-13pk1d4-0 iHGjwE">
                        <svg aria-label="DocumentUpload" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 gDgYUv">
                          <path fill="none" stroke="#000" stroke-width="2" d="M2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L3,23 L2.99787498,0.999999992 Z M16,1 L16,6 L21,6 M12,9 L12,18 M8,15 L12,19 L16,15"></path>
                        </svg> 
                      </div>
                      <span className="StyledText-sc-1sadyjn-0 gHGdZI LoadSaveButton__NoWrapText-sc-lm3off-1 dLWXSW"> Open File..</span>
                    </div>
                  </div>
                </button>
              </li>
              <li className="menu-item">
                <button type="button" className="StyledButton-sc-323bzc-0 glzuvg" onClick={handleMenuThree}>
                  <div className="StyledBox-sc-13pk1d4-0 kMuKEL">
                    <div className="StyledBox-sc-13pk1d4-0 cvKuOz LoadSaveButton__MenuBox-sc-lm3off-2 iCLAst">
                      <div className="StyledBox-sc-13pk1d4-0 iHGjwE">
                        <svg aria-label="DocumentUpload" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 XJymD" style={{stroke:'red'}}>
                          <path fill="none" stroke="#000" stroke-width="2" d="M2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L3,23 L2.99787498,0.999999992 Z M16,1 L16,6 L21,6 M9,12 L15,18 M15,12 L9,18"></path>
                        </svg> 
                      </div>
                      <span className="StyledText-sc-1sadyjn-0 gHGdZI LoadSaveButton__NoWrapText-sc-lm3off-1 dLWXSW"> Delete Saved Files ..</span>
                    </div>
                  </div>
                </button>
              </li>
            </ul>
          ) : null}
        </div>

        <div className="dropdown">
          <button class="StyledButton-sc-323bzc-0 bMxIcp MoreButton__Menu-sc-rlln92-0 ffxfTm" aria-label="Open Menu" type="button" onClick={handleOpen1}>
            <div class="StyledBox-sc-13pk1d4-0 kYPXRr">
              <span class="StyledText-sc-1sadyjn-0 gHGdZI"></span>
              <svg aria-label="More" viewBox="0 0 24 24" class="StyledIcon-ofa7kd-0 eqwWhH">
                <path fill="none" stroke="#000" stroke-width="2" d="M3,13 L3,11 L5,11 L5,13 L3,13 Z M11,12.9995001 L11,11 L12.9995001,11 L12.9995001,12.9995001 L11,12.9995001 Z M19,12.9995001 L19,11 L20.9995001,11 L20.9995001,12.9995001 L19,12.9995001 Z"></path>
              </svg>
            </div>
          </button>
          {open1 ? (
            <ul className="menu">
              <li className="menu-item">
                <button type="button" className="StyledButton-sc-323bzc-0 glzuvg" onClick={handleMenuOne1}>
                  <div className="StyledBox-sc-13pk1d4-0 kMuKEL">
                    {/* <div className="StyledBox-sc-13pk1d4-0 cvKuOz LoadSaveButton__MenuBox-sc-lm3off-2 iCLAst">
                      <div className="StyledBox-sc-13pk1d4-0 iHGjwE"><svg aria-label="DocumentUpload" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 gDgYUv">
                        <path fill="none" stroke="#000" stroke-width="2" d="M2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L3,23 L2.99787498,0.999999992 Z M16,1 L16,6 L21,6 M12,20 L12,11 M8,14 L12,10 L16,14"></path>
                        </svg> 
                      </div>
                      <span className="StyledText-sc-1sadyjn-0 gHGdZI LoadSaveButton__NoWrapText-sc-lm3off-1 dLWXSW"> Save List to File..</span>
                    </div> */}
                    <div class="StyledBox-sc-13pk1d4-0 kMuKEL mybutton3"><div class="StyledBox-sc-13pk1d4-0 iHGjwE"><svg aria-label="Update" viewBox="0 0 24 24" class="StyledIcon-ofa7kd-0 gDgYUv"><path fill="none" stroke="#000" stroke-width="2" d="M1.7507,16.0022 C3.3517,20.0982 7.3367,23.0002 11.9997,23.0002 C18.0747,23.0002 22.9997,18.0752 22.9997,12.0002 M22.2497,7.9982 C20.6487,3.9012 16.6627,1.0002 11.9997,1.0002 C5.9247,1.0002 0.9997,5.9252 0.9997,12.0002 M8.9997,16.0002 L0.9997,16.0002 L0.9997,24.0002 M22.9997,0.0002 L22.9997,8.0002 L14.9997,8.0002"></path></svg></div><span class="StyledText-sc-1sadyjn-0 gHGdZI Inputs__NoWrapText-sc-1562xvn-3 bQZSaX">Shuffle</span></div>
                  </div>
                </button>
              </li>
            </ul>
          ) : null}
        </div>

        <Modal
          isOpen={modalIsOpen1}
          onAfterOpen={afterOpenModal1}
          onRequestClose={closeModal1}
          style={customStyles}
          contentLabel="Example Modal"
          className="myModal2"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>

          <div className='form-label'>Choose the area</div>
            <Select options={saveFile} className="form-select" defaultValue={newSaveFile} onChange={selectHandleChange}/>
          <br/>

          <div className='form-label'>Set the saved file name</div>
          <input type="text" className='form-input' onChange={nameHandleChange} value={nameSaveFile}/>
          <br/>

          <button className='mybutton1' onClick={onSave}>Save</button>
        </Modal>

        <Modal
          isOpen={modalIsOpen2}
          onAfterOpen={afterOpenModal2}
          onRequestClose={closeModal2}
          style={customStyles}
          contentLabel="Example Modal"
          className="myModal2"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>

          <div className='form-label'>Choose the area</div>
            <Select options={saveFile} className="form-select" defaultValue={newSaveFile} onChange={LoadHandleChange}/>
          <br/>

          <button className='mybutton1' onClick={onLoad}>Load</button>
        </Modal>



      <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 epPYSv"></div>
      {/* <button className="StyledButton-sc-323bzc-0 iiGFSH TooltipButton__Button-sc-rmqt3w-0 hITtYK" type="button">
              <svg aria-label="List" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 gDgYUv"><path fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="M9,6 L21,6 M9,12 L21,12 M9,18 L17,18 M4,7 C4.55228475,7 5,6.55228475 5,6 C5,5.44771525 4.55228475,5 4,5 C3.44771525,5 3,5.44771525 3,6 C3,6.55228475 3.44771525,7 4,7 Z M4,13 C4.55228475,13 5,12.5522847 5,12 C5,11.4477153 4.55228475,11 4,11 C3.44771525,11 3,11.4477153 3,12 C3,12.5522847 3.44771525,13 4,13 Z M4,19 C4.55228475,19 5,18.5522847 5,18 C5,17.4477153 4.55228475,17 4,17 C3.44771525,17 3,17.4477153 3,18 C3,18.5522847 3.44771525,19 4,19 Z"></path></svg></button><div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 epPYSv"></div><button className="StyledButton-sc-323bzc-0 bMxIcp MoreButton__Menu-sc-rlln92-0 ffxfTm" aria-label="Open Menu" type="button"><div className="StyledBox-sc-13pk1d4-0 kYPXRr"><span className="StyledText-sc-1sadyjn-0 gHGdZI"></span><svg aria-label="More" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 eqwWhH"><path fill="none" stroke="#000" stroke-width="2" d="M3,13 L3,11 L5,11 L5,13 L3,13 Z M11,12.9995001 L11,11 L12.9995001,11 L12.9995001,12.9995001 L11,12.9995001 Z M19,12.9995001 L19,11 L20.9995001,11 L20.9995001,12.9995001 L19,12.9995001 Z">
      </path></svg></div></button> */}

      </div></div>
      <div className="StyledBox-sc-13pk1d4-0 hHTEjb">




      <YesNoBoard images={images} countArr={countArr} setCountArr={setCountArr} setImages={setImages} choosenItem={choosenItem} setChoosenItem={setChoosenItem} savedItem={savedItem} setSavedItem={setSavedItem}/>
      </div>
          
          
          
          </div>
    </div>
    
    
    
    
    </div>
    
    
    </div>
    
    
    
    <div className="StyledBox-sc-13pk1d4-0 iopyRj FloatingBox__FloatingBoxContainer-sc-s7de3-0 bIkDRX"></div>
    <div className="StyledBox-sc-13pk1d4-0 iopyRj UnhideInputButton__UnhideInputButtonBox-sc-old4kj-0 CCViB" id="ShowButton" onClick={() => toggleUploadArea()}>
    <button className="StyledButton-sc-323bzc-0 cCVYQd UnhideInputButton__Button-sc-old4kj-1 iISrx" type="button">
    <div className="StyledBox-sc-13pk1d4-0 hixbjr">
    <svg aria-label="Hide" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 eqwWhH">
    <path fill="none" stroke="#000" stroke-width="2" d="M12,17 C9.27272727,17 6,14.2222222 6,12 C6,9.77777778 9.27272727,7 12,7 C14.7272727,7 18,9.77777778 18,12 C18,14.2222222 14.7272727,17 12,17 Z M11,12 C11,12.55225 11.44775,13 12,13 C12.55225,13 13,12.55225 13,12 C13,11.44775 12.55225,11 12,11 C11.44775,11 11,11.44775 11,12 Z M20,5 L4,19"></path></svg><div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 bLzgru"></div>INPUTS</div></button></div>
    

    
    <div className="StyledStack-sc-ajspsk-0 kHAqfL VolumeButton__VolumeButtonBox-sc-9j4iex-0 hnbhfw">
      <div className="StyledStack__StyledStackLayer-sc-ajspsk-1 kZDsFK">
        <div className="StyledBox-sc-13pk1d4-0 fLTZdo VolumeButton__RangeInputBox-sc-9j4iex-1 jskriY">
          <input type="range" aria-valuemax="1" aria-valuemin="0" aria-valuenow="1" value="1" className="StyledRangeInput-sc-15st9ck-0 bLGRkx VolumeButton__RangeInput-sc-9j4iex-2 jhGhYg" color="primary" step="0.05" min="0" max="1"/>
        </div>
      </div>
      <div className="StyledStack__StyledStackLayer-sc-ajspsk-1 fxjwyH">
        <div className="StyledBox-sc-13pk1d4-0 dewqBn VolumeButton__InBetweenBox-sc-9j4iex-3 dOLvo"></div>
      </div>
      <div className="StyledStack__StyledStackLayer-sc-ajspsk-1 fxjwyH">
        <div className="StyledBox-sc-13pk1d4-0 iopyRj InlineTooltipButton__TooltipBox-sc-d3mxkp-0 qpGkO">
          <div className="StyledBox-sc-13pk1d4-0 cPaINq">
            <button className="StyledButton-sc-323bzc-0 iiGFSH InlineTooltipButton__Button-sc-d3mxkp-2 zKOcT" type="button">
              <svg aria-label="Volume" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 bPhKcL">
                <path fill="none" stroke="#000" stroke-width="2" d="M15,16 C17.209,16 19,14.209 19,12 C19,9.791 17.209,8 15,8 M15,20 C20,20 23,16.411 23,12 C23,7.589 19.411,4 15,4 M1,12 L1,8 L6,8 L12,3 L12,21 L6,16 L1,16 L1,12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    

    
    <div className="StyledBox-sc-13pk1d4-0 iopyRj AllResultsButton__AllResultsButtonBox-sc-tvlw8-0 gimxJH"><div className="StyledBox-sc-13pk1d4-0 iopyRj InlineTooltipButton__TooltipBox-sc-d3mxkp-0 qpGkO"><div className="StyledBox-sc-13pk1d4-0 cPaINq"><button className="StyledButton-sc-323bzc-0 iiGFSH InlineTooltipButton__Button-sc-d3mxkp-2 zKOcT" type="button"><svg aria-label="History" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 ehnJQv AllResultsButton__History-sc-tvlw8-2 gPWTDO"><path fill="none" stroke="#000" stroke-width="2" d="M1,12 C1,18.075 5.925,23 12,23 C18.075,23 23,18.075 23,12 C23,5.925 18.075,1 12,1 C7.563,1 4,4 2,7.5 M1,1 L1,8 L8,8 M16,17 L12,13 L12,6"></path></svg></button></div></div></div><div className="StyledBox-sc-13pk1d4-0 iopyRj FullScreenButton__FullScreenButtonBox-sc-12sgeu4-0 eMCRXV"><div className="StyledBox-sc-13pk1d4-0 iopyRj InlineTooltipButton__TooltipBox-sc-d3mxkp-0 hLGhoi"><div className="StyledBox-sc-13pk1d4-0 cPaINq">
    <button className="StyledButton-sc-323bzc-0 iiGFSH InlineTooltipButton__Button-sc-d3mxkp-2 zKOcT" type="button"><svg aria-label="Expand" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 ehnJQv FullScreenButton__Expand-sc-12sgeu4-2 cWdgOU"><path fill="none" stroke="#000" stroke-width="2" d="M10,14 L2,22 M1,15 L1,23 L9,23 M22,2 L14,10 M15,1 L23,1 L23,9"></path></svg></button></div></div></div></div></div></div><div className="StyledBox-sc-13pk1d4-0 iopyRj Box__ContainerTool-sc-wbjuwj-2 eyoZDu"><div id="aboveToolSettings" className="StyledBox-sc-13pk1d4-0 bcVTIj MiddleBox__AdthriveBox-sc-f0mc13-0 ecslgc"></div><div className="StyledBox-sc-13pk1d4-0 hmmflz Common__RelativeBox-sc-1fs44vl-0 xIhyt"><div role="tablist" className="StyledBox-sc-13pk1d4-0 iopyRj ToolSettings__Accord-sc-vvzxbn-1 gIZRFn"><div className="StyledBox-sc-13pk1d4-0 ilqDnZ"><button role="tab" aria-selected="false" aria-expanded="false" type="button" className="StyledButton-sc-323bzc-0 bMxIcp"><div className="StyledBox-sc-13pk1d4-0 mIURH ToolSettings__Panel-sc-vvzxbn-0 duuWci"><div className="StyledBox-sc-13pk1d4-0 hKDqav"><h4 className="StyledHeading-sc-1rdh4aw-0 gsnatM">Tool Settings</h4><div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 epPYSv"></div><span className="StyledText-sc-1sadyjn-0 iQjgrG">(Click to Expand)</span></div><div className="StyledBox-sc-13pk1d4-0 eMgsqC"><svg aria-label="FormDown" viewBox="0 0 24 24" className="StyledIcon-sc-ofa7kd-0 cQauAi"><path fill="none" stroke="#000" stroke-width="2" d="m18 9-6 6-6-6"></path></svg></div></div></button><div className="StyledBox-sc-13pk1d4-0 fQgvhw"><div aria-hidden="true" className="StyledBox-sc-13pk1d4-0 iopyRj Collapsible__AnimatedBox-sc-15kniua-0 jtbjrr"></div></div></div></div></div><button aria-label="Open Drop" type="button" className="StyledButton-sc-323bzc-0 ceZqlI"><span className="StyledText-sc-1sadyjn-0 bjtnMA"><u>Version 83 (Aug 12)</u></span></button></div></div><div className="StyledBox-sc-13pk1d4-0 iopyRj Content__OuterContentBox-sc-rx3woy-0 dVuqJm"><div className="StyledBox-sc-13pk1d4-0 edzEPh Content__Container-sc-rx3woy-2 ffNpXf"><div className="StyledBox-sc-13pk1d4-0 gtXdCp Content__ContentBox-sc-rx3woy-1 flDQIj"><div id="pageMD" className="StyledBox-sc-13pk1d4-0 iopyRj"><div><div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN"><p className="StyledParagraph-sc-tbetod-0 kkqepf"><strong>Quick Tool Links: <a href="tools/random-team-generator/index.html" className="PickerWheelManual__Anchor-sc-1nyvcuw-0 ggyEAr">Team Picker Wheel</a>, <a href="tools/yes-or-no-wheel/index.html" className="PickerWheelManual__Anchor-sc-1nyvcuw-0 ggyEAr">Yes No Picker Wheel</a>, <a href="tools/random-number-generator/index.html" className="PickerWheelManual__Anchor-sc-1nyvcuw-0 ggyEAr">Number Picker Wheel</a>, <a href="tools/random-letter-generator/index.html" className="PickerWheelManual__Anchor-sc-1nyvcuw-0 ggyEAr">Letter Picker Wheel</a>, 
    <a href="tools/random-image-generator/index.html" className="PickerWheelManual__Anchor-sc-1nyvcuw-0 ggyEAr">Image Picker Wheel</a></strong></p>
<h1 className="StyledHeading-sc-1rdh4aw-0 eMgHIj">Picker Wheel - Spin the Wheel to Decide a Random Choice</h1>
<div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN"><div className="StyledBox-sc-13pk1d4-0 bFHoRg TableOfContent__TocBox-sc-pw6t8e-0 VWQLW"><p className="StyledParagraph-sc-tbetod-0 kkqepf"><strong>Section</strong></p><ol className="TableOfContent__Ol-sc-pw6t8e-1 etIfmr"><li><a href="#what-is-picker-wheel?" className="StyledAnchor-sc-1rp7lwl-0 jRXFL">What Is Picker Wheel?</a></li><li><a href="#how-to-use-this-spinner?" className="StyledAnchor-sc-1rp7lwl-0 jRXFL">How to Use This Spinner?</a></li><li><a href="#wheel-customization?" className="StyledAnchor-sc-1rp7lwl-0 jRXFL">Wheel Customization?</a></li><li><a href="#file-storage---how-to-save/open/delete-file?" className="StyledAnchor-sc-1rp7lwl-0 jRXFL">File Storage - How to Save/Open/Delete File?</a></li><li><a href="#enable-title-section" className="StyledAnchor-sc-1rp7lwl-0 jRXFL">Enable Title Section</a></li><li><a href="#enable-weight" className="StyledAnchor-sc-1rp7lwl-0 jRXFL">Enable Weight</a></li><li><a href="#view-all-results-or-scores" className="StyledAnchor-sc-1rp7lwl-0 jRXFL">View All Results or Scores</a></li><li><a href="#full-screen-view" className="StyledAnchor-sc-1rp7lwl-0 jRXFL">Full Screen View</a></li><li><a href="#types-of-action-modes" className="StyledAnchor-sc-1rp7lwl-0 jRXFL">Types of Action Modes</a></li><li><a href="#share-the-wheel-share-the-joy" className="StyledAnchor-sc-1rp7lwl-0 jRXFL">Share the Wheel Share the Joy</a></li><li><a href="#picker-wheel-family" className="StyledAnchor-sc-1rp7lwl-0 jRXFL">Picker Wheel Family</a></li><li><a href="#save-as-an-app-in-your-device" className="StyledAnchor-sc-1rp7lwl-0 jRXFL">Save as an App in Your Device</a></li><li><a href="#premium-personalized-plan" className="StyledAnchor-sc-1rp7lwl-0 jRXFL">Premium Personalized Plan</a></li><li><a href="#features-summary" className="StyledAnchor-sc-1rp7lwl-0 jRXFL">Features Summary</a></li></ol></div></div>
<h2 id="what-is-picker-wheel?" className="StyledHeading-sc-1rdh4aw-0 ctSmmn">1. What Is Picker Wheel?</h2>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">A stylish wheel spinner with various functions &amp; customization. Just enter inputs, spin the wheel and get your random result.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">In some situations, our brain just can&#x27;t make a decision, so why not let the wheel spinner making the small decision.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">By just inserting your inputs and spinning wheel, you will immediately get a random result.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">The wheel spinner will give you the fairest result by using the advanced algorithm behind it.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">People often use the tool for raffles, teachings, remote events, and many other places.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Sections below explain the deep-dive of the Picker Wheel features. You may go to the <a href="video-gallery/index.html" className="PickerWheelManual__Anchor-sc-1nyvcuw-0 ggyEAr">video gallery</a> page if you prefer to see videos.</p>
<div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN"><div className="StyledBox-sc-13pk1d4-0 dAeNYX Common__RelativeBox-sc-1fs44vl-0 xIhyt"><hr type="1" className="PickerWheelManual__Separator-sc-1nyvcuw-2 jgRHFu"/><img alt="Picker Wheel Logo" className="StyledImage-sc-ey4zx9-0 jFAHLS PickerWheelManual__ImageLogo-sc-1nyvcuw-3 cjfbBi" src="data:image/png;base64,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"/></div></div>
<h2 id="how-to-use-this-spinner?" className="StyledHeading-sc-1rdh4aw-0 ctSmmn">2. How to Use This Spinner?</h2>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Picker Wheel is a fast and easy random picker in only 3 main steps. Insert inputs, spin the wheel, and get the result. It has many features which make decision-solving fun.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Picker Wheel is very easy to use. Below are the few steps for using the spinner to pick a random choice.</p>
<ol>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Insert text or image inputs. You can mix both of them.</p>
<ul>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Insert the text input one by one by clicking the + button or return key from your device.</p>
</li>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Insert the image input by clicking the image input button.
<span className="gatsby-resp-image-wrapper" style={{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"465px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'10.92896174863388%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAACCAIA/3%2b3JZ6mPdn/r20DasGc4DezD/8VJIY0yMsco5W2sR0TkHAIhIRBQpvRNXvNu6%2bTqP2zjdpvW%2bcuLpm%2bAJ%2bMJSyg8QqV1LAITTbgAAAABJRU5ErkJggg%3d%3d%27.html)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Insert text or image input" title="Insert text or image input" src="static/3c68bfa6dd1a7a2c299312deba48d40d/9ff85/insert-text-image-input.png" srcSet="/static/3c68bfa6dd1a7a2c299312deba48d40d/e6f05/insert-text-image-input.png 183w /static/3c68bfa6dd1a7a2c299312deba48d40d/2e8d1/insert-text-image-input.png 365w /static/3c68bfa6dd1a7a2c299312deba48d40d/9ff85/insert-text-image-input.png 465w" sizes="(maxWidth: 465px) 100vw, 465px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
</li>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Use the view/import inputs tool which can directly add a list of text inputs. You can also view or copy-paste your existing inputs from here easily.
<span className="gatsby-resp-image-wrapper" style={{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"168px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'35.714285714285715%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIA/0lEQVQY042QwUrDQABE%2b1%2bFKv0B6a0EKQb0A3KoFQyK9tKj/ihDBqAlWmtkvUK3ysFGmZQqX3qRFK3Imhvmyi2GTWba4grT/ZpYGLvp2/ns//x4SavZ8noEpN7J%2bpWWQ0SlF)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Insert list of inputs" title="Insert list of inputs" src="static/34893fce38b5cf9a521db38649768545/9d904/Insert-list-of-inputs.png" srcSet="/static/34893fce38b5cf9a521db38649768545/9d904/Insert-list-of-inputs.png 168w" sizes="(maxWidth: 168px) 100vw, 168px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
</li>
</ul>
</li>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Lists of inputs are displayed. You can still change the input&#x27;s value, or hide an input or delete an input.
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"461px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'42.07650273224044%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYA/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA9klEQVQoz43Rb2/5%2bpFsP6wWG0sbzVaXUYwNa2p5X2GXvZmDOaLBxQOx9/xkHEckaYplmWBlBJC/DJvihG9lv4dr2Avnshvwvne)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="List of inputs" title="List of inputs" src="static/792c890887befb2b6ce735720539a432/f816d/List-of-inputs.png" srcSet="/static/792c890887befb2b6ce735720539a432/e6f05/List-of-inputs.png 183w /static/792c890887befb2b6ce735720539a432/2e8d1/List-of-inputs.png 365w /static/792c890887befb2b6ce735720539a432/f816d/List-of-inputs.png 461w" sizes="(maxWidth: 461px) 100vw, 461px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
</li>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Click the Spin button from the random wheel to start spinning the wheel.
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"150px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'100%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(&#x27;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAADz0lEQVQ4y33UfUxVdRzH8bM5V4rUKsspYEuw4inkXi6Hcx/BxCR5CLR7uVxYGWPmJggDbEnBaGtNK9t4EGaJzqLLVS4suQ8RrofV+qflX7lF1P9t2kUQDhDe+27nXA6BRH989jvnn9d+v/P9nY9Q3ZKE32thaEBSM+wxRp89RoY9Et4BIyMekenATuaDcciBeOaC0ciBOOaCCciBHcj+7SxO1CHsKtvEeqgGXvPkcMe/GlyL1RKZ7kNIK99CFN19HxqFB90mgl4ReTRBxeT/wcKhLoTU8i38iybhH9RQE1f7RUa8Bvp6jYx/uguub+XuyHbk4E7m1mCdhEPdCCmOGNagXhvez3WM+fNxXy5hX76JkhdEJgaN8EMy8sgjzPp3rMEik+eiO1yFHtrMq28mMOpz8f6ZRg4UFGOUTORIZvYXlHD+g1pmvssnPHGU8PTFVZi6QwXS0DRnLEllG3ixXkftieNkZopIUg5Wq0WNyZhDWobIyZONLN4ZIBLqIByKQss7VBAtqY4YdK88yolTR5FEE1arGavVisViUVebzUZeroW0dD2fXToN8xdYuNXBvb+6liMklj2Akt2HHiSuUOBA3R6qqqrIzs7GbDYjSRKiKKrvBoNBxZXnyspKmHLDTA/c/RhmzqsRihsSUVLSkERBXTy1775EWelh9Fl67HY7zc3NtLW10dTURGNjI4WFhYhiNgcPlnDjp4/4/de3GP+ljfGbrfx2sxXh79udKFm41UVksoM//7hIUVEpWVl6Kioq6O3tpaWlhfb2drq7u3G5XGTqMrEfdmBvtvH0yxvJcD1MekWsGoHJcyiJTPYQCXXCTD/HXq9Br9ezd28eeXl56pGVo5pMJnJzc9Wjv1Z9hP11qSSWblCHmuyIUSNoE1KyeLsL5F6+/aoHXZYFsyk6YWUYCmizWZEkEZtlH8dbj5Di3IR2S7QI2v3R1nuhLpi9RF/3KQxSPrqs6ECU6PUGzOZ83jvdTO6xp0gs20i6M3b5HqvgSiyi7HTqAvM/FxH+JoUfPTW80VCN0+nCWeGivr6G/ssNjPkLePtMMsmOh0h2bFZ/CA0VVmKRqU9YuFGKPLKVWd82ImPb4Hsdoa+f57qvnLFAMdcGs7nab2B02Er7h8/xrD36/TRUWIs9Fm2SYAIz/nhk3xNM+x7nC/cervQbGBowLrVQDl8OWWg/m8EzK1DhvzCt75S6mg/GMxV4Et8VpXRNS7UmqfCgW1pGtZ0K62HRNV4tVaWtldb2DhiXsPVRQftm92Nzwbh1wZWNrqBet0RwyMI7ZzP4BxGa2FkWgiIwAAAAAElFTkSuQmCC&#x27;)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Spin the wheel" title="Spin the wheel" src="static/5bfa96fe4661832a8c958c78391bbf28/8a4e8/Spin-button.png" srcSet="/static/5bfa96fe4661832a8c958c78391bbf28/8a4e8/Spin-button.png 150w" sizes="(maxWidth: 150px) 100vw, 150px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
</li>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Picker Wheel announces the choice selected where its pointer finally is pointing at after the wheel spin.</p>
</li>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Choose one of the action modes for the choice selected.
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"628px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'81.4207650273224%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(&#x27;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAACu0lEQVQ4y62T70tTURjH76teRFYQRRAk/Q29jd5Hr4MgtGQ2wTCIzFEasRTd3e9rbEom+eNFKMZ+6dwmBRks51z7oW5N3YZhu679cs7NatNv3KN3bK7eeeDDc57nPOd7n/PccyhB623YZs14b34HnWW8hN46TmIfPk9jdWUFwZUV+P1+LC8vEwKBQAkuHgqFYDabQWmGFTiu4fP5QMn7uomz+2sXhUKhjD/Y29sja8VikVjO5+acLYfL58bCwgIorVZDHC64v79P5rzN5/OIx+Nknslkqtb5wX/Y5XKB6usfqBLkE8LhMDQaDYxGI6RSKfR6PdbX1ytyqgRNY+rDY1VXmM1mEQwG4XQ6SX8cDgep9GiVvKDb7QY1Py09CJYJlm/gbDKZRDqdLvXqf0f2eDyg7JMHgsXC76pm8w3nKuXg23IU/qeRCh0W1fFem49jIuxkYkhGvyHGhsCyIcQ2w9jYWMP3KItYMg82nsVmPIvozyzYeA6JZAbpVAqpQ7iW5HI52O12UHJhDeTC01A11eCZ4Dwa7l5G/Z2LEDVfgFF7A9bhZlhHHsA22gLj63uYGRZgpP8FlKpXYBg11OpKKHnTGXAohDWQ3j+JprqzaBBcxUTvTeSMl5DU1WLLdg1bM9eR0NUiozsHy2A9ZKp+9DKqfwg2ngBBeArKlivobr8FCS2BST8BNuKC12mDd94C77wVHocVbOQrJg1jkMkVYBimWpAR14HpbARDi9DLKKHRDkCpUMJkmkIiuQ23dwnexQA8Pj/cniUkUtvQG0wQi8WgJTR6enoqoGiFGgS5ErSMhlQmQWeXGAaDHvncDtjoDywt+rC2torYJovcThaTUyZ0dr2ETC4FLZVUQInaH6NERyuePm/Do7aHGBx6g0gkQu7W7OwnzM19gdfrJc9xaPQtyeFyRR1PyD6ev+9XODMjcuNMAAAAAElFTkSuQmCC&#x27;)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Result selected and list of modes" title="Result selected and list of modes" src="static/8e3980b91bc0fdaf0b8e08c6c6dba26f/3d84d/Display-result.png" srcSet="/static/8e3980b91bc0fdaf0b8e08c6c6dba26f/e6f05/Display-result.png 183w /static/8e3980b91bc0fdaf0b8e08c6c6dba26f/2e8d1/Display-result.png 365w /static/8e3980b91bc0fdaf0b8e08c6c6dba26f/3d84d/Display-result.png 628w" sizes="(maxWidth: 628px) 100vw, 628px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
</li>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">There are other functions you may consider to use e.g. shuffle the inputs. Click the more button to see them.
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"218px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'154.6448087431694%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(&#x27;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAfCAIAAABoLHqZAAAACXBIWXMAABYlAAAWJQFJUiTwAAADnUlEQVQ4y62US28bVRTHs2PDhhUrJJBYwFdgUdasEV0g8QWQWLAqCx5SBCgVG8SKBaJWEqJShbSx27ru2JnYspwoiZyZ2Mn4kYfjeOJMHXve1zP3cQ6yxzFJSZoW8ZdmpHtnfuee553AiwIERBSiL5gFgg13EIACcIGwTtezQTYX5PJh3hf+xHmSC+71feZaGHgo0LUPXM+GXtXdfYCnqsVOF4O4g7aLrhzKGtNGsACBiM1e8+3b77w79daHP924+cfNzxe/eP3L1z749r03J9+4MfX+x79+9Nh60muZvSNLDdQKq4xggIG3ru9OxW9Pzt/64c+vf3ny88O1vybvffXdnc++n/n0m98++fHerft23OnZdtdeD9e32fZEhJ49MFxyBIookNmDJe2CvYnkkAJdJItP6dMMzSz0FwxhTOClAsGYN7I1CAqe/0EMMjmAhVNB0iQBz+WypVJJUZT9g4NqtZbP5wuFwu7u7sbGhqoomqatrK4oilKv1wGBCz6AwT/E4CSkkM0uS5KUTqer1Wq73d7Z2clkMqWhUqmUqqqrq6u5XK5cLg/LKa5wexz/FRJDTeBLKDIEQwkhovcIhrCLzAopM4wTxhghpNfrEUIcxzk+PiaEBEFgmqbneZeczPZ/R+Nx1yKLD+4nk8mZmZlYLJZIJNbW1mZnZ+fn5+fm5mKx2MrKSoRdgIH7KEIAoJT2+33P8wghlFI2FKW02Wy6rss5f4WYX5Cz8ycTYG6UkdGEcB65dz5J522dwTwQZgmtou/ZDx89kuWlQqGwsLCQSqVM07zq/BEMnAhrC4MTSlm5VNI0TVGUVqulqqplWdfA+J/0vyQMAJmP3OecO44TVct13SAIwjB0XTdqkjAMKaWEkIt1BoFBF6lFKet0Os+eGa1WS9d1wzBs226326ZpGoYR7ei6Tgi56LagCOwFbj9Xpytj/vd/18EiAO4DIKXh+BsARL0ZhmEU57hzLsC8t4HWhu2QWOxOMplMp9OpVGpzc3N6erpYLMpD5XI5WZbj8Xin0xkbikayg8wRAk7a7UajcXh4qOu6ZVm6rkdTeXR0tL+/f3p62mg0fN+/vs7jC+DS/ZfqsKtM/AMTVaV7ez6lmXRa07RyuVypVGq12sFQ+Xy+Xq9vbW3VarVqtVosFselHsDdu3ddSQoR5UxGkqRCoSDLcnTvbm9vLy0t7e3tLS8vJxKJbDYrSZJhGFHOhgkTAs5q8EqD8TcyM7+2OCMn4gAAAABJRU5ErkJggg==&#x27;)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="More button menu" title="More button menu" src="static/e5e8b7aedd921a5de57c84dc7d77345b/5c416/more-button-menu.png" srcSet="/static/e5e8b7aedd921a5de57c84dc7d77345b/e6f05/more-button-menu.png 183w /static/e5e8b7aedd921a5de57c84dc7d77345b/5c416/more-button-menu.png 218w" sizes="(maxWidth: 218px) 100vw, 218px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
</li>
</ol>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Those are the basic simple steps for using the wheel spinner. Please continue to read on as there are still many great features behind you may use.</p>
<div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN"><div className="StyledBox-sc-13pk1d4-0 dAeNYX Common__RelativeBox-sc-1fs44vl-0 xIhyt"><hr type="1" className="PickerWheelManual__Separator-sc-1nyvcuw-2 jgRHFu"/><img alt="Picker Wheel Logo" className="StyledImage-sc-ey4zx9-0 jFAHLS PickerWheelManual__ImageLogo-sc-1nyvcuw-3 cjfbBi" src="data:image/png;base64,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"/></div></div>
<h2 id="wheel-customization?" className="StyledHeading-sc-1rdh4aw-0 ctSmmn">3. Wheel Customization?</h2>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">There are many customization or configuration that you can apply to the wheel to suit your needs.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">You can do it at the Tool Settings section (below the wheel section). This is where the Tool Settings is located: (Click it then it will expand)
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"730px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'30.601092896174865%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYA/G6G/JDW9ZLQtnebmhTRpsV0UCk014MZFcKJGnHnFGFfFjXTx8MH/D5k%2bPFG8pkxmoyO80w1O81eqv5q%2bzB9Rnj%2bNb3wBhm6xwy6/PcHXS3Z1GvWm9VF9GrJHl3rnHUL0XBlA)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Random name picker tool settings location" title="Random name picker tool settings location" src="static/1801317ab3c2d26367f9fdc437fc6e03/e9beb/tool-settings-location.png" srcSet="/static/1801317ab3c2d26367f9fdc437fc6e03/e6f05/tool-settings-location.png 183w /static/1801317ab3c2d26367f9fdc437fc6e03/2e8d1/tool-settings-location.png 365w /static/1801317ab3c2d26367f9fdc437fc6e03/e9beb/tool-settings-location.png 730w /static/1801317ab3c2d26367f9fdc437fc6e03/07a6a/tool-settings-location.png 1095w /static/1801317ab3c2d26367f9fdc437fc6e03/29c1d/tool-settings-location.png 1375w" sizes="(maxWidth: 730px) 100vw, 730px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">These are the settings you can configure:</p>
<ul>
<li>Spinning duration (lvl1 to lv10).</li>
<li>Spinning speed (1s to 30s).</li>
<li>Enable manual stop button.</li>
<li>Fix the initial angle.</li>
<li>Mystery spin (replace inputs on wheels with “?”)</li>
<li>Disable confetti.</li>
<li>Mute sound.</li>
<li>Customize starting, spinning, and ending sounds.</li>
<li>Change the wheel colors with several themes provided.</li>
<li>Change the background color of the whole section.</li>
<li>Customize wheel colors and background color with your own colors. <strong>(Premium Users)</strong></li>
<li>Adding your own logo or banner. <strong>(Premium Users)</strong></li>
</ul>
<div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN"><div className="StyledBox-sc-13pk1d4-0 dAeNYX Common__RelativeBox-sc-1fs44vl-0 xIhyt"><hr type="1" className="PickerWheelManual__Separator-sc-1nyvcuw-2 jgRHFu"/><img alt="Picker Wheel Logo" className="StyledImage-sc-ey4zx9-0 jFAHLS PickerWheelManual__ImageLogo-sc-1nyvcuw-3 cjfbBi" src="data:image/png;base64,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"/></div></div>
<h2 id="file-storage---how-to-save/open/delete-file?" className="StyledHeading-sc-1rdh4aw-0 ctSmmn">4. File Storage - How to Save/Open/Delete File?</h2>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">This is only applicable for logged-in users. It is free to sign up for an account. Click the menu button (top right of the page) and sign up.
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"177px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'24.858757062146893%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYA/4rrlvlHF3XIQxDEvq%2bxzRNxIdhQFVVxOu6RpIkKMsS8zzfO/ggyjKALnL2zbhjiO4TgOdF0HYwyGYcDzPAq0LAuqqpJu2zY/T2rcM3hol2qBlGHRkAAAAASUVORK5CYII%3d%27)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="login-signup-menu" title="login-signup-menu" src="static/c0348c682320b03bb04ee3f913c1085b/6e666/login-signup-menu.png" srcSet="/static/c0348c682320b03bb04ee3f913c1085b/6e666/login-signup-menu.png 177w" sizes="(maxWidth: 177px) 100vw, 177px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">For non-logged-in users, by default, the inputs with the latest status will be saved automatically in your browser&#x27;s storage. So, you can still access the same data the next time when you visit again at the same browser.
<i>*please take note the data might be lost if you clear the browser&#x27;s history or when your browser&#x27;s memory is overloaded.</i></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">For logged-in users, you have more benefits for the file storage.</p>
<ul>
<li>You can save more than 1 file. <strong>(Free Users - 15 Files available, Premium Users - Unlimited)</strong></li>
<li>You can access it with any device.</li>
<li>Feeling peace of mind without worrying the data loss.</li>
</ul>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">There are two types of data you can save into the files which are &quot;List&quot; type and &quot;Share&quot; type.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf"><strong>List type</strong> - this is the private data that only you can open and edit.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf"><strong>Share type</strong> - this is the public data that everyone can open with the share link but only you have the edit permission.</p>
<h3 className="StyledHeading-sc-1rdh4aw-0 fWCAgN">4.1. List Type - How to Save?</h3>
<ol>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Once you have done preparing your data. Click the &quot;File&quot; button. Choose &quot;Save List to File..&quot;.
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"53px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'100%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYA/cKeGRIMr48K/oG4krkwgmEiwiQVhYYiYQCA%2bglBAAolYpaW3pRRoeYXeuef/Up0dmzNGKTAw36FXbxwQKo%2bhbcKcGoIxiOYHQEo9rQnVV3d//wFaFCQtgAAAABJRU5ErkJgg)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="File button" title="File button" src="static/3e8822d9eb3006b8c8ee87e36d6a8003/c069f/file-button.png" srcSet="/static/3e8822d9eb3006b8c8ee87e36d6a8003/c069f/file-button.png 53w" sizes="(maxWidth: 53px) 100vw, 53px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span>
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"209px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'66.12021857923497%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYA/aUBzF%2b/YNyv/qJx8nBZ2DCi4yGvhGIpFBkYXQiGqAN5VF6FAvbez9KLIVtc/YDChISywTauR/YT4HTYj5bEDuJET%2bLc3qyCfbDLhIXZFIZ7p/7vAAAAAElFTkSuQmCC%27.31)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="List type save menu" title="List type save menu" src="static/dc9e77bfe01b98eb5ba93bc8bc8c3c4d/e91cc/save-menu.png" srcSet="/static/dc9e77bfe01b98eb5ba93bc8bc8c3c4d/e6f05/save-menu.png 183w /static/dc9e77bfe01b98eb5ba93bc8bc8c3c4d/e91cc/save-menu.png 209w" sizes="(maxWidth: 209px) 100vw, 209px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
</li>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Choose a file to save then assign it with a name. You may also replace the same type of old file. It will save your data with their latest statuses. You may tick &quot;Include current settings&quot; to include your current tool settings e.g. tool colors.
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"400px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'72.67759562841529%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYA/e1KSHHkopbYWyFCiFUhaWMbMtNZFaWzcZvs0ymW%2b%2bH5GmKc/DADM02nU1PmbO2Ob3THtpDD%2bGcPwyg0Q7FtG5Zlodvtmhaw/W3gRpD/E0myi/ajCxLlMo5w6qf2NQ9q9R2rc)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="List file save" title="List file save" src="static/1e2231621538b5740c204b3d854e6bd5/e17e5/list-file-save.png" srcSet="/static/1e2231621538b5740c204b3d854e6bd5/e6f05/list-file-save.png 183w /static/1e2231621538b5740c204b3d854e6bd5/2e8d1/list-file-save.png 365w /static/1e2231621538b5740c204b3d854e6bd5/e17e5/list-file-save.png 400w" sizes="(maxWidth: 400px) 100vw, 400px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
</li>
</ol>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">**There are only three tools: Picker Wheel, Team Picker Wheel and Image Picker Wheel can save &quot;List&quot; file.</p>
<h3 className="StyledHeading-sc-1rdh4aw-0 fWCAgN">4.2. Share Type - How to Save?</h3>
<ol>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf"><a href="#share-the-wheel-share-the-joy" className="PickerWheelManual__Anchor-sc-1nyvcuw-0 ggyEAr">After created your share link</a>, you can click the option to &quot;Save Link to File&quot;.
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"406px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'56.830601092896174%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYA/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB6UlEQVQoz3W/tDfnfz7%2b5ypBEGJZbVzXZTQa0Wrd03McfN/Htv/KO/E/DEP2J%2bP0yaQp/cGA/e2MP3XBaLxZ5YkEjkkfBc6Z)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Save share link" title="Save share link" src="static/884b740c41f5b9fb2f854ee7be616886/e33ef/save-share-link.png" srcSet="/static/884b740c41f5b9fb2f854ee7be616886/e6f05/save-share-link.png 183w /static/884b740c41f5b9fb2f854ee7be616886/2e8d1/save-share-link.png 365w /static/884b740c41f5b9fb2f854ee7be616886/e33ef/save-share-link.png 406w" sizes="(maxWidth: 406px) 100vw, 406px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
</li>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Choose a file to save then name the file. Or replace the same type of old file.
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"418px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'78.14207650273224%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYA/P97QwNj%2bruqnpV9bqNMAxxOByglEIURYI4jlurEcWNj7G0u/fx3A4lH2v14Nt2zBNs/XRBkGAd%2b8/YO66DWGSJGCXdOz3e0wmE8znc7DQcrm/PkC6bdnUF8MlM7Hppu6%2bEfC)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Share file save" title="Share file save" src="static/9981d63e0356c25a2e521a8ca3675ade/d7398/share-file-save.png" srcSet="/static/9981d63e0356c25a2e521a8ca3675ade/e6f05/share-file-save.png 183w /static/9981d63e0356c25a2e521a8ca3675ade/2e8d1/share-file-save.png 365w /static/9981d63e0356c25a2e521a8ca3675ade/d7398/share-file-save.png 418w" sizes="(maxWidth: 418px) 100vw, 418px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
</li>
</ol>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">**There are only two tools: Picker Wheel and Image Picker Wheel can save &quot;Share&quot; file.</p>
<h3 className="StyledHeading-sc-1rdh4aw-0 fWCAgN">4.3. List and Share Types: How to Open/Delete File?</h3>
<ol>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Click the File button. Choose either &quot;Open File..&quot;, &quot;Delete Saved File..&quot;
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"209px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'66.12021857923497%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYA/0qSJaZMm%2bEJFsYIgtQh3hxzIuyCIiC8xFAggohREOTj27tf/j9fnw%2bH41G47WpDUmIJ4xBAmtSY/QwJrAbILQXYie4QyqTIlfIEY6EicgRzi/XwHRgqxyBQnvGYAAAAASUVO)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Open delete menu" title="Open delete menu" src="static/f1b5d9224d62550fba4297c7a39b16ef/e91cc/open-delete-menu.png" srcSet="/static/f1b5d9224d62550fba4297c7a39b16ef/e6f05/open-delete-menu.png 183w /static/f1b5d9224d62550fba4297c7a39b16ef/e91cc/open-delete-menu.png 209w" sizes="(maxWidth: 209px) 100vw, 209px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
</li>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">For open: Choose a file to open. You can open and edit your &quot;List&quot; type and &quot;Share&quot; type of file from here.</p>
</li>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">For delete: Choose a file to delete. You can delete &quot;List&quot; type and &quot;Share&quot; type of file from here.</p>
</li>
</ol>
<div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN"><div className="StyledBox-sc-13pk1d4-0 dAeNYX Common__RelativeBox-sc-1fs44vl-0 xIhyt"><hr type="1" className="PickerWheelManual__Separator-sc-1nyvcuw-2 jgRHFu"/><img alt="Picker Wheel Logo" className="StyledImage-sc-ey4zx9-0 jFAHLS PickerWheelManual__ImageLogo-sc-1nyvcuw-3 cjfbBi" src="data:image/png;base64,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"/></div></div>
<h2 id="enable-title-section" className="StyledHeading-sc-1rdh4aw-0 ctSmmn">5. Enable Title Section</h2>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">By using the title, your audiences know what the purpose of your spin wheel is.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">You can open or close the title section by clicking the More Button from the Inputs section.
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"205px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'47.54098360655738%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIA/aQBCG/f8PPXCJekqbqkrTSvQjkYJNYmMHBGYXYwhqYgdSEgUK5cNr/RT4AtIJIoDc5GtXLOvIo59qXkpK5ax8zI8PkgMN/4kSwOeQrSF5BBE/AdCEd6Im0hFvwGVQRADNYd7)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Open or close title section" title="Open or close title section" src="static/974cd52465d8b3b9d7f9620e3543dec8/85860/open-title-section.png" srcSet="/static/974cd52465d8b3b9d7f9620e3543dec8/e6f05/open-title-section.png 183w /static/974cd52465d8b3b9d7f9620e3543dec8/85860/open-title-section.png 205w" sizes="(maxWidth: 205px) 100vw, 205px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">And write down the name.
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"494px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'16.393442622950822%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYA/9/OK3FGysbNQsE1B2YYtHkkkyjOi9U4yRcs6XEAJTSuEKDX1K/8ir%2bEwHtPzjneKaXIWstpoR39L%2bEDHtLdL2V6oMsAAAAASUVORK5CYII%3d%27.html)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Write title" title="Write title" src="static/1a6536e60e3ccb11bd9c41d385ca3854/d72d4/write-title.png" srcSet="/static/1a6536e60e3ccb11bd9c41d385ca3854/e6f05/write-title.png 183w /static/1a6536e60e3ccb11bd9c41d385ca3854/2e8d1/write-title.png 365w /static/1a6536e60e3ccb11bd9c41d385ca3854/d72d4/write-title.png 494w" sizes="(maxWidth: 494px) 100vw, 494px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">The title will also be displayed together when the result announces
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"630px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'62.29508196721311%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIA/eu1%2bP3W%2bVatP5cln3e77f87xrz%2b/53vV/h9Tn7fP6Vb3oFIVPdhYAIkYZAAVOgKx5Ccv1ClsCQLPZFKy/oGtBGbJPZ7gHABs2y6VSo7jWJaV/TCnFEAAAAASUVORK5CYII%3d%27)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Title on the result" title="Title on the result" src="static/8dd574f8195f502b1cc0b4e43b408219/f058b/title-on-the-result.png" srcSet="/static/8dd574f8195f502b1cc0b4e43b408219/e6f05/title-on-the-result.png 183w /static/8dd574f8195f502b1cc0b4e43b408219/2e8d1/title-on-the-result.png 365w /static/8dd574f8195f502b1cc0b4e43b408219/f058b/title-on-the-result.png 630w" sizes="(maxWidth: 630px) 100vw, 630px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN"><div className="StyledBox-sc-13pk1d4-0 dAeNYX Common__RelativeBox-sc-1fs44vl-0 xIhyt"><hr type="1" className="PickerWheelManual__Separator-sc-1nyvcuw-2 jgRHFu"/><img alt="Picker Wheel Logo" className="StyledImage-sc-ey4zx9-0 jFAHLS PickerWheelManual__ImageLogo-sc-1nyvcuw-3 cjfbBi" src="data:image/png;base64,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"/></div></div>
<h2 id="enable-weight" className="StyledHeading-sc-1rdh4aw-0 ctSmmn">6. Enable Weight</h2>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">By default, every input is distributed equally in portion size in a randomizer wheel.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">However, you can change this behavior by enabling the weight.
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"222px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'68.30601092896174%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIA/f8fO/0JTR/IJNNJjHEBG%2bxgYhJC44IzmEvD1aQYEhN8kWRpt3WY5qFDe2/8acVXDJl0xBQE0icQBOgG2U7E02z5hS7PMZrJpFRkxXu4Py/jQ/wLac36HzNoY18AAAAASUVOR)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Enable or disable weight" title="Enable or disable weight" src="static/ba9aa9862cfaf1f8b992e1a8ec460265/6bc44/enable-disable-weight.png" srcSet="/static/ba9aa9862cfaf1f8b992e1a8ec460265/e6f05/enable-disable-weight.png 183w /static/ba9aa9862cfaf1f8b992e1a8ec460265/6bc44/enable-disable-weight.png 222w" sizes="(maxWidth: 222px) 100vw, 222px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">You have one more weight field that can fill in for each of your inputs by enabling that.
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"477px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'71.0382513661202%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYA/JspLXvpQpQ9po4hRFphs0wQIDGtIWIPB5oyuI6btKEstHYH/gOO/I8xzU2ra9LcEhSheiCtEE38GzLcpLg7pmUDzfx2Si4vduj8/xeAxN09D/PMx%2bQAsnyOGoOvpsQAAAABJ)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Weight field" title="Weight field" src="static/3571ebaeec1d677dee3fe9ec06faccca/d743b/weight-field.png" srcSet="/static/3571ebaeec1d677dee3fe9ec06faccca/e6f05/weight-field.png 183w /static/3571ebaeec1d677dee3fe9ec06faccca/2e8d1/weight-field.png 365w /static/3571ebaeec1d677dee3fe9ec06faccca/d743b/weight-field.png 477w" sizes="(maxWidth: 477px) 100vw, 477px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">All the weights assigned will be sum together and each input&#x27;s portion size is drawn based on its weight out of the total weights.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">The weight feature can be enabled or disabled by clicking More Button from the Inputs section.</p>
<div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN"><div className="StyledBox-sc-13pk1d4-0 dAeNYX Common__RelativeBox-sc-1fs44vl-0 xIhyt"><hr type="1" className="PickerWheelManual__Separator-sc-1nyvcuw-2 jgRHFu"/><img alt="Picker Wheel Logo" className="StyledImage-sc-ey4zx9-0 jFAHLS PickerWheelManual__ImageLogo-sc-1nyvcuw-3 cjfbBi" src="data:image/png;base64,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"/></div></div>
<h2 id="view-all-results-or-scores" className="StyledHeading-sc-1rdh4aw-0 ctSmmn">7. View All Results or Scores</h2>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">To review all your result or see all the scores (accumulated by the counts), you can click the &quot;Open All Results&quot; button.
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"61px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'106.55737704918033%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYA/UP/AFRUGwUBC1stBZsRAyFVmIhWNjZmAMqRhAxYMJwHmdglg2z/MGhjvOzj333KiGf16a9eL7/YptPKu2/O4KaAVyWiqjNkDVg8/ng8vlgv1/4AgigvX1e%2bu9MAAAAASUVOR)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Open all results button" title="Open all results button" src="static/feef5de8cb26f44001a642f24501c344/900ea/open-all-results-button.png" srcSet="/static/feef5de8cb26f44001a642f24501c344/900ea/open-all-results-button.png 61w" sizes="(maxWidth: 61px) 100vw, 61px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">It will show you all the results that had let the wheel decide since the first wheel spin of your current visit.
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"606px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'46.44808743169399%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYA/M5uANfFiZe3s7L3%2bb/3KZrMhSRIOvpWaBQJTLxPNu%2bw%2beDx9ifj6FLP/NOExMXGdGtOJcfqTeqrdbofyPGy9XuKJFv6wwirWEO5bhFP/uAVW/f4QqYaARzu7ljl3rEtNQ6dx)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="All results history" title="All results history" src="static/7658803a36e7a6b6aefd0fde8873cd2b/4d4a2/all-results-history.png" srcSet="/static/7658803a36e7a6b6aefd0fde8873cd2b/e6f05/all-results-history.png 183w /static/7658803a36e7a6b6aefd0fde8873cd2b/2e8d1/all-results-history.png 365w /static/7658803a36e7a6b6aefd0fde8873cd2b/4d4a2/all-results-history.png 606w" sizes="(maxWidth: 606px) 100vw, 606px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">You can also see the summary of the scores from your current wheel input in descending order.
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"604px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'29.508196721311474%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYA/8Qyp6YoDzuTSWbW7NlKnucURcFvLWtttwLHviFLdY5vLt%2bn/Hs/pE4gRtjUmXk95ijQ28R3rYEIcyX6Ka/fwPI0kOVxAlT/YM8K/xbFUwtUN/7pywAAAABJRU5ErkJggg%3d%3d%27)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="All results scores" title="All results scores" src="static/32541f2887f5c674551740f3cc4ab1e1/87254/all-results-scores.png" srcSet="/static/32541f2887f5c674551740f3cc4ab1e1/e6f05/all-results-scores.png 183w /static/32541f2887f5c674551740f3cc4ab1e1/2e8d1/all-results-scores.png 365w /static/32541f2887f5c674551740f3cc4ab1e1/87254/all-results-scores.png 604w" sizes="(maxWidth: 604px) 100vw, 604px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">You can save results/score as image by clicking the download button.
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"30px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'96.66666666666666%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYA/AAWRmCAzr7IHiAQMSFO8EDuMzKTcBxFtl5CC9QQzUEVPLeh/G7JpNBqh1WphvV4LyKlVHvh8RM/zUK/XsdvtBOTUdBEYuuOOx2M0Gg1sNhsB/ZL%2be0m0X1Vla6vl16wfx34A)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Image download button" title="Image download button" src="static/11fccaa3b90773586461cf4013329b46/f6700/image-download-button.png" srcSet="/static/11fccaa3b90773586461cf4013329b46/f6700/image-download-button.png 30w" sizes="(maxWidth: 30px) 100vw, 30px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN"><div className="StyledBox-sc-13pk1d4-0 dAeNYX Common__RelativeBox-sc-1fs44vl-0 xIhyt"><hr type="1" className="PickerWheelManual__Separator-sc-1nyvcuw-2 jgRHFu"/><img alt="Picker Wheel Logo" className="StyledImage-sc-ey4zx9-0 jFAHLS PickerWheelManual__ImageLogo-sc-1nyvcuw-3 cjfbBi" src="data:image/png;base64,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"/></div></div>
<h2 id="full-screen-view" className="StyledHeading-sc-1rdh4aw-0 ctSmmn">8. Full Screen View</h2>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">You can also enter or exit the full-screen view by clicking the full-screen button. (Available in a tablet and desktop device only)
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"63px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'104.76190476190477%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYA/23M5AwP9SbybGhiSxvj1nJkkddBwc0yTeZ5LFMfFqK6xAm0/7eU1YBV2uVyQpimSJEEcx9Lz%2bXq9wvY/xzT5%2bXxwOBywXq%2bx2WwQRZFEGIZY/ktmn8PvzJjd3EN%2bUPUTQ9D1)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Full screen button" title="Full screen button" src="static/57ab1074d61e997f5082c06c2af98001/0ef21/full-screen-button.png" srcSet="/static/57ab1074d61e997f5082c06c2af98001/0ef21/full-screen-button.png 63w" sizes="(maxWidth: 63px) 100vw, 63px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">By entering full-screen view, it will enlarge the wheel picker size and the inputs section will be hidden.
<span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"730px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'61.74863387978142%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYA/yJYsSLzRhWKiZoVHUUw9BUGoiGBj1D/TQQ9JL9BJGiViZXTANdXRmbLS5aTMwo%2bhMecFCUSIs6MXL3/AHP2tv/Q8EOy7U4iflzBd0fC2htyU/wD2iS3wr0RMhwAAAABJRU5E)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Full screen view" title="Full screen view" src="static/e7f1f336d3fb7863793227803d3abaf5/e9beb/full-screen-view.png" srcSet="/static/e7f1f336d3fb7863793227803d3abaf5/e6f05/full-screen-view.png 183w /static/e7f1f336d3fb7863793227803d3abaf5/2e8d1/full-screen-view.png 365w /static/e7f1f336d3fb7863793227803d3abaf5/e9beb/full-screen-view.png 730w /static/e7f1f336d3fb7863793227803d3abaf5/07a6a/full-screen-view.png 1095w /static/e7f1f336d3fb7863793227803d3abaf5/f2331/full-screen-view.png 1427w" sizes="(maxWidth: 730px) 100vw, 730px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">You can still see your results or scores from the &quot;Open All Results&quot; button.</p>
<div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN"><div className="StyledBox-sc-13pk1d4-0 dAeNYX Common__RelativeBox-sc-1fs44vl-0 xIhyt"><hr type="1" className="PickerWheelManual__Separator-sc-1nyvcuw-2 jgRHFu"/><img alt="Picker Wheel Logo" className="StyledImage-sc-ey4zx9-0 jFAHLS PickerWheelManual__ImageLogo-sc-1nyvcuw-3 cjfbBi" src="data:image/png;base64,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"/></div></div>
<h2 id="types-of-action-modes" className="StyledHeading-sc-1rdh4aw-0 ctSmmn">9. Types of Action Modes</h2>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">You can insert whatever inputs which you wish to let the spinner wheel decide for you. There are 3 modes that the users can choose to <a href="../www.lifehack.org/articles/featured/how-to-make-the-right-choice.html" target="_blank" rel="noreferrer noopener" className="PickerWheelManual__Anchor-sc-1nyvcuw-0 ggyEAr">make the right choice</a>.</p>
<h3 className="StyledHeading-sc-1rdh4aw-0 fWCAgN">9.1. Normal Mode</h3>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">It is a one-off random decision picker mode. The randomizer wheel will announce the result selected when the user clicks the done button. The result selected will not have any side effect e.g. hidden.</p>
<h4 className="StyledHeading-sc-1rdh4aw-0 hemXjQ">Use Case 1</h4>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">This can be used as a random name Picker Wheel where its behavior is like a digital prize wheel. It will decide 1 winner among the list of candidates’ names from a contest after spinning the wheel.</p>
<div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN"><div className="StyledBox-sc-13pk1d4-0 dAeNYX Common__RelativeBox-sc-1fs44vl-0 xIhyt"><hr type="2" className="PickerWheelManual__Separator-sc-1nyvcuw-2 fPhdzp"/><img alt="Picker Wheel Logo" className="StyledImage-sc-ey4zx9-0 jFAHLS PickerWheelManual__ImageLogo-sc-1nyvcuw-3 cjfbBi" src="data:image/png;base64,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"/></div></div>
<h3 className="StyledHeading-sc-1rdh4aw-0 fWCAgN">9.2. Elimination Mode</h3>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">It picks a random name alternately by eliminating the inputs one by one. The result will be temporarily removed from the wheel in the next round.</p>
<h4 className="StyledHeading-sc-1rdh4aw-0 hemXjQ">Use Case 2</h4>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">This random name Picker Wheel can be used in a classroom when the teacher can call the students out to solve some questions one by one without repeating the same name.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf"><span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"230px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'74.31693989071037%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(&#x27;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAACpUlEQVQ4y31Uz28SQRTef0I9KE3UNjWN1WiMVw/GsxelaGNMTI09aOLJaqqHerAHr1VhD5RiLQ2CknR3WQps+b2UFm2hP/6AxqjRqKHAArvMZ2boEmqwk3yZed+bt/Nm33yPGx+7BN7+AG+mRvF66h54+0MsLHyEJAUhSRKCwSADXcuy3ObcbjcEQWC2KIrM53Q6wfm8kzhoNJtNBjp0XT9wbzgcBjc/N8GMRqMGw9Bh6Ho7cGdnh2Xi9/vh8XjgcrlQKpVACGF7DMNgMPfTLLmA/+V/TyRNHT9+fMfvXz9RKv3Bt69fDswwGomAez5xFfF0BqlsASl1DansehuZXBHL+W0s57eQXd1E7tM249PLBYhyAsnMZ2Yn1TWoKxuYfTcPbvLJRUiOaxD5YYj8zRYcNoiOIQbBvgeHDYLdyjiJt+Ht5BUs2G2Q9mKC/BCcU0/BpeZuA9EjMBYtIItHQcIWkMgJEKUfRDkFEu0Fifa1ODpTW+kHYgMg4WMsprloASKHEXLdBafM3EJDtmBX7ENZPI5yaBBaYRza+ji0wjNUc3dQzY2gunof2vpjaGuPGF/JjaAsnkRZ6mWxdbkHknMUXHJ2GIgeYqe0MuwBWToNEjsLxM+DxAZBYmdAlgYYx3zxc0DyQus2/2Y482qM3b/9//gbEB1WCPbre7B2oGVLDivcLy53/4fz3g+sQsl9FS4wLru6BXVlk4GuaaWpj86CHEeio8qZ3AbmPF5waibT9U3peh3Vyi4adY2hUtlFTau01GM0usa893rBJRKJtqzoq6cyq1arUBQFgUCAqcTn82F6ehr5fB7FYhGqqu6LMZVCNc2l0+mup9XrdWiahlqtxtamnk1ftxGhSqFapRqkX6edwwTlQqEQmynMjtPZdUx0dpu/UNLagDLeZ3EAAAAASUVORK5CYII=&#x27;)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Elimination mode" title="Elimination mode" src="static/ac42b1d17baeb6a8a2f7363f11797d94/81c8e/Elimination-mode.png" srcSet="/static/ac42b1d17baeb6a8a2f7363f11797d94/e6f05/Elimination-mode.png 183w /static/ac42b1d17baeb6a8a2f7363f11797d94/81c8e/Elimination-mode.png 230w" sizes="(maxWidth: 230px) 100vw, 230px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf"><span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"466px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'41.53005464480874%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYA/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA7klEQVQoz5WQ62/6v1kIvW6FZc9GaLFW63jWOln5lstS/awOHIcmQOflE27ZIkgRVVWEcRwzDcI/MjROwlzOoKrCVte3DKWU8bt)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Eliminated result" title="Eliminated result" src="static/ba4c97d4c150d23ec48689830fbb7ea2/fc1a1/Elimination-input-list.png" srcSet="/static/ba4c97d4c150d23ec48689830fbb7ea2/e6f05/Elimination-input-list.png 183w /static/ba4c97d4c150d23ec48689830fbb7ea2/2e8d1/Elimination-input-list.png 365w /static/ba4c97d4c150d23ec48689830fbb7ea2/fc1a1/Elimination-input-list.png 466w" sizes="(maxWidth: 466px) 100vw, 466px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN"><div className="StyledBox-sc-13pk1d4-0 dAeNYX Common__RelativeBox-sc-1fs44vl-0 xIhyt"><hr type="2" className="PickerWheelManual__Separator-sc-1nyvcuw-2 fPhdzp"/><img alt="Picker Wheel Logo" className="StyledImage-sc-ey4zx9-0 jFAHLS PickerWheelManual__ImageLogo-sc-1nyvcuw-3 cjfbBi" src="data:image/png;base64,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"/></div></div>
<h3 className="StyledHeading-sc-1rdh4aw-0 fWCAgN">9.3. Accumulation Mode</h3>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">It is a random decision accumulation mode. The count of each input selected is accumulated and carried forward to the next spin.</p>
<h4 className="StyledHeading-sc-1rdh4aw-0 hemXjQ">Use Case 3</h4>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">This can be used to decide a meal to eat. Instead of spinning the wheel for only 1 time and decide what food to eat (The user might get less convinced with a 1-time result), this mode accumulates each of the choices’ count after several spins to further convince you to make a decision.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf"><span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"237px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'73.22404371584699%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(&#x27;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAADFElEQVQ4y62R72+TVRTHnwQxiIlvTEyQbR2ZGH2jLxRNBCqTbQwFERdfsEmG2ZhGic79qMLABQvZjAE306Zr0XVbWe3WuWLb9enajXY/Am32Qv0PYC+XgQ629nmers+HPHeIEgzxhTf55J57zrn3nHO/Usn2J6lqqOSdurL7qS/nQN1u3vvwTQYu9nEpcImRkRFGR0fx+/04nU5he71eOjs7sVqt1NfXIxkX/69lFJL2f1AqDlkli6apaDkNVVWF79r1a/iGfASDQYaGhnC73SwsLIhYLpdjdXVVoGma8Bk5UlXDnodWXfrjNouLi9y8eYP5+fmH5no8HqQXK4o5030Sa1cb550d2HrP852rE0dfNx22djpsX5GcSpBOpwWzs7Mkk0lCoZCwE4mEsI0pLBYL0vOlT9PYfpSP22pptX7CiY7P+eLsp3xj+xrLmWMiFo6EmJyYJB6PMzm5thsCxWIxIpEI4XBY4HA4jJEr/9OH63r+vn/Tdf2BHEN1af+RNVFWMstClKVbS0THZZwuJ73uHxn2D4tRfT6fYHBwUHQVCATEw0aRv0QRKr97tOLfW8rr6EY3OZWcpghUJXMP4/xghz8jbTVv4nBzLYc+q+ZQYw3VjTXUNB3m/eZajljq+Gk0jBy/Qig6zdj4jCAoTzHgDRCMJPhlzOAyIXkKp+sHpJdeX0fPl+vpallPd+vfdDVJ2C3rmL3wGum+XaR6d5Bym0n1lXK118yE7VXS/WWCVH85cwO7cNtPIR2sehzSz0HyWZi+y9RWSO+EuTKYeQWmt8EVM8xsg8tG/AWYKECPF6DHNpOPFcLEU4xcaEbad2Aj+fgW/gwVcyu8xu2wiZWr1WTmPiL7axPKby0ovx8nM72XzMw+sqlqlsdMrERKBMtjz6BGCxl2tSK9fXAjJEtQo1vIja+hRYvJykWoUROKbFCIEilAkQtQIptRZdPdWJEgK5vIj2/C72pBKnr5EcyVG9hRsYGdex5je/mjvPHWE9jPHcPrbGfA0YbHcfIeF3tO0W8/zrnTDXh6/ulvw/79t9wBsGeY5WfwsagAAAAASUVORK5CYII=&#x27;)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Accumulation mode" title="Accumulation mode" src="static/6a24eea3a1dbc51f1ba7a95cc8dcb3da/008e2/Accumulation-mode.png" srcSet="/static/6a24eea3a1dbc51f1ba7a95cc8dcb3da/e6f05/Accumulation-mode.png 183w /static/6a24eea3a1dbc51f1ba7a95cc8dcb3da/008e2/Accumulation-mode.png 237w" sizes="(maxWidth: 237px) 100vw, 237px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf"><span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"462px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'41.53005464480874%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYA/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABMUlEQVQoz42Ry0/I7ZOZkGVbBw4z8A9nvjnH2O/3mKZJGIZkWUYcxxeVJAlRFFHKkvePCdP1mGz/gDvEBaLiQ4Ai4AAAAASUVOR)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Accumulated result" title="Accumulated result" src="static/f1b6eaebc590aeed01ca6ddb9ffd7d11/e389b/Accumulation-input-list.png" srcSet="/static/f1b6eaebc590aeed01ca6ddb9ffd7d11/e6f05/Accumulation-input-list.png 183w /static/f1b6eaebc590aeed01ca6ddb9ffd7d11/2e8d1/Accumulation-input-list.png 365w /static/f1b6eaebc590aeed01ca6ddb9ffd7d11/e389b/Accumulation-input-list.png 462w" sizes="(maxWidth: 462px) 100vw, 462px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN"><div className="StyledBox-sc-13pk1d4-0 dAeNYX Common__RelativeBox-sc-1fs44vl-0 xIhyt"><hr type="1" className="PickerWheelManual__Separator-sc-1nyvcuw-2 jgRHFu"/><img alt="Picker Wheel Logo" className="StyledImage-sc-ey4zx9-0 jFAHLS PickerWheelManual__ImageLogo-sc-1nyvcuw-3 cjfbBi" src="data:image/png;base64,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"/></div></div>
<h2 id="share-the-wheel-share-the-joy" className="StyledHeading-sc-1rdh4aw-0 ctSmmn">10. Share the Wheel Share the Joy</h2>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Do you know that you can share your random wheel with your existing inputs or customization with your friends and family or your audiences? See the steps below to learn how.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Click the share button from the Picker Wheel site (at the top right).</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf"><span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"58px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'98.27586206896551%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYA/NZ6FPBJymUokgRSvepQq0%2biA8VEfogLX0otFVB3GazflVdE/SWD%2bcRozl6SUy8GbpQCNSFYsIaPiaoA%2b9q7UQNXeAW6ONP6/Rq3uXeB7YwMF/uE%2bRMJ9%2bD9v7BtDDtdJ%2bdd6)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Share button" title="Share button" src="static/3038d49abf7ebe15f9211a0c3749f559/295a0/Share-button.png" srcSet="/static/3038d49abf7ebe15f9211a0c3749f559/295a0/Share-button.png 58w" sizes="(maxWidth: 58px) 100vw, 58px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Choose &quot;Allow people copy the wheel&quot;? People who open your share link will be in &quot;Share View&quot;.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Choose what to be included in the share link. You may include your current inputs (statuses are not included) or the tool settings e.g. colors. Next, click the &quot;Create Share Link&quot; button.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf"><span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"408px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'53.00546448087432%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYA/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB50lEQVQoz5W/Xf076ym0u8fYds2vu8zGAxRjo%2bxbYfRyOOw28U0rZIsyyhC/Ndn90KDZ3Oeg/m8XkWY9d96UV9gDTnz%2bQmWw)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Create share link" title="Create share link" src="static/e11961f4185b1848dc2875159bd7128d/e7c18/create-share-link.png" srcSet="/static/e11961f4185b1848dc2875159bd7128d/e6f05/create-share-link.png 183w /static/e11961f4185b1848dc2875159bd7128d/2e8d1/create-share-link.png 365w /static/e11961f4185b1848dc2875159bd7128d/e7c18/create-share-link.png 408w" sizes="(maxWidth: 408px) 100vw, 408px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">You will see a link is produced. You may copy the link’s address or click the copy button to share the Picker Wheel with other people.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">You may also share it directly through Facebook or Twitter.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf"><span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:'406px'}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'56.830601092896174%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYA/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB6UlEQVQoz3W/tDfnfz7%2b5ypBEGJZbVzXZTQa0Wrd03McfN/Htv/KO/E/DEP2J%2bP0yaQp/cGA/e2MP3XBaLxZ5YkEjkkfBc6Z)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Copy and Save Share Link" title="Copy and Save Share Link" src="static/884b740c41f5b9fb2f854ee7be616886/e33ef/save-share-link.png" srcSet="/static/884b740c41f5b9fb2f854ee7be616886/e6f05/save-share-link.png 183w /static/884b740c41f5b9fb2f854ee7be616886/2e8d1/save-share-link.png 365w /static/884b740c41f5b9fb2f854ee7be616886/e33ef/save-share-link.png 406w" sizes="(maxWidth: 406px) 100vw, 406px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">You can also save your share link to your file. So that you can edit/delete the share link after that.</p>
<div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN"><div className="StyledBox-sc-13pk1d4-0 dAeNYX Common__RelativeBox-sc-1fs44vl-0 xIhyt"><hr type="1" className="PickerWheelManual__Separator-sc-1nyvcuw-2 jgRHFu"/><img alt="Picker Wheel Logo" className="StyledImage-sc-ey4zx9-0 jFAHLS PickerWheelManual__ImageLogo-sc-1nyvcuw-3 cjfbBi" src="data:image/png;base64,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"/></div></div>
<h2 id="picker-wheel-family" className="StyledHeading-sc-1rdh4aw-0 ctSmmn">11. Picker Wheel Family</h2>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Other than the main Picker Wheel, there are several <a href="tools/index.html" className="PickerWheelManual__Anchor-sc-1nyvcuw-0 ggyEAr">specialized tools</a> of Picker Wheel created as well.</p>
<ol>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">If you are looking for a tool to do a <strong>random grouping</strong>, please check out our <a href="tools/random-team-generator/index.html" className="PickerWheelManual__Anchor-sc-1nyvcuw-0 ggyEAr">Random Team Generator</a>.</p>
</li>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Or, if you need a decision which is only about <strong>yes or no</strong>, please check out our <a href="tools/yes-or-no-wheel/index.html" className="PickerWheelManual__Anchor-sc-1nyvcuw-0 ggyEAr">Yes or No Wheel</a> also.</p>
</li>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Or, if you specifically want to have <strong>random number</strong> output, you can also explore our <a href="tools/random-number-generator/index.html" className="PickerWheelManual__Anchor-sc-1nyvcuw-0 ggyEAr">Random Number Generator</a> as well.</p>
</li>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Or, if you want to get a <strong>random letter</strong> output, we have the <a href="tools/random-letter-generator/index.html" className="PickerWheelManual__Anchor-sc-1nyvcuw-0 ggyEAr">Random Letter Generator</a> for you.</p>
</li>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Or, if you want an <strong>image-based Picker Wheel</strong>, we have created the <a href="tools/random-image-generator/index.html" className="PickerWheelManual__Anchor-sc-1nyvcuw-0 ggyEAr">Random Image Generator</a>.</p>
</li>
<li>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Other than these on-site tools, we also make an embedded Picker Wheel that you can embed on your page. You may refer to <a href="embed-tutorial/index.html" className="PickerWheelManual__Anchor-sc-1nyvcuw-0 ggyEAr">embed tutorial page</a> to learn how to do that.</p>
</li>
</ol>
<div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN"><div className="StyledBox-sc-13pk1d4-0 dAeNYX Common__RelativeBox-sc-1fs44vl-0 xIhyt"><hr type="1" className="PickerWheelManual__Separator-sc-1nyvcuw-2 jgRHFu"/><img alt="Picker Wheel Logo" className="StyledImage-sc-ey4zx9-0 jFAHLS PickerWheelManual__ImageLogo-sc-1nyvcuw-3 cjfbBi" src="data:image/png;base64,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"/></div></div>
<h2 id="save-as-an-app-in-your-device" className="StyledHeading-sc-1rdh4aw-0 ctSmmn">12. Save as an App in Your Device</h2>
<h3 className="StyledHeading-sc-1rdh4aw-0 fWCAgN">12.1. Desktop App</h3>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Open the Picker Wheel using Chrome. Click the Settings -&gt; More Tools -&gt; Create Shortcut...</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf"><span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:'730px'}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'84.15300546448088%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIA/xAqIlWwCLuFYllnu%2b1uUdnRuWWmSebkJJnkJDI7sLT29uMj/T%2baLJDyAp1pDoSRo5FpwwSU2RCFQAI1rliXxfgIRGsPaRhs/efHrx7survcO/AO9vyidD02jsAAAAAElFTkS)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Desktop create shortcut" title="Desktop create shortcut" src="static/3a2b38a8ff05b4c3fc69b5acc8906568/e9beb/Desktop-create-shortcut.png" srcSet="/static/3a2b38a8ff05b4c3fc69b5acc8906568/e6f05/Desktop-create-shortcut.png 183w /static/3a2b38a8ff05b4c3fc69b5acc8906568/2e8d1/Desktop-create-shortcut.png 365w /static/3a2b38a8ff05b4c3fc69b5acc8906568/e9beb/Desktop-create-shortcut.png 730w /static/3a2b38a8ff05b4c3fc69b5acc8906568/62de4/Desktop-create-shortcut.png 746w" sizes="(maxWidth: 730px) 100vw, 730px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Ensure you tick the &quot;Open as window&quot;, then click create.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf"><span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:'440px'}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'41.53005464480874%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(%27data_image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIA/0i6AAAACXBIWXMAABYlAAAWJQFJUiTwAAABI0lEQVQY042Q/Yia2giEGESMAFLTSRpDKFRYTEOAoGyWQ2zCxvnOXNzFvulY/3tl0OyYJpp4f/FVkmVQ3EgBsfRaZXWq2H9LK)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Create desktop app" title="Create desktop app" src="static/c66f9351f845b0a1d74591e8a1df99b1/48c0e/Create-desktop-app.png" srcSet="/static/c66f9351f845b0a1d74591e8a1df99b1/e6f05/Create-desktop-app.png 183w /static/c66f9351f845b0a1d74591e8a1df99b1/2e8d1/Create-desktop-app.png 365w /static/c66f9351f845b0a1d74591e8a1df99b1/48c0e/Create-desktop-app.png 440w" sizes="(maxWidth: 440px) 100vw, 440px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">It is now installed in your desktop or laptop. You can access it anytime without remember the URL and going through the browser.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf"><span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:'118px'}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:'113.55932203389831%',position:'relative',bottom:'0',left:'0',backgroundImage:'url(&#x27;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFNElEQVQ4y1WUCUzTVxzHm2WXiLopgqWUWq6Wf1tKD2j/bQGlimBbwIMhaOZQ0Kmo0enMvPHalOjmgc5odItOQBTxQDwWMrOYLWZLli1xMToTXWIy76mA92d5/4Kyf/LNO/55n/f9fd/LUw2KdxKlE8pg8NBMooX0LoYkutEky2hSPGhSfGiN2ehNOSSnDSfZ6ic5PQ+jPR/JUYApI4AlM0iaK4RqsK4booAyidG7UCe5idK5GRArE633Ep/qY6iUjTo5l0EJI9BJIzDaRmK0jyJVAJ2jXwMFIEbvJibBzZAEN+pENwM0MoZ0LxVTfXy+zsfeHTK/f5tE+xYD6+bYcXlzURsELK8XMBAGqpM8CMV2a6DWS0mZj4Z9Xs4ckzlxxMPpZhePz8RBuxp+UHO7RceiKjdaUwGSMx9TRi+HIh8lI4OPqHgfU6dlcea4h6MHZQ4dkGmq93C80cW9E/F0tGp4cCKOp6dj4Zya2vkZaM0ivwLMmQEsriAqEbYuNZtofTb5oRzaWjwcrpc5XO/hSKNMc6OX1iYP/57U87gtjs6TGjpa4xQ47bFUluUw1CLcjQ4D9aZhDJWEhlO3xceJ5jCsuUHmSKOXpgMZNO8zcq+lP12t0XS2aek6qeFRaxx8r+a3vQYkZ0BxmCaAydZctAY//oJcWppkmg7IHBIOGzwc/M5B27FCrl7az9Mrm3nSbqOzNYauUzoF3HFSy/OzWsrH+0m0Bkl3B1CJ49ek5DFtup9zbT5aD2VxqjmLtmYvp1v8XLv2I/cf3uMp8Oif83S1xtJ57H06j0fx8GgUnH2PNdVOdJZCbAKYah9FgqmA8ZPdrP4qmSXrjSyvlVi4WsOexgrOndvEN/snsnvXCP64eAauLKbr52E8+TVI54UAXAywfU0QnTlAuhxElerIR7KFMPot6Me/ScLYCBLHRRBf9CaOj+K4dPUC4rv81090dtyAjnpePtjNywd7eHZvN7CfjRs/QZeah00uRCXukMkeIm24F8vECMwT+mEui8RaPoCksW/wYU0Bv/x5HrgDj1p4cedLXtyt48XdbTy7vRU6dvDxrAoSLKOweYKozJlBzBlB0tyjMZdEIU2IwFQaiVTaF0tZf7QhFfZJkdy6tgbub+X53e28vFvH8zt18HAHNy5vIjOnSDllqzuIyuIKKfcnLaMY6ygHUvnbSKX9ME2IVJT6QV+yqoZw+3otPNjJc8VdHU9uboMXu1i7tpoEcz52TyFWdwhVmrsQRa4QVlcRaUVJSOVvIZVGKuUbSvrgq4zh9vUNcP9rntwSpW4DdnP6+AokhziMEOlyoSKVoCqSRVuITS7CGjJiKu+DqfxdUkrewTs1mjt/10LHTni8E7p2cqhhiQIQa22eotfAnk7PTwXqHofNn4NtbCJSyUCl5JvXNnD/+lbaT61kRnUlRnsYZPeGYT1QldUtOkVhkKdYmZScBUqmkj2IweHHlj2S4LhSvP4xGGxBdNJIJEe+8sCG1xW9kkrAhESGy1ZtYtHS9ZRXzGPuwlVUzFjEzLkryQtNpaxiActXb2ZpzUamz15C5czFTJ+9jOr5Ndi9Y7rdFoeBYhcxmDRlPhOnzGPOghpmzVvBp0u/YPGKWoblT2Rs2UwWfLaOyVULqZ6/Utl40bL1VFUvUSoT6/8HFK1ZXHLnaOXV6Okr4+5boDykrhDmjIDyX7RiXjh0+MJShQ+j8FWwIuTembyStxiHr1hZrADEuBtkFzDvGJzCYRgWeuUy3RNWb5iY711Wj17DinH6ipX2P3TMv8T6sjdSAAAAAElFTkSuQmCC&#x27;)',backgroundSize:'cover',display:'block'}}></span>
  <img className="gatsby-resp-image-image" alt="Picker Wheel app" title="Picker Wheel app" src="static/32fc8a7ab747db781a8f450650298155/9e4e1/Picker-Wheel-app.png" srcSet="/static/32fc8a7ab747db781a8f450650298155/9e4e1/Picker-Wheel-app.png 118w" sizes="(maxWidth: 118px) 100vw, 118px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span></p>
<div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN"><div className="StyledBox-sc-13pk1d4-0 dAeNYX Common__RelativeBox-sc-1fs44vl-0 xIhyt"><hr type="2" className="PickerWheelManual__Separator-sc-1nyvcuw-2 fPhdzp"/><img alt="Picker Wheel Logo" className="StyledImage-sc-ey4zx9-0 jFAHLS PickerWheelManual__ImageLogo-sc-1nyvcuw-3 cjfbBi" src="data:image/png;base64,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"/></div></div>
<h3 className="StyledHeading-sc-1rdh4aw-0 fWCAgN">12.2. Smartphone App</h3>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Open the Picker Wheel site using Safari (iOS) or Chrome (Android). Click the share button (iOS) or Settings button (Android) and click Add to Home Screen selection.</p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf"></p><figure className="gatsby-resp-image-figure">
    <span className="gatsby-resp-image-wrapper" style={{position:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"414px"}}>
      <span className="gatsby-resp-image-background-image" style={{paddingBottom:"139.34426229508196%",position:'relative',bottom:'0',left:'0',backgroundImage:'url(&#x27;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAIAAADuuAg3AAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVQ4y4WU227qRhSG/f4X+xmqPsC+qHqTKDuluajaqAVDwIbYxgQIYGxsz2HN+VDZNAmkp0//xUieX2vN8j8TNG0tBBdSaKO0lloLrbnWTGswGozpZA2zRhgjjZHOmdOpbNsGGAlaXDPGptPpZrPxV7gLXTEcDqdPT9rIoG4rIbkQjAvQRirNlWZKg9ZMKdD6LNa3w/u+BMYtY5SQtjNLKRgHIRljVEgmBCjFpASlut3mrL7ns7pjCtaZEW4AYDQaJUkSRdEoDMNxGMfRapVLKfw/kabpbrdjnAYtqq21V2d1zlrtnLFW9zIXsufNzjmM2wCThnOe9CyXy/V6/fKSA5B+g/beeG97fUwuz/OyKhmDAONGSlEURVmWRXE4HovDYS8l8944J51TznVdOGd7dez2u6ZpgNHObK1VSllrlFL9Vysls/bsvDR3eO+llMYYQklACAKgo9FosVhkWTqZjGez6WQSAmDvnbXKOfNpYIvFYrPZCCkChNpPA3sb28ds7DW651wZU0KzJFtlq83LJp5Fh93+7PHeZ2V2wIc+bh8527/uq/LEBQ8wxqCghLLAxYmdtqdtgQrhBXXUe//l/svXyVfvPTaYWkotBQuNbFraMmBBicqQh9NmGtN4TucxiSMSTerJtJ0+s0WmsqVa5ia/VHgMH9tHxFBwwIc/8HAynURZlKyTMArjZRxlURiNdqe98UY6KfyHpJezeHa/vq9FHdRtnfDkxb+sfL60y6XNMpMuTZrbLFHPCx53EvNnPl+8KdVJJlLUJwxJJtuyITWWoP6K02Wo3PUF9b4uTqQljENAKEIExfN48bzY7Xfnwf6HvPfzRfz6uj3/56uL4f6PPmFKKUWB9JURGo/Hx+PRe2/tRwz/jYeHhyiKtFYBwu17dD5fTGftW6QvoZQKIc4XA0kpqqpqeqqqKoqiaZq+uvu72XufJMlqtZJSdvEEgDRNt68deZ7P5/PNtnsM18W6JNV7VN8Xd3d3w+HQWhM0bSMEN8ZorY3Rxhhju7Vy6vvhdz8uf7DWcs6VEkaJM9Y6YzRCbVA1ZdUgQgkABQDaw0E8wThFh9/qWQ5LzVWN2abiAIxzdmrpfIvLuurMhxpTAM4Z5xy6BVdSR2K6O+mwel2Llde2QCJcC2BcCn7CbLyGXXXqzJRixoD1Zs45IQQ1KK3T3+vHX+tf1vUa1YgQZBR/g1EgddtX7mbWmxljSqk0TW9vbwf3g5++DQbffh7cD25ubsbjsVKasa5A977Tzvwn0ME1TFH8ZbMAAAAASUVORK5CYII=&#x27;)',backgroundSize:'cover',display:'block'}}></span>
  <img
    className="gatsby-resp-image-image" 
    alt="iOS install app" 
    title="Install Picker Wheel on iOS device"
    src="static/dab0b5c892f79bf5ee02def5d0df8fcc/b910a/iOS-install-app.png"
    srcSet="/static/dab0b5c892f79bf5ee02def5d0df8fcc/e6f05/iOS-install-app.png 183w /static/dab0b5c892f79bf5ee02def5d0df8fcc/2e8d1/iOS-install-app.png 365w /static/dab0b5c892f79bf5ee02def5d0df8fcc/b910a/iOS-install-app.png 414w"
    sizes="(maxWidth: 414px) 100vw, 414px"
    style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}}
    loading="lazy"
    decoding="async"/>
    </span>
    <figcaption className="gatsby-resp-image-figcaption">Install Picker Wheel on iOS device</figcaption>
  </figure><p className="StyledParagraph-sc-tbetod-0 kkqepf"></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf"></p><figure className="gatsby-resp-image-figure">
    <span className="gatsby-resp-image-wrapper" style={{pposition:'block',marginLeft:'auto',marginRight:'auto',maxWidth:"498px"}}>
      <span className="gatsby-resp-image-background-image" ></span>
  <img className="gatsby-resp-image-image mycss1" alt="Android install app" title="Install Picker Wheel on Android device" src="static/5a8aa33c5fbbbdf68eb159e2a04e19c3/79e1b/Android-install-app.png" srcSet="/static/5a8aa33c5fbbbdf68eb159e2a04e19c3/e6f05/Android-install-app.png 183w /static/5a8aa33c5fbbbdf68eb159e2a04e19c3/2e8d1/Android-install-app.png 365w /static/5a8aa33c5fbbbdf68eb159e2a04e19c3/79e1b/Android-install-app.png 498w" sizes="(maxWidth: 498px) 100vw, 498px" style={{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"relative",top:"0",left:"0"}} loading="lazy" decoding="async"/>
    </span>
    <figcaption className="gatsby-resp-image-figcaption">Install Picker Wheel on Android device</figcaption>
  </figure><p className="StyledParagraph-sc-tbetod-0 kkqepf"></p>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">It is now installed on your device.</p>
<div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN"><div className="StyledBox-sc-13pk1d4-0 dAeNYX Common__RelativeBox-sc-1fs44vl-0 xIhyt"><hr type="1" className="PickerWheelManual__Separator-sc-1nyvcuw-2 jgRHFu"/><img alt="Picker Wheel Logo" className="StyledImage-sc-ey4zx9-0 jFAHLS PickerWheelManual__ImageLogo-sc-1nyvcuw-3 cjfbBi" src="data:image/png;base64,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"/></div></div>
<h2 id="premium-personalized-plan" className="StyledHeading-sc-1rdh4aw-0 ctSmmn">13. Premium Personalized Plan</h2>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">Are you looking for</p>
<ul>
<li>ad-free solution?</li>
<li>more file storage?</li>
<li>own colors customization?</li>
<li>own logo/banner placement?</li>
<li>support us?</li>
</ul>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">You may consider to upgrade to the <a href="plan/index.html" className="PickerWheelManual__Anchor-sc-1nyvcuw-0 ggyEAr">Personalized plan</a>.</p>
<div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN"><div className="StyledBox-sc-13pk1d4-0 dAeNYX Common__RelativeBox-sc-1fs44vl-0 xIhyt"><hr type="1" className="PickerWheelManual__Separator-sc-1nyvcuw-2 jgRHFu"/><img alt="Picker Wheel Logo" className="StyledImage-sc-ey4zx9-0 jFAHLS PickerWheelManual__ImageLogo-sc-1nyvcuw-3 cjfbBi" src="data:image/png;base64,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"/></div></div>
<h2 id="features-summary" className="StyledHeading-sc-1rdh4aw-0 ctSmmn">14. Features Summary</h2>
<p className="StyledParagraph-sc-tbetod-0 kkqepf">As a recap, these are the features available that Picker Wheel currently having. Feel free to explore. Please reach out to us <a href="feedback/index.html" className="PickerWheelManual__Anchor-sc-1nyvcuw-0 ggyEAr">here</a> if you have questions or recommendations.</p>
<ul>
<li>Can insert text or image inputs.</li>
<li>3 kinds of action modes.</li>
<li>Various wheel customizations.</li>
<li>Mystery spin</li>
<li>Data is stored in the browser cache.</li>
<li>Data can also be saved in the online database.</li>
<li>Title section is available</li>
<li>Weight of inputs is available</li>
<li>Full-screen view is available.</li>
<li>Display all your results generated by the wheel spinner.</li>
<li>Can easily share your own custom random Picker Wheel with friends and family.</li>
<li>Generate cert.</li>
<li>The wheel can be embedded in your website or PowerPoint. See <a href="embed-tutorial/index.html" className="PickerWheelManual__Anchor-sc-1nyvcuw-0 ggyEAr">tutorial here</a>.</li>
<li>Can install as a smartphone random picker app.</li>
<li>Can install as a desktop random picker app.</li>
<li>By clicking the More button - User can enable the title section, weight, shuffle the inputs, enable back all the inputs, reset all the inputs&#x27; count &amp; remove all the inputs.</li>
</ul>
<div className="StyledBox-sc-13pk1d4-0 iopyRj PickerWheelManual__BoxG-sc-1nyvcuw-1 iQUMKN">
  <h2 id="let&#x27;s-spin-the-wheel-now---happy-spinning!" className="StyledHeading-sc-1rdh4aw-0 ctSmmn">Let&#x27;s Spin the Wheel Now - Happy Spinning!</h2>
  </div>
</div>
</div>
</div>
</div>
<div id="pageSidebar" className="StyledBox-sc-13pk1d4-0 hMFouI">
  <div className="StyledBox-sc-13pk1d4-0 iKCmyT flipsimu__Container-sc-hocc1z-1 iaORO">
    <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper gatsby-image-wrapper-constrained">
      <div style={{maxWidth:"300px",display:"block"}}>
        <img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;135&#x27; width=&#x27;300&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E" style={{maxWidth:"100%",display:"block",position:"static"}}/>
      </div>
      <div aria-hidden="true" data-placeholder-image="" style={{opacity:"1",transition:"opacity 500ms linear"}}></div>
      <picture><source type="image/webp" srcSet="/static/6ef37e794bf6c22dfb28bfab37d7bbb0/156cd/flipsimu.webp 75w,/static/6ef37e794bf6c22dfb28bfab37d7bbb0/6a1d6/flipsimu.webp 150w,/static/6ef37e794bf6c22dfb28bfab37d7bbb0/21c97/flipsimu.webp 300w" sizes="(min-width: 300px) 300px, 100vw"/><img data-gatsby-image-ssr="" data-main-image="" style={{opacity:"0"}} sizes="(min-width: 300px) 300px, 100vw" decoding="async" loading="eager" src="static/6ef37e794bf6c22dfb28bfab37d7bbb0/1fa43/flipsimu.png" srcSet="/static/6ef37e794bf6c22dfb28bfab37d7bbb0/fba54/flipsimu.png 75w,/static/6ef37e794bf6c22dfb28bfab37d7bbb0/144b3/flipsimu.png 150w,/static/6ef37e794bf6c22dfb28bfab37d7bbb0/1fa43/flipsimu.png 300w" alt="FlipSimu Coin Flip Simulator"/></picture>
      <noscript><picture>
        <source type="image/webp" srcSet="/static/6ef37e794bf6c22dfb28bfab37d7bbb0/156cd/flipsimu.webp 75w,/static/6ef37e794bf6c22dfb28bfab37d7bbb0/6a1d6/flipsimu.webp 150w,/static/6ef37e794bf6c22dfb28bfab37d7bbb0/21c97/flipsimu.webp 300w" sizes="(min-width: 300px) 300px, 100vw"/><img data-gatsby-image-ssr="" data-main-image="" style={{opacity:"0"}} sizes="(min-width: 300px) 300px, 100vw" decoding="async" loading="eager" src="static/6ef37e794bf6c22dfb28bfab37d7bbb0/1fa43/flipsimu.png" srcSet="/static/6ef37e794bf6c22dfb28bfab37d7bbb0/fba54/flipsimu.png 75w,/static/6ef37e794bf6c22dfb28bfab37d7bbb0/144b3/flipsimu.png 150w,/static/6ef37e794bf6c22dfb28bfab37d7bbb0/1fa43/flipsimu.png 300w" alt="FlipSimu Coin Flip Simulator"/></picture></noscript>
    </div>
    <p className="StyledParagraph-sc-tbetod-0 eXuVSM flipsimu__Headline-sc-hocc1z-2 bQOJGb">Flip a coin to make a decision?</p>
    <a href="../flipsimu.com/index.html" target="_blank" alt="Coin Flipper" className="flipsimu__LinkPost-sc-hocc1z-0 gjfChK" >
      <p className="StyledParagraph-sc-tbetod-0 eXuVSM flipsimu__CTA-sc-hocc1z-3 hRNVgU">Try FlipSimu Coin Flipper</p>
    </a>
  </div>
</div></div></div><div className="StyledBox-sc-13pk1d4-0 niTgi Footer__Container-sc-beo8tl-2 kRFpon">
    <div className="StyledBox-sc-13pk1d4-0 hwqIDz">
      <div className="StyledBox-sc-13pk1d4-0 iopyRj Footer__Column-sc-beo8tl-0 hofKfI">
      <a href="tools/index.html" className="Footer__LinkA-sc-beo8tl-1 gdwMiy">
        <span className="StyledText-sc-1sadyjn-0 jtREpD Footer__Text-sc-beo8tl-3 eFwAyt">Tools</span>
      </a>
      <a href="plan/index.html" className="Footer__LinkA-sc-beo8tl-1 gdwMiy">
        <span className="StyledText-sc-1sadyjn-0 jtREpD Footer__Text-sc-beo8tl-3 eFwAyt">Premium Plan</span>
      </a>
      <a href="about/index.html" className="Footer__LinkA-sc-beo8tl-1 gdwMiy">
        <span className="StyledText-sc-1sadyjn-0 jtREpD Footer__Text-sc-beo8tl-3 eFwAyt">About</span>
      </a>
      <a href="feedback/index.html" className="Footer__LinkA-sc-beo8tl-1 gdwMiy">
        <span className="StyledText-sc-1sadyjn-0 jtREpD Footer__Text-sc-beo8tl-3 eFwAyt">Feedback &amp; Contact</span>
      </a>
      </div>
      <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 WhPzO"></div>
      <div className="StyledBox-sc-13pk1d4-0 iopyRj Footer__Column-sc-beo8tl-0 hofKfI">
        <a href="blog/index.html" className="Footer__LinkA-sc-beo8tl-1 gdwMiy">
          <span className="StyledText-sc-1sadyjn-0 jtREpD Footer__Text-sc-beo8tl-3 eFwAyt">Blog</span>
        </a>
        <a href="changelog/index.html" className="Footer__LinkA-sc-beo8tl-1 gdwMiy">
          <span className="StyledText-sc-1sadyjn-0 jtREpD Footer__Text-sc-beo8tl-3 eFwAyt">Latest Updates</span>
        </a>
        <a href="embed-tutorial/index.html" className="Footer__LinkA-sc-beo8tl-1 gdwMiy">
          <span className="StyledText-sc-1sadyjn-0 jtREpD Footer__Text-sc-beo8tl-3 eFwAyt">Embed Wheel</span>
        </a>
        <a href="buyusacoffee/index.html" className="Footer__LinkA-sc-beo8tl-1 gdwMiy">
          <span className="StyledText-sc-1sadyjn-0 jtREpD Footer__Text-sc-beo8tl-3 eFwAyt">Buy Us A Coffee</span>
        </a>
      </div>
      <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 WhPzO"></div>
      <div className="StyledBox-sc-13pk1d4-0 iopyRj Footer__Column-sc-beo8tl-0 hofKfI">
        <a href="privacy-policy/index.html" className="Footer__LinkA-sc-beo8tl-1 gdwMiy">
          <span className="StyledText-sc-1sadyjn-0 jtREpD Footer__Text-sc-beo8tl-3 eFwAyt">Privacy Policy</span>
        </a>
        <a href="terms-and-conditions/index.html" className="Footer__LinkA-sc-beo8tl-1 gdwMiy">
          <span className="StyledText-sc-1sadyjn-0 jtREpD Footer__Text-sc-beo8tl-3 eFwAyt">Terms and Conditions</span>
        </a>
        <a href="cookie-policy/index.html" className="Footer__LinkA-sc-beo8tl-1 gdwMiy">
          <span className="StyledText-sc-1sadyjn-0 jtREpD Footer__Text-sc-beo8tl-3 eFwAyt">Cookie Policy</span>
        </a>
      </div>
    </div>
          </div>
            </div>
            </div>
        <div className="StyledBox-sc-13pk1d4-0 bGLYMx Toast__ToastBox-sc-fhye89-0 eTMDtC">
          <div className="StyledBox-sc-13pk1d4-0 hddkdA Toast__ToastInnerBox-sc-fhye89-1 gMBozq">
            <svg aria-label="Validate" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 gSHgZr">
              <path fill="none" stroke="#000" stroke-width="2" d="M20,15 C19,16 21.25,18.75 20,20 C18.75,21.25 16,19 15,20 C14,21 13.5,23 12,23 C10.5,23 10,21 9,20 C8,19 5.25,21.25 4,20 C2.75,18.75 5,16 4,15 C3,14 1,13.5 1,12 C1,10.5 3,10 4,9 C5,8 2.75,5.25 4,4 C5.25,2.75 8,5 9,4 C10,3 10.5,1 12,1 C13.5,1 14,3 15,4 C16,5 18.75,2.75 20,4 C21.25,5.25 19,8 20,9 C21,10 23,10.5 23,12 C23,13.5 21,14 20,15 Z M7,12 L10,15 L17,8"></path></svg><div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 epPYSv"></div><span className="StyledText-sc-1sadyjn-0 haCxms"></span><div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 epPYSv"></div><button label="x" color="invertTextStrong" className="TextButton__Button-sc-1qcswzo-0 fPjOUU">x</button>
          </div>
        </div>
        </div>
          <div id="gatsby-announcer" className="gatsby-announcer" aria-live="assertive" aria-atomic="true">
        </div></div></div>


    </div>
  )
}

export default YesNo