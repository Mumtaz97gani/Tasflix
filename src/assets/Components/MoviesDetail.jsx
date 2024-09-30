import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavBar from "./Navbar"; // Assuming you have a NavBar component

function MovieDetail() {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch movie details
  const fetchMovieDetails = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=a44d7000`
    );
    const data = await response.json();
    setMovie(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovieDetails();
  });

  if (loading) {
    return <p style={{ color: "#ffffff" }}>Loading...</p>;
  }

  if (!movie || movie.Response === "False") {
    return <p style={{ color: "#ffffff" }}>No movie details found.</p>;
  }

  return (
    <>
      <NavBar />
      <div className="d-flex justify-content-center mt-3 alignitems-center">
        <Card
          className="card-detail"
          style={({ width: "40rem" }, { fontFamily: "Droid Sans" })}
        >
          <Card.Img
            className="card-detaili-image"
            variant="top"
            src={movie.Poster}
            alt={`${movie.Title} Poster`}
          />
          <Card.Body>
            <Card.Title>
              {movie.Title} ({movie.Year})
            </Card.Title>
            <Card.Text>
              <strong>Director:</strong> {movie.Director}
              <br />
              <strong>Genre:</strong> {movie.Genre}
              <br />
              <strong>Plot:</strong> {movie.Plot}
              <br />
              <strong>Rating:</strong> {movie.imdbRating}
              <br />
              <strong>Language:</strong> {movie.Language}
              <br />
              <strong>Awards:</strong> {movie.Language}
              <br />
              <strong>Country:</strong> {movie.Country}
              <br />
              <strong>Metascore:</strong> {movie.Metascore}
              <br />
              <strong>Runtime:</strong> {movie.Runtime}
              <br />
              <strong>Awards:</strong> {movie.Language}
            </Card.Text>
            <Button
              className="button"
              variant="primary"
              onClick={() => window.history.back()}
            >
              Back
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default MovieDetail;
