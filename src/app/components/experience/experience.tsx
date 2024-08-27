import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";

import "./experience.scss";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>1 year as a software development.</p>

      <div className="projects">
        <SectionTitle text="Developments" />
        <div>
          <p>FSW Barber</p>
          <button>
            <a
              target="_blank"
              href="https://fswbarberbarbearia-joao-francas-projects.vercel.app"
            >
              check the project
            </a>
          </button>
        </div>
        <div>
          <p>Capputeeno</p>
          <button>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1AmYa2ThCaIomORTcjCrQc84e6oElW1Fk/view?pli=1"
            >
              check the project
            </a>
          </button>
        </div>
      </div>
      <SectionTitle
        text="Main Technologies
"
      />
      <div className="experience-time">
        <Image src="/react.png" width={40} height={40} alt="react logo" />
        <Image src="/ts.png" width={40} height={40} alt="typescript logo" />
        <Image src="/js.png" width={40} height={40} alt="javascript logo" />
        <Image src="/tailwind.png" width={40} height={40} alt="tailwind logo" />
        <Image src="/figmaicon.png" width={40} height={40} alt="figma logo" />
      </div>
    </div>
  );
}
