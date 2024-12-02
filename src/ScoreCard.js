import React from "react";

// ScoreCard bileşeni, skor ve yeniden başlatma fonksiyonunu (onRestart) prop olarak alır
const ScoreCard = ({ score, onRestart }) => {
  return (
    // Ekranı tam kaplayan bir div; dikey ve yatay merkezleme için düzenlendi,
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", justifyContent: "center" }}>
      {/* Skoru göstermek için bir başlık */}
      <h2>Skor: {score}</h2>

      {/* Yeniden başlatma butonu */}
      <button
        onClick={onRestart} // Butona tıklandığında, prop olarak gelen onRestart fonksiyonu çalıştırılır
        style={{
          padding: "10px 20px", 
          backgroundColor: "#6A5ACD", 
          color: "white", 
          border: "none", 
          borderRadius: "5px",
          cursor: "pointer", 
          fontSize: "1.2rem", 
        }}
      >
        Yeniden Başla
      </button>
    </div>
  );
};

export default ScoreCard; // ScoreCard bileşeni dışa aktarılıyor, böylece başka dosyalarda kullanılabiliriz

