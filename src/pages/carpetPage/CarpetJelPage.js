//Outsource JS library
import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
//Internal JS
import useAxios,{ REQ_TYPES }from '../../endpoints/UseAxios';
//Components
import CarpetCard from '../../components/CarpetCard';
//Context
//Store
import { getCarpetsActionCreater } from '../../store/actions/carpetActions';
//Data
//import {JelHaliData} from './JelHaliData';
//Pages
//CSS

function CarpetJelPage() {
  const title ="jelhali";
  const dispatch = useDispatch();
  const carpets = useSelector((store)=>store.carpetDisplayReducer.carpets);
  useEffect(() => {
    dispatch(getCarpetsActionCreater());
  }, []);
  return (
    <div className="carpetPageMainContainer">
      <h1>Jel Halılar</h1>
      <div className='collectionsCards'>
        {carpets?.map((item,i)=>(
          <CarpetCard carpetItem={item} title={title} key={i}/>
        ))}
      </div>
    </div>
  )
}

export default CarpetJelPage