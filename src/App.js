import React from "react";
import Formulaire from "./components/formulaire";
import { Link, Route, Routes } from "react-router-dom";
import Taches from "./components/Taches";

function App() {
  return (
    <div
      className="App"
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <header
        style={{
          backgroundColor: "#4CAF50",
          width: "100%",
          padding: "15px 0",
          textAlign: "center",
          color: "white",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ margin: "0", fontSize: "24px", fontWeight: "bold" }}>
          Liste de Tâches 
        </h1>
        <nav style={{ marginTop: "10px" }}>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              margin: "0 10px",
              padding: "5px 15px",
              border: "2px solid white",
              borderRadius: "5px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => (
              (e.target.style.backgroundColor = "white"),
              (e.target.style.color = "#4CAF50")
            )}
            onMouseLeave={(e) => (
              (e.target.style.backgroundColor = "transparent"),
              (e.target.style.color = "white")
            )}
          >
            Formulaire
          </Link>
          <Link
            to="/Liste"
            style={{
              color: "white",
              textDecoration: "none",
              margin: "0 10px",
              padding: "5px 15px",
              border: "2px solid white",
              borderRadius: "5px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => (
              (e.target.style.backgroundColor = "white"),
              (e.target.style.color = "#4CAF50")
            )}
            onMouseLeave={(e) => (
              (e.target.style.backgroundColor = "transparent"),
              (e.target.style.color = "white")
            )}
          >
            Liste des Tâches
          </Link>
        </nav>
      </header>
      <main style={{ width: "90%", maxWidth: "800px", margin: "20px auto" }}>
        <Routes>
          <Route path="/" element={<Formulaire />} />
          <Route path="/Liste" element={<Taches />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
