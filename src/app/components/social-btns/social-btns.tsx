import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./social-btns.scss";

export function SocialBtns() {
  return (
    <div className="social">
      <a target="_blank" href="https://www.instagram.com/joao_franca_23">
        <InstaIcon />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/joão-frança-9b37a9220/"
      >
        <LinkedInIcon />
      </a>
      <a target="_blank" href="https://github.com/JoaoFranca23">
        <GitHubIcon />
      </a>
    </div>
  );
}
