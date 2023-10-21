import React from 'react'
import './TwoImage.css';


const TwoImage = ({ fashion1, fashion2, name1, name2, name3, name4 }) => {
  return (
    <div className="twoImage">
        <div className="two-left-col">
            <img src={fashion1} alt="Fashion Image" />
            <div className="person-details">
                <p>{name1}</p>
                <span className='circle'> </span> BY  {name2}
            </div>
        </div>
        <div className="two-right-col">
            <img src={fashion2} alt="Fashion Image" />
            <div className="person-details">
                <p>{name3}</p>
                <span className='circle'> </span> BY  {name4}
            </div>
        </div>
    </div>
  )
}

export default TwoImage;