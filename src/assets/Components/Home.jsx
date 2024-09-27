import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavBar from "./Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);
  const location = useLocation();
  const navigate = useNavigate();

  // Function to fetch movies based on the search query
  const fetchMovies = async (query) => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${query}&apikey=a44d7000`
    );
    const finalData = await response.json();
    if (finalData.Search) {
      setMovies(finalData.Search);
      localStorage.setItem("movies", JSON.stringify(finalData.Search));
    } else {
      setMovies([]);
    }
  };

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchMovies(search);
    navigate(`?search=${search}`);
  };

  // Load movies from localStorage or URL on component mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("search");

    if (query) {
      setSearch(query);
      fetchMovies(query);
    } else {
      const savedMovies = localStorage.getItem("movies");
      if (savedMovies) {
        setMovies(JSON.parse(savedMovies));
      }
    }
  }, [location.search]);

  // Get current movies for the current page
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  return (
    <>
      <NavBar />
      <Form
        className="d-flex mt-5 justify-content-center"
        onSubmit={handleSearch}
      >
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search movie here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      <div
        className="d-flex flex-wrap mt-3 pt-3 ms-5"
        style={{ fontFamily: "Droid Sans" }}
      >
        {currentMovies.length > 0 ? (
          currentMovies.map((val) => (
            <Card
              key={val.imdbID}
              onClick={() => navigate(`/movie/${val.imdbID}`)}
              style={{ width: "18rem", margin: "10px" }}
            >
              <Card.Img
                variant="top"
                src={val.Poster}
                alt={`${val.Title} Poster`}
              />
              <Card.Body style={{ backgroundColor: "#ffffff" }}>
                <Card.Title>
                  {val.Title}({val.Year})
                </Card.Title>
                {/* <Button
                  variant="primary"
                  className="card-button"
                  onClick={() => navigate(`/movie/${val.imdbID}`)} // Navigate to the MovieDetail component
                >
                  Details
                </Button> */}
              </Card.Body>
            </Card>
          ))
        ) : (
          <p style={{ color: "white" }}>No movies found</p>
        )}
      </div>
      <div className="d-flex justify-content-center mt-3">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
            style={{ margin: "0 5px" }}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </>
  );
}

export default Home;
