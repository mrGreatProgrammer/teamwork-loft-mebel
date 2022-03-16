import React from 'react'

function ImgComponent({src}) {
    let imgStyle = {
        with: 100+"%",
        height: 'auto'
    }
  return <img src={src} alt='slide-img' style={imgStyle} />
}

export default ImgComponent