//Outsource JS library
import React,{useState} from 'react'
//Internal JS
//Components
import CarpetCard from '../../components/CarpetCard';
//Context
//Store
//Data
import {JelHaliData} from './JelHaliData';
//Pages
//CSS

function CarpetJelPage() {
  const title ="jelhali";
  return (
    <div className="carpetPageMainContainer">
      <h1>Jel Halılar</h1>
      <div className='collectionsCards'>
        {JelHaliData?.map((item,i)=>(
          <CarpetCard carpetItem={item} title={title} key={i}/>
        ))}
      </div>
    </div>
  )
}

export default CarpetJelPage