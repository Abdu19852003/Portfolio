import "./skill.css";
import UIDesign from "../../../assets/ui-design.png";
import WebDesign from "../../../assets/website-design.png";
import AppDesign from "../../../assets/app-design.png";

const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle"> About Me</span>
      <span>
        Fullstack Web Developer auf der Suche nach neuen Herausforderung
        |HTML|CSS|JavaScript|React|Node.js
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <div className="skillBarText">
            <p>
              Als leidenschaftlicher Webentwickler habe ich ein Jahr intensiver
              Weiterbildung hinter mir und bin fest entschlossen, innovative und
              benutzerfreundliche Webanwendungen zu gestalten. Meine Fähigkeiten
              umfassen die Entwicklung responsiver und performanter Websites
              unter Verwendung moderner Technologien wie HTML5, CSS3 und
              JavaScript. Während meiner Weiterbildung habe ich auch fundierte
              Kenntnisse in der Nutzung von Frameworks wie React und Vue.js
              erworben. Ich bin bestrebt, elegante Lösungen zu finden und lege
              großen Wert auf sauberen, gut dokumentierten Code. Durch meine
              Weiterbildung habe ich Erfahrungen in der Zusammenarbeit in agilen
              Teams gesammelt und bin mit gängigen Versionskontrollsystemen
              vertraut. Eine besondere Erfahrung war mein Engagement in einem
              Teamprojekt, bei dem wir erfolgreich eine vollständige
              Fullstack-App (EnergizeMe) entwickelt haben. Dabei konnte ich
              meine Fähigkeiten in den Bereichen Node.js, MongoDB und Express
              erfolgreich einsetzen. Diese Erfahrung hat nicht nur meine
              technischen Kenntnisse vertieft, sondern auch meine Zusammenarbeit
              in agilen Teams gestärkt. Zudem bin ich mit gängigen
              Versionskontrollsystemen vertraut.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
