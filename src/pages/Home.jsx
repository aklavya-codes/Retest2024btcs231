  import StudentCard from "../components/StudentCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Student Identity Card</h1>

      <StudentCard />

      <button onClick={() => navigate("/test")}>
        Start Test
      </button>
    </div>
  );
}

export default Home;