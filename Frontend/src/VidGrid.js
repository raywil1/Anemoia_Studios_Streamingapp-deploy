// VidGrid.js
import React from "react";
import Video from "./Video";
import "./VidGrid.css"; // Create a corresponding CSS file for styling
import videoData from "./videoData";

// function VidGrid() {
//   const numRows = 3;
//   const numColumns = 1;

//   const gridItems = [];

//   // Create the grid
//   for (let row = 0; row < numRows; row++) {
//     for (let column = 0; column < numColumns; column++) {
//       gridItems.push(
//         <div className="grid-item" key={`${row}-${column}`}>
//           {" "}
//           <text>Sample</text>
//         </div>
//       );
//     }
//   }

//   return <div className="vid-grid">{gridItems}</div>;
// }
function VidGrid() {
  return (
    <div className="vid-grid">
      {videoData.map((video, index) => (
        <Video key={index} video={video} />
      ))}
    </div>
  );
}

export default VidGrid;
