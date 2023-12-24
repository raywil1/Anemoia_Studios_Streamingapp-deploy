import "./Profile.css";
import VidGrid from "./VidGrid";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>My Profile</h2>
      </div>
      <div>
        <div className="profile-name">
          <h3>&nbsp;&nbsp;&nbsp;Profile Name</h3>
        </div>
        <div className="Profile">
          <img src="path/to/profile-picture.jpg" alt="Profile" />
          <p>Gender: N/A</p>
          <p>DOB: January 1, 1990</p>
        </div>
      </div>
      <div>
        <div className="textWithButton">
          <h3>&nbsp;&nbsp;&nbsp;Reviewed Films</h3>
        </div>
        <div className="vid-grid">
          <VidGrid />
        </div>
      </div>
      <div>
        <div className="textWithButton">
          <h3>&nbsp;&nbsp;&nbsp;My List</h3>
        </div>
        <div className="vid-grid">
          <VidGrid />
        </div>
      </div>
      <div>
        <div className="textWithButton">
          <h3>&nbsp;&nbsp;&nbsp;Recently Watched</h3>
        </div>
        <div className="vid-grid">
          <VidGrid />
        </div>
      </div>
      <div>
        <div className="textWithButton">
          <h3>&nbsp;&nbsp;&nbsp;Create a new playlist +</h3>
        </div>
        <div className="vid-grid">
          <VidGrid />
        </div>
      </div>
    </div>
  );
}

export default Profile;
