import Image from 'next/image'
import React from 'react'

export default function CarouselItem({item,width }) {
    console.log(item)
  return (
    <div className='carousel-item' style={{ width: width }}>
      <div></div>
      <Image src={item.image} alt='item' width={500} height={500} className='carousel-img'  />

      <div className='carousel-item-text'>{item.description}</div>
    </div>
  )
}
