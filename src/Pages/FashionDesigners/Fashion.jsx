import React from 'react'
import './Fashion.css';
import TwoImage from '../../Components/TwoImage/TwoImage';
import OneImage from '../../Components/OneImage/OneImage';
import Fashion1 from '../../Components/FashionPageAssets/fashion1.png'
import Fashion2 from '../../Components/FashionPageAssets/fashion2.png'
import Fashion3 from '../../Components/FashionPageAssets/fashion3.png'
import Fashion4 from '../../Components/FashionPageAssets/fashion4.png'
import Fashion5 from '../../Components/FashionPageAssets/fashion5.png'
import Fashion6 from '../../Components/FashionPageAssets/fashion6.jpg'
import Fashion7 from '../../Components/FashionPageAssets/fashion7.png'
import Fashion8 from '../../Components/FashionPageAssets/fashion8.png'


const Fashion = () => {
  return (
    <div className='fashion'>
      <TwoImage 
      fashion1={Fashion1}
      fashion2={Fashion2}
      name1="NUCY"
      name2="NAFISA HAFIZ"
      name3="ISLET CULTURE"
      name4="KEREN ZUBAIRU"

      />
      <OneImage
      fashion1={Fashion3}
      name1="GEOMETRIC MOTION"
      name2="MACHAR LAUSHI"
      />
      <TwoImage 
      fashion1={Fashion4}
      fashion2={Fashion5}
      name1="ROMZY"
      name2="ROMEO MOUKAGNY"
      name3="LISTO CREATION"
      name4="ALIO GOUNABI"
      />
      <OneImage
      fashion1={Fashion6}
      name1="BABAYO"
      name2="BABAYO SHEHU"
      />
      <TwoImage 
      fashion1={Fashion7}
      fashion2={Fashion8}
      name1="JK Dressing"
      name2="SALI SAMORA"
      name3="NEO FAR"
      name4="MILCOS"
      />

    </div>
  )
}

export default Fashion