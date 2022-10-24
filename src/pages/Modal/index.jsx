import React from "react";
import "./style.scss";
const index = () =>
{
  return (
    <>
      {/* <!-- Button trigger modal --> */}


      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
              <i class="bi bi-person-circle"></i> Тизимга кириш
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">

              <div class="login-form w-50 mx-auto ">
                <h4>Кириш</h4>
                <br />
                <form class="g-3">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingEmail" placeholder="email@example.com" />
                    <label for="floatingEmail">Email address or mobile number</label>
                  </div>
                  <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div class="py-2 d-block text-end">
                    <a href="#">Паролни эсдан чиқардингизми?</a>
                  </div>
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">Кириш</button>
                    <button class="btn btn-outline-primary" type="button">
                    Рўйҳатдан ўтиш
                    </button>
                  </div>
                </form>
              </div>



            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
               Чиқиш
              </button>
              <button type="button" class="btn btn-primary">
              Ўзгаришларни сақланг
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
