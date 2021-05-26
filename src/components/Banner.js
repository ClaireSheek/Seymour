import React from 'react'

function Banner({image, sub, title, body}) {

  const bannerStyle = {
    backgroundImage: `url(${image})`
  }

  return (
    <section className="banner" style={bannerStyle}>
      <div className="overlay">
        <div className="bannerContents">
          <div className="title">
            <h4>{sub}</h4>
            <h1>{title}</h1>
          </div>
          <p>{body}</p>
        </div>
      </div>
    </section>
  )
}

export default Banner
