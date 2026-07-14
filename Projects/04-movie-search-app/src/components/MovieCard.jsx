import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
    const { id, title, year, director, rating, genre, poster, language, showRemoveButton, onRemove } = props;
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/movie/${id}`);
    };

    const handleRemoveClick = (event) => {
        event.stopPropagation();
        onRemove?.();
    };

    return (
        <div
            style={{
                border: "2px solid black",
                padding: "10px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                minHeight: "100%"
            }}
            key={id}
            onClick={handleCardClick}
        >
            <img src={poster} alt={title} width={100} height={100} style={{ alignSelf: "center" }}/>
            <p>title - {title}</p>
            <p>director - {director}</p>
            <p>year - {year}</p>
            <p>language - {language}</p>
            <p>rating - {rating}</p>
            <p>genre - {genre}</p>
            {
                showRemoveButton && (
                    <button type="button" onClick={handleRemoveClick}>remove</button>
                )
            }
        </div>
    )
}
export default MovieCard;