import React from 'react'
import imageMoney from "../../assets/image_money.png";
export default function Middle() {
  return (
    <div className="mt-5 px-5 mx-5">
      <div className="row">
        <h1 className="text-center">Don't let cash flow stop you</h1>
        <hr />
        <p className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id adipisci
          numquam magnam perspiciatis dolorem quidem?
        </p>
      </div>
      <div className="row">
        <div className="col-12 col-xl-6">
          <div className="shadow-sm row p-5 mt-4 m-1">
            <div className="col-6 col-sm-3">
              <img src={imageMoney} alt="" width="100px" />
            </div>
            <div className="col">
              <div className="col">
                <h3>Fundin for exporters and importers</h3>
              </div>
              <div className="col">
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="shadow-sm row p-5 mt-4 m-1">
            <div className="col-6 col-sm-3">
              <img src={imageMoney} alt="" width="100px" />
            </div>
            <div className="col">
              <div className="col">
                <h3>Fundin for exporters and importers</h3>
              </div>
              <div className="col">
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
