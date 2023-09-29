//Outsource JS library
import React from 'react'
//Internal JS
//Components
import CollectionCards from './CollectionCards'
//Context
//Store
//Data
import {CollectionsData} from './CollectionsData';
//Pages
//CSS


function Collections() {
  return (
    <div className='collectionsMainContainer'>
      <h1>Kolesiyonlarimiz</h1>
      <div className='collectionsCards'>
        {CollectionsData?.map((item,i)=>(
          <CollectionCards collectionItem={item} key={i}/>
        ))}
      </div>

    </div>
  )
}

export default Collections