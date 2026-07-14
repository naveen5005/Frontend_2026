import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [isFavourite, setIsFavourite] = useState(false);

    const getMovie = async () => {
        try {
            const response = await fetch(`http://localhost:3000/movies/${id}`);
            const data = await response.json();
            setMovie(data);
            // Check if movie already exists in favourites
            const favourites = JSON.parse(localStorage.getItem("Favourites")) || [];

            const exists = favourites.some(
                (fav) => fav.id === data.id
            );

            setIsFavourite(exists);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getMovie();
    }, [])

    const handleAddFav = () => {
        const favourites = JSON.parse(localStorage.getItem("Favourites")) || [];

        favourites.push(movie);

        localStorage.setItem(
            "Favourites",
            JSON.stringify(favourites)
        );

        setIsFavourite(true);
    }
    return (
        <div>
            <h1>{movie?.title}</h1>
            <img src={movie?.poster} alt={movie?.title} height={300} width={300} />
            <p>year - {movie?.year}</p>
            <p>rating - {movie?.rating}</p>
            <p>director - {movie?.director}</p>
            <p>language - {movie?.language}</p>
            <p>runtime - {movie?.runtime}</p>
            <p>genre - {movie?.genre}</p>
            {isFavourite ? (
                <p>Added to favourites ✅</p>
            ) : (
                <button type="button" onClick={handleAddFav}>
                    Add Fav
                </button>
            )}
        </div>
    )
}

export default MovieDetails;