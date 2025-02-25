import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import questionsData from "../data/questions";

function getRandomQuestions(questions, num) {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions(getRandomQuestions(questionsData, 5));
  }, []);

  const handleAnswer = (option) => {
    if (answered) return;
    setAnswered(true);
    if (option === questions[questionIndex].answer) {
      setScore(score + 1);
      setMessage("✔️ Resposta correta!");
    } else {
      setMessage(`❌ Errado! A resposta correta é: ${questions[questionIndex].answer}`);
    }
    setTimeout(() => {
      if (questionIndex + 1 < questions.length) {
        setQuestionIndex(questionIndex + 1);
        setAnswered(false);
        setMessage("");
      } else {
        navigate("/results", { state: { score, questions } });
      }
    }, 2000);
  };

  if (questions.length === 0) return <p>Carregando perguntas...</p>;

  return (
    <div className="quiz-container">
      <h2>{questions[questionIndex].question}</h2>
      {questions[questionIndex].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)} disabled={answered}>
          {option}
        </button>
      ))}
      {message && <p>{message}</p>}
      <p>Pontuação: {score}</p>
    </div>
  );
}

export default Quiz;
