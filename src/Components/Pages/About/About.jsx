import "./About.css";
import { HomeBtn } from "../../UI";
export const About = () => {
  return (
    <div className="about-container">
      <h1>Haqqımızda</h1>
      <HomeBtn/>
      <p>
        Azərbaycan filmləri mədəniyyətimizin ayrılmaz hissəsidir. Bu platforma
        vasitəsilə siz Azərbaycan kino sənətinin klassik və müasir nümunələri
        ilə tanış ola bilərsiniz.
      </p>
      <p>
        Məqsədimiz, yerli kino sənətini tanıtmaq və hər kəsə əlçatan etməkdir.
      </p>
    </div>
  );
};
