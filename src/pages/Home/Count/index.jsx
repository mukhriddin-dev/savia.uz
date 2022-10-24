import React,{useState} from 'react';

const index = () =>
{

   const [num,setNum]=useState(0);

   const updaterIncer=()=>{
      setNum(num+1)
   }

   const updaterDecer=()=>{
      setNum(num+1)
   }

   return (
      <>
         <div className="counter d-flex w-50 justify-content-around">
            <span className="min" onClick={()=>updaterIncer()}>
               <i class="bi bi-dash-circle-dotted"></i>
            </span>
            <strong className="num">
               {num}
            </strong>
            <span className="max" onClick={()=>updaterDecer()}>
               <i class="bi bi-plus-circle-dotted"></i>
            </span>
         </div>
      </>
   );
};

export default index;