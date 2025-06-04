// src/components/ModalWinner/ModalWinner.tsx
import "./styels.scss";

interface Props {
  openWinnerModal: boolean;
  onClose: () => void;
}

function ModalWinner({ openWinnerModal, onClose }: Props) {
  if (!openWinnerModal) {
    return null;
  }

  return (
    <div className="winnerModal">
      <div className="modalBg" />
      <div className="modalContent">
        <h4 className="title">Congratulations!</h4>
        <p className="description">SUDOKU was be solved!</p>
        <p className="description">Restart the game ?</p>
        <div className="btnsEndgameContainer">
          <button
            className="btn"
            onClick={() => {
              window.location.reload();
            }}
          >
            Restart
          </button>
          <button className="btn" onClick={onClose}>
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalWinner;
