import React from 'react'
import './Title.css'

const Title = ({subTitle, title, content}) => {
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h2>{title}</h2>
        <p className='content'>{content}</p>
    </div>
  )
}

export default Title