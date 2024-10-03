import React from "react";
import { useState } from "react";

function Dynamic_link({name,url,cls}) {
    const [width,setWidth] = useState('0')
    // let length=name.length;
    // let actualL=0;
    // console.log(length);
    
    // for(let i=0;i<length;i++){
    //     if(name[i]=='i' || name[i]=='I'||name[i]=='f'||name[i]=='F'||name[i]=='j'||name[i]=='J'||name[i]=='k'||name[i]=='K'||name[i]=='l'||name[i]=='t'||name[i]=='r'||name[i]=='s'||name[i]==' '||name[i]=='n'||name[i]=='p'){
    //         actualL+=0.3;
    //     }
    //     else{
    //         actualL+=1;
    //     }
    // }
    // console.log(actualL);
    const handleMouseEnter = () => {
        setWidth(`100%`); // Change width on hover
    };
    
    const handleMouseLeave = () => {
        setWidth('0%'); // Revert width when not hovering
    };
    
  return (
    <>
      <a
        href={url}
        aria-current="page"
        className="anchor_container"
        style={{textDecoration:"none",color:"white"}}
      >
        <div className={`${cls}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
            width: 'fit-content',
            display:"flex",
            flexDirection:"column"
        }}
        >{name}
            <div className="dynamic_border_div"
            style={{
                height:"2px",
                width:width,
                transition:"0.3s ease",
                backgroundColor:"white"
            }}
            >
            </div>
        </div>
      </a>
    </>
  );
}

export default Dynamic_link;
