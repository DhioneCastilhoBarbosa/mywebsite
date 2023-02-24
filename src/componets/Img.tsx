import React, { useEffect, useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement>{
  lq: string;
  src:string;
}
 

const Image=({lq,src,...props}: ImageProps) =>{
  const [url,setUrl] = useState(lq ||src);
  useEffect(()=>{
    if(url===lq)
      fetch(src)
      .then(r=>r.blob())
      .then(blob=>{
        const FR = new FileReader();
        FR.onload=function(){
          //@ts-ignore
          setUrl(this.result);
        };
        FR.readAsDataURL(blob);
      })
  },[])
  return <img alt={props.alt||"image"}{...{src:lq,...props}}/>;
}

export default Image;