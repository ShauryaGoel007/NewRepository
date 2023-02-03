import React from "react";

export const About = () => {
  return (
    <div className="container">
      <form method="">
        <div className="row d-flex">
          <div className="img-container">
            <img src="" alt="default pic" />
          </div>
          <div className="prof-name">
            <div className="profile-head">
              <h5>Shaurya Goel</h5>
              <h6>Web Devevoper</h6>
              <p className="profile-rank">
                Rank <span>10</span>
              </p>

              <ul className="nav justify-content-center" rolw="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#home"
                    role="tab"
                    data-toggle="tab"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#profile"
                    role="tab"
                    data-toggle="tab"
                  >
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
            <div className="credentials">
              <input type="submit" value="edit-profile" name="btn" />
            </div>
          </div>
        </div>

        <div className="row">
          {/*leftside-url */}
          <div className="">
            <div className="profile-work">
              <p>work Links</p>
              <a href="#">youtube</a>
            </div>
          </div>
          {/*right side-url */}
          <div className="right-side">
            <div className="tab-content" id="tab-content">
              <div
                className="tab-pane fade show active"
                role="tabpanel"
                id="home"
              >
                <div className="row">
                  <div className="col">
                    <label htmlFor="">Userid</label>
                  </div>
                  <div className="col">
                    <p>hjhjjh</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="">Name</label>
                  </div>
                  <div className="col">
                    <p>hjhjjh</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="">Name</label>
                  </div>
                  <div className="col">
                    <p>hjhjjh</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="">Name</label>
                  </div>
                  <div className="col">
                    <p>hjhjjh</p>
                  </div>
                </div>
              </div>
              {/**timeline */}
              <div id="">
                <div className="row">
                  <div className="col">
                    <label htmlFor="">timeline</label>
                  </div>
                  <div className="col">
                    <p>3453453546356456536456</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
