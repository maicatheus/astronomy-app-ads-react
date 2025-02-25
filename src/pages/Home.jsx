import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Bem-vindo ao Projeto Astronomia</h1>
      <Link to="/quiz">
        <button>Iniciar Quiz</button>
      </Link>
    </div>
  );
}

export default Home;
