import React from "react";
import { BiSpeaker } from "react-icons/bi";
import { SiPeakdesign } from "react-icons/si";
import hand from "../assets/hand.png";
import champ from "../assets/camp.png";
import champ2 from "../assets/camp2.png";
import mone from "../assets/mone.png";

function stats() {
  return (
    <div className="flex flex-row justify-center ">
      <div className="flex shadow-black shadow-lg  rounded-lg   p-8    justify-center   ">
        <div className="flex flex-col gap-3 w-80  p-6 px-10 border-gray-300 text-xl items-center border-r-2                     ">
          <div className="icon">
            <img src={champ2} alt="" />
          </div>
          <p>2345</p>
          <p>Total Campain</p>
        </div>
        <div className="flex flex-col gap-3 w-80 p-6 px-10  border-r-2 border-gray-300 text-xl items-center">
          <div className="icon">
            <img src={hand} alt="" />
          </div>
          <p>2345</p>
          <p>Satusfied Donors</p>
        </div>
        <div className="flex flex-col gap-3 w-80 p-6 px-10   border-r-2 border-gray-300 text-xl items-center">
          <div className="icon">
            <img src={mone} alt="" />
          </div>
          <p>2345</p>
          <p>Fund Raised</p>
        </div>
        <div className="flex flex-col gap-3 w-80 p-6 px-10 text-xl  items-center">
          <div className="icon">
            <img src={champ} alt="" />
          </div>
          <p>2345</p>
          <p>Happy Volunteers</p>
        </div>
      </div>
    </div>
  );
}

export default stats;
