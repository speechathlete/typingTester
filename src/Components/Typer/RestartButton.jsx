const RestartButton = ({ restart }) => (
  <div className="text-tools">
    <div onClick={restart} className="restart">
      <i className="material-icons-round">replay</i>
    </div>
  </div>
);

export default RestartButton;
