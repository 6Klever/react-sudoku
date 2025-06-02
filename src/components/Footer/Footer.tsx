import { ReactElement } from "react";

import { CustomIcons } from "../CustomIcons";

import "./styles.scss";

function Footer(): ReactElement {
  return (
    <section className="footer">
      <div className="message">
        Made with love <CustomIcons className="text-w-red" color="#c90e0e" id="heart" /> on
        <a href="">
          <CustomIcons className="git-ico" color="#000000" id="github" />
        </a>
      </div>
    </section>
  );
}

export default Footer;
