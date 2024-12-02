import React, { useState } from "react";
import StartScreen from "./StartScreen"; // Oyun başlangıç ekranı bileşeni
import QuestionCard from "./QuestionCard"; // Soru kartı bileşeni
import ScoreCard from "./ScoreCard"; // Skor kartı bileşeni

// Oyun içinde kullanılacak sorular ve doğru cevaplar
const questions = [
  { question: "What river runs through London?", options: ["Thames", "Seine", "Danube", "Nile"], correct: "Thames" },
  { question: "What is the name of the clock tower in London?", options: ["Big Ben", "Clock Tower", "St. Paul", "London Eye"], correct: "Big Ben" },
  { question: "Which famous bridge is in London?", options: ["Golden Gate", "Tower Bridge", "Brooklyn", "Sydney Harbour"], correct: "Tower Bridge" },
  { question: "What color are London taxis traditionally?", options: ["Black", "Yellow", "White", "Green"], correct: "Black" },
  { question: "What is the London Underground called?", options: ["Metro", "Subway", "Tube", "Skytrain"], correct: "Tube" },
  { question: "Where does the Prime Minister of the UK live?", options: ["Buckingham Palace", "10 Downing Street", "Parliament", "Windsor Castle"], correct: "10 Downing Street" },
  { question: "What is the famous Ferris wheel in London called?", options: ["The Eye", "The Wheel", "London Eye", "Skyline"], correct: "London Eye" },
  { question: "Which London park is the largest?", options: ["Hyde Park", "Greenwich Park", "Richmond Park", "Regent's Park"], correct: "Richmond Park" },
  { question: "Which famous market is in London?", options: ["Camden Market", "Portobello Market", "Covent Garden", "All"], correct: "All" },
  { question: "What is the British Museum famous for?", options: ["Art", "History", "Science", "Nature"], correct: "History" },
];

function App() {
  // Oyun durumu: başlangıç, oynanıyor, bitmiş
  const [gameState, setGameState] = useState("start"); // 'start', 'playing', 'finished'
  const [currentQuestion, setCurrentQuestion] = useState(0); // Şu anki sorunun indeksi
  const [score, setScore] = useState(0); // Toplam skor

  // Oyunu başlatmak için kullanılan fonksiyon
  const handleStart = () => {
    setGameState("playing"); // Oyun durumunu 'playing' yapar
  };

  // Kullanıcı bir cevap seçtiğinde çağrılan fonksiyon
  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 100); // Doğru cevap için 100 puan ekler
    }

    // Bir sonraki soruya geç veya oyun biter
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1); // Sıradaki soruya geç
    } else {
      setGameState("finished"); // Son sorudan sonra oyun biter
    }
  };

  // Oyunu yeniden başlatmak için kullanılan fonksiyon
  const handleRestart = () => {
    setScore(0); // Skoru sıfırlar
    setCurrentQuestion(0); // İlk soruya döner
    setGameState("start"); // Oyun durumunu başlangıca çevirir
  };

  // Ana bileşenin render ettiği içerik
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Başlangıç ekranı */}
      {gameState === "start" && <StartScreen onStart={handleStart} />}

      {/* Soru ekranı */}
      {gameState === "playing" && (
        <QuestionCard
          question={questions[currentQuestion].question} // Şu anki soru metni
          options={questions[currentQuestion].options} // Şıklar
          onAnswer={handleAnswer} // Cevap seçildiğinde çağrılacak fonksiyon
          questionNumber={currentQuestion + 1} // Şu anki soru numarası
          totalQuestions={questions.length} // Toplam soru sayısı
        />
      )}

      {/* Skor ekranı */}
      {gameState === "finished" && <ScoreCard score={score} onRestart={handleRestart} />}
    </div>
  );
}

export default App; // App bileşenini dışa aktarır
