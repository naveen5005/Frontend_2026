import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Favourites = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const storedMovies = JSON.parse(localStorage.getItem("Favourites") || "[]");
        setMovies(storedMovies);
    }, []);

    const handleRemoveMovie = (movieID) => {
        const updatedMovies = movies.filter((movie)=>movie.id !== movieID);
        setMovies(updatedMovies);
        localStorage.setItem("Favourites",JSON.stringify(updatedMovies));
    }
    return (
        <div>
            <h1>Favourite movie section</h1>
            {movies.length === 0 ? (
                <p>No favourite movies yet.</p>
            ) : (
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "20px",
                    padding: "20px"
                }}>
                    {movies.map((movie) => (
                        <MovieCard
                            title={movie.title}
                            poster={movie.poster}
                            rating={movie.rating}
                            language={movie.language}
                            year={movie.year}
                            genre={movie.genre}
                            director={movie.director}
                            id={movie.id}
                            key={movie.id}
                            showRemoveButton={true}
                            onRemove = {()=>handleRemoveMovie(movie.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Favourites;