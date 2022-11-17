import React from "react";
import Wrapper from "./styled/Content.styled";
import img from "../assets/images/image-hero-desktop.png";
import { ReactComponent as IconDatabiz } from "../assets/images/client-databiz.svg";
import { ReactComponent as IconAudio } from "../assets/images/client-audiophile.svg";
import { ReactComponent as IconMeet } from "../assets/images/client-meet.svg";
import { ReactComponent as IconMaker } from "../assets/images/client-maker.svg";

const Content = ({ closeSidebar }) => {
  return (
    <Wrapper onClick={closeSidebar}>
      <div className="content">
        <div>
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="btn btn-hero">Learn more</button>
        </div>

        <div className="social-icons">
          <IconDatabiz className="social-icon" />
          <IconAudio className="social-icon" />
          <IconMeet className="social-icon" />
          <IconMaker className="social-icon" />
        </div>
      </div>

      <img src={img} alt="hero" className="content__img" />
    </Wrapper>
  );
};

export default Content;
