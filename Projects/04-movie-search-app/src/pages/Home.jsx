import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const getMovies = async () => {
        try {
            setError("");
            setLoading(true);
            const response = await fetch("http://localhost:3000/movies");
            const data = await response.json();
            if (response.ok !== 200) {
                setError(data.error)
            }
            setMovies(data);
        } catch (error) {
            setError(error);
            setMovies([]);
        } finally {
            setLoading(false)
        }
    }

    const filteredMovies = Array.isArray(movies)
        ? movies.filter((movie) => {
            const searchText = search.toLowerCase();
            return (
                movie.title.toLowerCase().includes(searchText) ||
                movie.director.toLowerCase().includes(searchText) ||
                movie.genre.toLowerCase().includes(searchText) ||
                movie.year.toString().includes(searchText) ||
                movie.rating.toString().includes(searchText) ||
                movie.language.toLowerCase().includes(searchText)
            );
        }) : [];
    useEffect(() => {
        getMovies();
    }, [])
    return (
        <div>
            <h1>welcome to home component</h1>
            <SearchBar search={search} setSearch={setSearch} />
            {
                error && (
                    <h3 style={{ color: "red" }}>{error}</h3>
                )
            }
            {
                loading && (<h3>Loading movie details....</h3>)
            }
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                columnGap: "20px",
                rowGap: "40px",
                padding: "20px"
            }}>
                {
                    filteredMovies.map((movie) => {
                        return (
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
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;