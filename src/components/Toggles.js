import React, { useState } from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
const Toggles = () => {
  const [openAbout, setOpenAbout] = useState(true);
  const [openContact, setOpenContact] = useState(true);
  return (
    <div>
      <div className="toggles">
        <div onClick={() => setOpenAbout(!openAbout)}>About</div>
        <div onClick={() => setOpenContact(!openContact)}>Contact</div>
      </div>
      <div>
       <About openAbout={openAbout} setOpenAbout={setOpenAbout}/>
      </div>
      <div>
       <Contact openContact={openContact} setOpenContact={setOpenContact}/>
      </div>
    </div>
  );
};

export default Toggles;
