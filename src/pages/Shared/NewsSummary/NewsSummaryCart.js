import React from 'react';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import Image from "react-bootstrap/Image";
import { FaShareAlt,FaStar,FaEye, FaRegBookmark} from "react-icons/fa";
const NewsSummaryCart = ({news}) => {
    const {title, _id,rating, author, details, image_url, total_view} = news;
    return (
      <Card className="mb-5">
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <div className='d-flex'>
            <Image
              roundedCircle
              className='me-3'
              src={author.img}
              style={{ height: "60px" }}
            ></Image>
            <div>
                <p className='mb-0'>{author.name} </p>
                <p>{author.published_date} </p>
            </div>
          </div>
          <div>
           <FaShareAlt className='me-2'></FaShareAlt>
            <FaRegBookmark> </FaRegBookmark>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 200 ? (
              <p>
                {details.slice(0, 250) + "..."}
                <Link to={`/news/${_id}`}>Read more</Link>
              </p>
            ) : (
              <p>{details} </p>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
            <div>
                <FaStar className='text-warning'></FaStar>
                <span> {rating.number}</span>
            </div>
            <div>
                <FaEye></FaEye>
                <span> {total_view}</span>
            </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsSummaryCart;