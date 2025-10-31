import React from "react";

const styles = [
  {
    name: "Casual",
    img: "./src/assets/casual.png",
  },
  {
    name: "Formal",
    img: "./src/assets/formal.png",
  },
  {
    name: "Party",
    img: "./src/assets/party.png",
  },
  {
    name: "Gym",
    img: "./src/assets/gym.png",
  },
];

export default function BrowseByStyle() {
  return (
    <section
      style={{
        backgroundColor: "#f5f5f5",
        borderRadius: "20px",
        padding: "3rem 2rem",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontWeight: "800",
          fontSize: "1.8rem",
          marginBottom: "2rem",
        }}
      >
        BROWSE BY DRESS STYLE
      </h2>

      <div
        className="style-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        {styles.map((item, index) => (
          <div
            key={index}
            className="style-card"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "15px",
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
                fontWeight: "600",
                backgroundColor: "rgba(255,255,255,0.8)",
                borderRadius: "10px",
                padding: "0.3rem 0.7rem",
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
