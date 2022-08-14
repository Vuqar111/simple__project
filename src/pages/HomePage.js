import React from "react";
import Particles from "../components/Particles";
import { AiFillGold} from "react-icons/ai";
import {
  AiOutlineGoogle,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

const HomePage = () => {
  return (
    <div>
      <div className="content">
        <div>
          <AiFillGold className="content__logo" />
        </div>
        <h2>Launching in 00 Days 00h 00m 00s</h2>
        <p>
          Perfect and awesome template to present your future product or
          service. Hooking audience attention is all in the opener.
        </p>
        <div className="content__footer">
          <div>
            <AiOutlineFacebook  className="icon"/>
          </div>
          <div>
            <AiOutlineGoogle className="icon" />
          </div>
          <div>
            <AiOutlineLinkedin  className="icon"/>
          </div>
          <div>
            <AiOutlineInstagram className="icon" />
          </div>
        </div>
      </div>
      <Particles id="tsparticles" />
    </div>
  );
};

export default HomePage;
