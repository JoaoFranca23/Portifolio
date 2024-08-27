import { SectionTitle } from "../sectionTitle/section-title";
import "./information.scss";

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages-info">
        <span>🇺🇸 EN - Intermediary</span>
        <span>🇧🇷 PT-BR - Native Speaker</span>
      </div>
      <SectionTitle text="Education" />
      <div className="educational-info">
        <div>
          <span>🎓</span>
          <span>Development Systems, SENAC </span>
        </div>

        <div>
          <span>🎓</span>
          <span>React Pro, Full Stack Club</span>
        </div>
        <div>
          <span>🎓</span>
          <span>Udemy, React.Js e Next.Js intermediário e avançado</span>
        </div>
      </div>
    </div>
  );
}
