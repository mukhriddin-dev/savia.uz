import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";
import Count from "./Count";
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
                  <small>Қайердан</small>
                  <select id="from" className="form-select p-3 rounded-pill">
                     <option value="Toshkent">Toshkent</option>
                  </select>
               </div>


               <span className="rounded-circle changer mt-4">
                  <i class="bi bi-arrow-left-right"></i>
               </span>


               <div className="dt-select">
                  <small>Қайерга</small>
                  <select id="from" className="form-select rounded-pill     p-3">
                     <option value="Toshkent">Toshkent</option>
                  </select>
               </div>



               <div className="dt-select">
                  <small>Санани танланг</small>
                  <DatePicker selected={startDate} className="form-control rounded-pill p-3" onChange={(date) => setStartDate(date)} />
               </div>

               <div className="dt-select ">
                  <small>Санани танланг</small>
                  <DatePicker selected={endDate} className="form-control rounded-pill  p-3" onChange={(date) => setEndDate(date)} />
               </div>


               <div class="dropdown mx-3 ">
                  <small>Йўловчи </small>
                  <button class="btn p-3 btn-light rounded-pill  dropdown-toggle" data-bs-auto-close="outside" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Турини танланг
                  </button>
                  <ul class="dropdown-menu  menu-dr">

                     <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex align-items-center justify-content-between">
                           <div className="text-inneer d-flex flex-column">
                              <strong>Катталар</strong>
                              <small>12 ёшагача</small>
                           </div>
                           <Count />
                        </li>
                        <li class="list-group-item d-flex align-items-center justify-content-between">
                           <div className="text-inneer d-flex flex-column">
                              <strong>Болалар</strong>
                              <small>2 дан 12 ёшгача</small>
                           </div>
                           <Count />
                        </li>
                        <li class="list-group-item d-flex align-items-center justify-content-between">
                           <div className="text-inneer d-flex flex-column">
                              <strong>Чақалоқ</strong>
                              <small>2 ёшгача</small>
                           </div>
                           <Count />
                        </li>
                        <li class="d-flex p-2 justify-content-around form-check form-switch">
                           <span><input type="radio" name="type" className="form-check-input mx-1" role="switch" /><strong>Иқцодий</strong></span>
                           <span><input type="radio" name="type" role="switch" className="form-input  mx-1 form-check-input mx-1" /><strong>Бизнес</strong></span>
                        </li>

                     </ul>
                  </ul>
               </div>

               <div className="dt-select ">

                  <div className="btn mt-4 btn-light p-3 mx-2 d-flex align-items-center rounded-pill">
                     Излаш <i class="bi ms-2 mt-1 bi-search"></i>
                  </div>
               </div>





            </div>
         </>
      );
   }

};

export default index;
