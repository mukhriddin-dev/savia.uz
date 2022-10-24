import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";

const index = () =>
{

   const [startDate, setStartDate] = useState(new Date());
   const [endDate, setEndDate] = useState(new Date());



   {
      return (
         <>

            <div className="contents">
               <h1 className="text-savia">
                  SUG'DIYONA AVIA
               </h1>
               <h2 className=" text-savia">Ishonch</h2>
            </div>
            <div className="controls">


               <div className="dt-select">
                  <select id="from" className="form-select p-3">
                     <option value="Toshkent">Toshkent</option>
                  </select>
               </div>


               <span className="rounded-circle changer">
                  <i class="bi bi-arrow-left-right"></i>
               </span>



               <div className="dt-select">
                  <DatePicker selected={startDate} className="form-control p-3" onChange={(date) => setStartDate(date)} />
               </div>

               <div className="dt-select ">
                  <DatePicker selected={endDate} value={"-.-.-"} className="form-control p-3" onChange={(date) => setEndDate(date)} />
               </div>

               
                  <div class="dropdown mx-3">
                     <button class="btn p-3 btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Турини танланг
                     </button>
                     <ul class="dropdown-menu">
                        <li><button class="dropdown-item" type="button">Action</button></li>
                        <li><button class="dropdown-item" type="button">Another action</button></li>
                        <li><button class="dropdown-item" type="button">Something else here</button></li>
                     </ul>
                  </div>
             
             <div className="btn btn-light p-3 mx-2">
             Излаш
             </div>






            </div>
         </>
      );
   }

};

export default index;
