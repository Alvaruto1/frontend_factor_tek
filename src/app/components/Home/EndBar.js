import React from "react";

export default function EndBar() {
  return (
    <>
      <div className="bg-warning h-auto">
        <div className="d-flex justify-content-center p-1">
          <div className="text-white">Follow Us:</div>
          <a href="#" className="mx-1">
            <i className="bi bi-facebook text-white"></i>
          </a>
          <a href="#" className="mx-1">
            <i className="bi bi-linkedin text-white"></i>
          </a>
        </div>
      </div>
      <div className="bg-primary d-flex justify-content-evenly pb-4">
        <div className="text-white">
          <div className="pt-4 pb-3">
            <b>Financial solutions</b>
          </div>
          <div>
            <a className="link-light" href="#">
              Freight factoring
            </a>
          </div>
          <div>
            <a className="link-light" href="#">
              International
            </a>
          </div>
          <div></div>
          <a className="link-light" href="#">
            Factoring
          </a>
          <div>
            <a className="link-light" href="#">
              Supply chain finance
            </a>
          </div>
        </div>
        <div className="text-white">
          <div className="pt-4 pb-3">
            <b>Company</b>
          </div>
          <div>
            <a className="link-light" href="#">
              About us
            </a>
          </div>
          <div>
            <a className="link-light" href="#">
              References
            </a>
          </div>
        </div>
        <div className="text-white">
          <div className="pt-4 pb-3">
            <b>Resources</b>
          </div>
          <div>
            <a className="link-light" href="#">
              FAQs
            </a>
          </div>
        </div>
        <div className="text-white">
          <div className="pt-4 pb-3">
            <b>Contact us</b>
          </div>
          <div>175 SW 7th St. Miami Fl 33130 EE.UU</div>
          <div>(786)206-3672</div>
        </div>
      </div>
    </>
  );
}
