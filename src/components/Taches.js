import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Taches = ({ taches, deleteTache }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTacheId, setSelectedTacheId] = useState(null);

  const openModal = (id) => {
    setSelectedTacheId(id);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedTacheId(null);
  };

  const confirmDelete = () => {
    deleteTache(selectedTacheId);
    closeModal();
  };

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        maxWidth: "800px",
        margin: "40px auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#4CAF50",
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Liste des Tâches
      </h1>
      {taches.length === 0 ? (
        <p
          style={{
            color: "#666",
            fontSize: "18px",
            fontWeight: "lighter",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Aucune tâche ajoutée.
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {taches.map((tache) => (
            <li
              key={tache.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <h2
                style={{
                  color: "#333",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {tache.titre}
              </h2>
              <p
                style={{
                  color: "#555",
                  fontSize: "16px",
                  marginBottom: "15px",
                }}
              >
                {tache.description}
              </p>
              <button
                style={{
                  alignSelf: "flex-end",
                  backgroundColor: "#e53935",
                  color: "#fff",
                  padding: "8px 16px",
                  fontSize: "14px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#d32f2f")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#e53935")
                }
                onClick={() => openModal(tache.id)}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmation Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            textAlign: "center",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>
          Confirmer la suppression
        </h2>
        <p style={{ marginBottom: "20px", color: "#666" }}>
          Êtes-vous sûr de vouloir supprimer cette tâche ?
        </p>
        <div>
          <button
            style={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              padding: "10px 20px",
              marginRight: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={confirmDelete}
          >
            Oui
          </button>
          <button
            style={{
              backgroundColor: "#e53935",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={closeModal}
          >
            Non
          </button>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  taches: state.taches,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTache: (id) => dispatch({ type: "DELETE_TACHE", payload: { id } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Taches);
