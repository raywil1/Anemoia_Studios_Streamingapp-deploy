import "./App.css";
import VidGrid from "./VidGrid";

function Genre() {
  return (
    <div>
      <div>
        <div className="textWithButton">
          <h3>&nbsp;&nbsp;&nbsp;Genre A:</h3>
        </div>
        <VidGrid />
      </div>
      <div>
        <div className="textWithButton">
          <h3>&nbsp;&nbsp;&nbsp;Genre B:</h3>
        </div>
        <VidGrid />
      </div>
    </div>
  );
}

export default Genre;
