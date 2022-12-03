import React, { useEffect, useState } from 'react';
import './style.css';

function TotalWheel({items, setChoosenItem, setSavedItem}) {

  const bgcolor = [
    '#f0f0f0',
    '#e0e0e0',
    '#d0d0d0',
    '#c0c0c0',
    '#b0b0b0',
    '#a0a0a0',
    '#909090',
    '#808080',
  ]

  const renderItems = [];

  items.map((item) => (item.visible !== false) ? renderItems.push(item) : null);

  const num = renderItems.length;

  function calcPolygon(leng){
    const deg = 180.0/leng;
    const x = 50 * (1 - Math.tan(Math.PI/leng));
    return x;
  }

  const pos = calcPolygon(num);

  let itemsShow;
  // console.log(num)
  if(num == 2){
    itemsShow = renderItems.map((item,index) => (
      <span className='spe-span' key={index}
        style={{
          transform:`rotate(${360/num*(index+1)}deg)`,
          backgroundColor:`${bgcolor[index%8]}`,
          clipPath: "polygon(50% 50%, 10000% 0%, -10000% 0px)",
        }}>
        {(item.type !== 'Text') ?
          <img src={item.data_url} style={{width:`${35*4/num}%`,height:`${35*4/num}%`}}/>
          :
          <h2 className='myh2'>{item.content}</h2>
        }
      </span>
    ));
  }else{
    itemsShow = renderItems.map((item,index) => (
      <span className="spe-span" key={index}
        style={(num == 1) ? {
          transform:`rotate(${360/num*(index+1)}deg)`,
          backgroundColor:`${bgcolor[index%8]}`,
        } : {
          transform:`rotate(${360/num*(index+1)}deg)`,
          backgroundColor:`${bgcolor[index%8]}`,
          clipPath: `polygon(50% 50%, ${100-pos}% 0, ${pos}% 0)`,
        }}>
        {(item.type !== 'Text') ?
          <img src={item.data_url} style={{width:`${35*4/num}%`,height:`${35*4/num}%`}}/>
          :
          <h2 className='myh2'>{item.content}</h2>
        }
      </span>)
    );  
  }

  // console.log(itemsShow)

  const rotateFunction = () => {
    if(items.length === 0) return;
    var min = 1024;
    var max = 9999;
    var deg = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('box').style.transform = "rotate("+ deg +"deg)";
    const selection = Math.floor(((deg%360 + 180/num)%360)/(360/num));
    // setChoosenItem(-1);
    setChoosenItem(num - selection - 1);
    // setSavedItem(items[num - selection - 1]);
    // console.log("Se",deg,Math.floor(selection));
  }

  return (
    <div className="StyledBox-sc-13pk1d4-0 iUSIPZ Box__TurntableBox-sc-wbjuwj-0 lapiXs">
      <div id="mainbox" className="mainbox">

        <div id="box" className="box">
          <div className="box1">
            {itemsShow}
          </div>
        </div> 
        <button className="spin" onClick={() => rotateFunction()}>
          SPIN
        </button>
      </div>
    </div>
  )
}

export default TotalWheel