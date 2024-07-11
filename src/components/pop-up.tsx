import "@/assets/styles/pop-up.css";

export const PopUp = () => {
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Popup Content</h2>
        <p>This is the content of the popup.</p>
        <button onClick={() => {
          console.log("click");
        }}>
          Close
        </button>
      </div>
    </div>
  );
};
