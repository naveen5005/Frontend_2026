import { useEffect, useState } from "react";

const Weather = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const [city, setCity] = useState("");


    const [weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getWeather = async () => {
        try {
            setError("");
            setLoading(true)
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message)
            }
            setWeatherData(data);
        } catch (error) {
            setError(error.message);
            setWeatherData({});
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if (!city.trim()) return
        const timer = setTimeout(() => {
            getWeather();
        }, 500);

        return () => clearInterval(timer);
    }, [city])
    return (
        <div>
            <h1>welcome to weather app</h1>
            <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} />

            {
                loading && (
                    <h3>loading weather details...</h3>
                )
            }
            {
                error && (
                    <h3 style={{ color: "red" }}>{error}</h3>
                )
            }
            {
                weatherData?.cod === 200 && (
                    <>
                        <h2>{weatherData?.name}</h2>

                        <p>Temperature: {weatherData?.main.temp}°C</p>

                        <p>Humidity: {weatherData?.main.humidity}%</p>

                        <p>Condition: {weatherData?.weather[0].main}</p>

                        <p>Wind: {weatherData?.wind.speed} m/s</p>
                    </>
                )
            }
        </div>
    )
}

export default Weather