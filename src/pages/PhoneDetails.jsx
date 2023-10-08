import { useEffect, useState } from "react";
import axios from "axios";

//Bootstrap
import Spinner from "react-bootstrap/Spinner";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Phones(props) {
  const { phoneId, setIsDetailsShowing } = props;
  const [phoneDetails, setPhoneDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/api/phones/${phoneId}`
      );

      setPhoneDetails(response.data);
      setIsLoading(false);
    } catch (error) {}
  };
  const dontShowDetails = () => {
    setIsDetailsShowing(null);
  };

  if (isLoading) {
    return <Spinner animation="border" className="spinnerColor" />;
  }

  return (
    <div className="divContainer">
       <Card className="cardDetails">
      <Card.Img
        variant="top"
        src={`http://localhost:5173/src/assets/${phoneDetails.imageFileName}`}
        alt="PhoneImg"
        width={300}
      />
    
      <Card.Title className="title">{phoneDetails.name}</Card.Title>
     
      <ListGroup className="listGroup">
        <ListGroup.Item className="item">
         <b>Manufacturer:</b> {phoneDetails.manufacturer}
        </ListGroup.Item>
        <ListGroup.Item className="item">
          <b>Description:</b> {phoneDetails.description}
        </ListGroup.Item>
        <ListGroup.Item className="item">
          <b>Screen:</b> {phoneDetails.screen}
        </ListGroup.Item>
        <ListGroup.Item className="item">
          <b>Processor:</b> {phoneDetails.processor}
        </ListGroup.Item>
        <ListGroup.Item className="item">
          <b>Ram:</b> ram {phoneDetails.ram}
        </ListGroup.Item>
        <ListGroup.Item className="item">
          <b>Color:</b> {phoneDetails.color}
        </ListGroup.Item>
        <ListGroup.Item className="item">
          <b>Price:</b> {phoneDetails.price}
        </ListGroup.Item>
      </ListGroup>

        <button className="btn-close" onClick={dontShowDetails}>
          Close Details
        </button>

    
    </Card> 
    </div>
    
  );
}
