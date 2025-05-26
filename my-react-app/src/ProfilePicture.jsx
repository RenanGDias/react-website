
function ProfilePicture() {

    const imgUrl = './src/assets/Image.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return (<img onClick={(e) => handleClick(e)} src={imgUrl}></img>);
}

export default ProfilePicture