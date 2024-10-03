import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavBar from "./Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        "https://www.omdbapi.com/?s=harry&apikey=a44d7000"
      );
      const finalData = await response.json();
      console.log(finalData);
      if (finalData.Search) {
        setMovies(finalData.Search); // Access the Search array for multiple movies
      }
    };
    fetchMovie();
  }, []);

  return (
    <>
      <NavBar />
      <Form inline className="d-flex justify-content-center">
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      <div className="d-flex flex-wrap mt-3 pt-3 ms-5">
        {movies.length > 0 ? (
          movies.map((val) => {
            return (
              <Card key={val.imdbID} style={{ width: "18rem", margin: "10px" }}>
                <Card.Img
                  variant="top"
                  src={val.Poster}
                  alt={`${val.Title} Poster`}
                />
                <Card.Body>
                  <Card.Title>
                    {val.Title} ({val.Year})
                  </Card.Title>

                  <Button variant="primary">Details</Button>
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </>
  );
}

export default MovieList;
