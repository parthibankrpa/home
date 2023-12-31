import profileimage from "../assets/profile.png";

function ProfileImage() {
    return <div className="profile-image" style={{ backgroundImage: `URL(${profileimage})` }}></div>
}
export default ProfileImage;