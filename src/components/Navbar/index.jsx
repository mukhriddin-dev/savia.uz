import React from "react";
import "./style.scss";
import logo from "../../assets/images/logo.png";

const index = () =>
{
  return (
    <>
      <header>
        <div className="container">
          <nav class="nav d-flex justify-content-between  align-items-center">
            <img src={logo} alt="" className="nav__logo" />

            <ul className="nav__ul list-unstyled d-flex">


              <li className="nav__ul--list">
                <div class="btn-group ">
                  <button
                    type="button"
                    class="btn btn-transparent dropdown-toggle text-white btn-log"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>Ўзбек</span> <i class="bi bi-person"></i>
                  </button>

                  <ul class="dropdown-menu w-25">
                    <li>
                      <a class="dropdown-item" href="#">
                        Ўзбек
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Русский
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav__ul--list">


                <button
                  type="button"
                  class="btn btn-transparent  text-white btn-log"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"                  >
                  <span>Кириш</span> <i class="bi bi-person"></i>
                </button>

              </li>


            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default index;
