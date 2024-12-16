import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaMapMarkerAlt } from "react-icons/fa"; // For location icon
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function CardRumah({ image, city, project, description }) {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle button click and navigate to /rumah
  const handleButtonClick = () => {
    navigate("/rumah");
  };

  return (
    <div className="d-flex justify-content-center my-4"> {/* Wrapper div to center the card */}
      <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
        {/* Card Image */}
        <Card.Img variant="top" src={image} style={{ height: '180px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold' }}>
            <FaMapMarkerAlt style={{ color: '#211951' }} />{' '}
            <span style={{ fontSize: '1.25rem', color: '#211951' }}>{city}</span>
          </Card.Title>
          <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>{project}</h5>
          <Card.Text style={{ fontSize: '0.9rem', color: '#6c757d' }}>
            {description}
          </Card.Text>
          <Button
            variant="outline-dark"
            style={{ color: '#211951', borderColor: '#211951', borderRadius: '20px', padding: '5px 20px' }}
            onClick={handleButtonClick} // Add onClick to navigate
          >
            Read More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardRumah;
