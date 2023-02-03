import React from "react";

export const Contact = () => {
  return (
    <div className="contact-info">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 d-flex justify-content-between ">
            {/* phone nuber */}
            <div className="contact-info-item d-flex justify-content-start align-items-center">
              <img src="" alt="phone" />
              <div className="contact-info-content">
                <div className="contact-info-title">Phone</div>
                <div className="contact-info-title">9999999999</div>
              </div>
            </div>
            {/* email */}
            <div className="email-info-item d-flex justify-content-start align-items-center">
              <img src="" alt="phone" />
              <div className="email-info-content">
                <div className="email-info-title">email</div>
                <div className="email-info-title">shaurya@gmail.com</div>
              </div>
            </div>
            {/* address */}
            <div className="address-info-item d-flex justify-content-start align-items-center">
              <img src="" alt="phone" />
              <div className="address-info-content">
                <div className="address-info-title">address</div>
                <div className="address-info-title">home address</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact us form */}
      <form action="">
        <div class="row g-3 m-10">
          <div class="col-sm">
            <input type="text" class="form-control" placeholder="Name" />
          </div>
          <div class="col-sm">
            <input type="text" class="form-control" placeholder="Email" />
          </div>
          <div class="col-sm">
            <input
              type="text"
              class="form-control"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div class="mb-3">
          <label htmlFor="exampleFormControlTextarea1" class="form-label">
            message{" "}
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="message"
          ></textarea>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
