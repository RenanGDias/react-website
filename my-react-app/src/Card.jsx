import Foto from "./assets/placeholder-photo.jpg"

function Card() {
    return(
        <div className="card">
            <img className="card-image"src={Foto} alt="profile picture"></img>
            <h2 className="card-title">Renan Dias</h2>
            <p className="card-text">Eu faço ciência da computação na UFPB e jogo videogames</p>
        </div>
    );
}

export default Card