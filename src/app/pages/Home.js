import React from "react";
import End from "../components/Home/End";
import EndBar from "../components/Home/EndBar";
import Middle from "../components/Home/Middle";
import Start from "../components/Home/Start";


export default function Home() {
  return (
    <>
      <div className="h-100">       
        <Start></Start>
        <Middle></Middle>
        <End></End>
        <EndBar></EndBar>
      </div>
    </>
  );
}
