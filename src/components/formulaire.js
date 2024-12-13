import React, { useState } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Formulaire({ addTache }) {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titre === "") {
      setMessageError("Le titre est obligatoire!");
      return;
    }

    addTache({
      id: Date.now(),
      titre,
      description,
    });

    // Success alert
    toast.success("Tâche ajoutée avec succès!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    setTitre("");
    setDescription("");
    setMessageError("");
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        maxWidth: "600px",
        margin: "40px auto",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#4CAF50",
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Ajouter une Nouvelle Tâche
      </h1>
      <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#555",
              fontWeight: "600",
            }}
          >
            Titre:
          </label>
          <input
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          />
          {messageError && (
            <p style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
              {messageError}
            </p>
          )}
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#555",
              fontWeight: "600",
            }}
          >
            Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Ajouter Tâche
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addTache: (newTache) => {
    dispatch({
      type: "ADD_TACHE",
      payload: newTache,
    });
  },
});

export default connect(null, mapDispatchToProps)(Formulaire);
