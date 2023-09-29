//Outsource JS library
import React from 'react'
import { Await } from 'react-router-dom';
//Internal JS
//Components
import HaliCard from '../../components/CarpetCard';
//Context
//Store
//Data
import {JelHaliData} from './JelHaliData';
//Pages
//CSS

function CarpetJelPage() {
  return (
    <div className="carpetPageMainContainer">
      <h1>Jel Halılar</h1>
      <div className='collectionsCards'>
        {JelHaliData?.map((item,i)=>(
          <HaliCard carpetItem={item} key={i}/>
        ))}
      </div>
    </div>
  )
}

export default CarpetJelPage