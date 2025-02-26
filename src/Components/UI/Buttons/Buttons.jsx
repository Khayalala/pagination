import "./Buttons.css"
import { useNavigate } from "react-router-dom";
export const HomeBtn = () => {
  const navigate = useNavigate();
  return (
    <button className="btn" onClick={() => navigate("/")}>
      🏠 Əsas Səhifəyə Qayıt
    </button>
  );
};
