import React from "react";
import './Categories.css';
const styles = [
  {
    name: "Casual",
    img: "./src/assets/casual.png",
    id: 1
  },
  {
    name: "Formal",
    img: "./src/assets/formal.png",
    id: 2
  },
  {
    name: "Party",
    img: "./src/assets/party.png",
    id: 2
  },
  {
    name: "Gym",
    img: "./src/assets/gym.png",
    id: 1
  },
];

export default function Categories() {
  return (
    <section
    className="sectionn"
      style={{
        backgroundColor: "#f5f5f5",
        borderRadius: "20px",
        padding: "6rem",
        textAlign: "center",
        margin: "7%",
        alignItems: "center",
      }}
    >
      <div>
      <h1
        className="h1"
        style={{
          fontFamily: "BBH Sans Hegarty",
          fontSize: "3.9rem" ,
          fontWeight: "bold",
          textAlign: "center" ,
          color: "black",
          marginBottom: "5rem",
          }}>
        BROWSE BY DRESS STYLE
      </h1>
</div>
      <div
        className="style-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        {styles.map((item, index) => (
          <div
            key={index}
              className={`style-card ${item.id === 1 ? "small" : "large"}`}            
              style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "relative",
              overflow: "hidden",
              borderRadius: "15px",
              maxHeight: "24rem",
              minHeight: "20rem",
              backgroundColor: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
            <h3
              style={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
                fontWeight: "bold",
                borderRadius: "10px",
                padding: "0.3rem 0.7rem",
                fontSize: "3rem",
              }}
            >
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
