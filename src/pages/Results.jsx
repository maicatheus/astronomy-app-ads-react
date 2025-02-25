import { useLocation, useNavigate } from "react-router-dom";

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, questions } = location.state || { score: 0, questions: [] };

  return (
    <div className="container">
      <h1>Resultados do Quiz</h1>
      <p>Sua pontuação: {score} de {questions.length}</p>
      <h2>Respostas corretas:</h2>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            <strong>{q.question}</strong>: {q.answer}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/")}>Voltar ao início</button>
    </div>
  );
}

export default Results;
