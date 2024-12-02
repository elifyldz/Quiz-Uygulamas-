import React from "react";

// QuestionCard bileşeni, bir soruyu ve cevap seçeneklerini kullanıcıya gösterir.
const QuestionCard = ({ question, options, onAnswer, questionNumber, totalQuestions }) => {
  return (
    <div 
      style={{
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        height: "100vh", 
        justifyContent: "center", 
      }}
    >
      {/* Sorunun metni ve toplam soru sayısıyla birlikte şu anki soru numarası */}
      <h2>
        {questionNumber}/{totalQuestions} - {question}
      </h2>

      {/* Cevap seçeneklerini içeren düğme grubu */}
      <div 
        style={{
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "center", 
          gap: "10px", 
          marginTop: "20px", 
        }}
      >
        {/* options dizisindeki her eleman için bir düğme oluşturuluyor */}
        {options.map((option, index) => (
          <button
            key={index} // Benzersiz anahtar atanıyor (React'in render optimizasyonu için gerekli).
            onClick={() => onAnswer(option)} // Kullanıcı bir seçeneğe tıkladığında onAnswer fonksiyonu çalıştırılıyor.
            style={{
              padding: "10px 20px", 
              backgroundColor: "#6A5ACD", 
              color: "white", 
              border: "none", 
              borderRadius: "5px", 
              cursor: "pointer", 
              fontSize: "1rem", 
              minWidth: "150px", 
            }}
          >
            {option} {/* Seçenek metni düğme üzerinde gösteriliyor */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard; // QuestionCard bileşenini dışa aktarır.
