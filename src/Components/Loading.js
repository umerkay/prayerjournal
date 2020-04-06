import React from 'react';
import LoadingGIF from './loading.gif';
import './Loading.scss';

export default function Loading(props) {
  if (!props.msg)
  return (
      <div className="loading-container">
          <img className='loading' width='50px' src={LoadingGIF} alt="" {...props} />
      </div>
  )
else
  return (
      <div className='loading-container'>
          <img className='loading' width='50px' src={LoadingGIF} alt="" {...props} />
          <div className=''>{this.props.msg}</div>
      </div>
  )
}
