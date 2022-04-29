import React from 'react'
import Form from './Form';
import imageTrack from '../../assets/image_track.jpg';

export default function Start() {
  return (
    <div className="row p-20 align-items-center mt-5 px-5" style={{backgroundImage: "url("+imageTrack+")"}}>
      <div className="col-md-6 col-12">
        <h1 className="text-start text-white">Built By Truckers</h1>
        <p className="text-start text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iste,
          repellendus rerum enim veritatis itaque eum ipsam eligendi nulla
          tempore possimus laboriosam quae ratione sint. Soluta ducimus dolor
          sed culpa autem rerum harum esse quibusdam tempora! Voluptate nostrum
          dolore dolores laboriosam praesentium quos ad tempora enim? Molestiae
          nemo optio deserunt?
        </p>
      </div>
      <div className="col-md-6 col-12 align-items-center">
        <Form></Form>
      </div>
    </div>
  );
}
