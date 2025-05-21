import React from 'react'

const Button = () => {
  return (
    <a className='cta-wrapper'>
      <div className='cta-group group'>
        <div  className='bg-cirlce'/>
        <p className='text'>see my  work  </p>

        <div  className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arr" />
         </div>

      </div>

    </a>
  )
}

export default Button