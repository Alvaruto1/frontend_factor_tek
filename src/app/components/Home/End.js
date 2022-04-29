import React from "react";
import imageBussiness from "../../assets/image_bussiness.jpg";
import imageMoney from "../../assets/image_money.png";

export default function End() {
  return (
    <div className="mt-5 p-5 bg-light">
      <div className="row">
        <h1 className="text-center">
          The benefits of factoring with FactorTek
        </h1>
        <hr />
        <p className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id adipisci
          numquam magnam perspiciatis dolorem quidem?
        </p>
      </div>
      <div className="row mx-5">
        <div className="col-12 col-md card m-2">
          <img
            src={imageBussiness}
            className="card-img-top img-fluid"
            alt="..."
          />
          <div className="card-body text-center m-2">
            <img src={imageMoney} width="100px" alt="" />
            <h5 className="card-title text-center m-2">Manage ypur cashflow</h5>
            <p className="card-text text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="col-12 col-md card m-2">
          <img
            src={imageBussiness}
            className="card-img-top img-fluid"
            alt="..."
          />
          <div className="card-body text-center">
            <img src={imageMoney} width="100px" alt="" />
            <h5 className="card-title text-center m-2">Forget collections</h5>
            <p className="card-text text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="col-12 col-md card m-2">
          <img
            src={imageBussiness}
            className="card-img-top img-fluid"
            alt="..."
          />
          <div className="card-body text-center">
            <img src={imageMoney} width="100px" alt="" />
            <h5 className="card-title text-center m-2">Debt free</h5>
            <p className="card-text text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
