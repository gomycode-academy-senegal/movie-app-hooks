import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { moviesList } from "../assets/mookData";
import Rate from "./Rate";
import { Card, CardTitle, CardImg, CardBody, CardText } from "reactstrap";

const MovieItem = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const fetchData = async () => {
    const items = await moviesList[id - 1]
    setMovie(items)
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="col-4 mt-2">
      <Card style={{ height: `500px` }}>
        <CardTitle>
          <div className="row justify-content-center mt-2">
            <h6>{movie.title}</h6>
          </div>
        </CardTitle>
        <CardImg
          top
          width="100%"
          style={{ height: `300px` }}
          src={movie.posterUrl}
          alt="Card image cap"
        />
        <CardBody>
          <div className="row">
            <CardText>{movie.description}</CardText>
          </div>
          <div className="row">
            <Rate rating={movie.rate} />
          </div>
        </CardBody>
      </Card>
    </div>
    </>
  );
};

export default MovieItem;
