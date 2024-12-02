import React from "react";

// QuestionCard bileşeni, bir soru kartını temsil eder ve bir sorunun yanı sıra seçenekleri ve kullanıcı etkileşimlerini içerir.
const QuestionCard = ({ question, options, onAnswer, questionNumber, totalQuestions }) => {
  return (
    <div 
      style={{
        display: "flex", // Bileşeni dikey olarak hizalamak için flexbox kullanılır.
        flexDirection: "column", 
        alignItems: "center", 
        height: "100vh", 
        justifyContent: "center", // dikey olarak ortalanır.
      }}
    >
      {/* Soru başlığı ve toplam soru sayısı gösterilir */}
      <h2>
        {questionNumber}/{totalQuestions} - {question}
      </h2>

      {/* Seçeneklerin bulunduğu düğmeler grubu */}
      <div 
        style={{
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "center", 
          gap: "10px", 
          marginTop: "20px", 
        }}
      >
        {/* Her bir seçenek için düğme oluşturulur */}
        {options.map((option, index) => (
          <button
            key={index} // Her düğme için benzersiz bir anahtar atanır.
            onClick={() => onAnswer(option)} // Kullanıcı bir düğmeye tıkladığında onAnswer fonksiyonu çağrılır.
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
            {option} {/* Düğme üzerinde seçeneğin metni gösterilir */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard; // QuestionCard bileşeni dışa aktarılır.
