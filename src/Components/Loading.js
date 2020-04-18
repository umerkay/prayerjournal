import React from 'react';
import LoadingGIF from './loading.gif';
import './Loading.scss';

export default function Loading(props) {
  if (!props.msg)
    return (
      <div className="loading-container">
        <img className={'loading' + (props.bright ? " bright" : " dark")} width={props.width || '50px'} src={LoadingGIF} alt="" />
      </div>
    )
  else
    return (
      <div className='loading-container'>
        <img className={'loading' + (props.bright ? " bright" : " dark")} width={props.width || '50px'} src={LoadingGIF} alt="" />
        <div className=''>{this.props.msg}</div>
      </div>
    )
}
