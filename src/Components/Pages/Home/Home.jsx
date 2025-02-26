import { Link } from "react-router-dom";
import "./Home.css";
import movieImg from "../../../assets/images/2.jpg";
export const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Xoş Gəlmişsiniz!</h1>
        <p>Azərbaycan filmlərinin sehrli dünyasına dalın.</p>
      </div>

      <div className="featured-movie">
        <img src={movieImg} alt="Featured Movie" />
        <div className="featured-text">
          <h2>Azərbaycan Kino Sənəti</h2>
          <p>
            Azərbaycanın zəngin film mədəniyyəti ilə tanış olun. Klassik və
            müasir filmlər sizi gözləyir!
          </p>
        </div>
      </div>
      <div className="home-buttons">
        <Link to="/movies" className="btn">
          🎬 Filmlərə Bax
        </Link>
        <Link to="/about" className="btn">
          ℹ️ Haqqımızda
        </Link>
      </div>
    </div>
  );
};
