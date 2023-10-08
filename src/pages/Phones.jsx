import { useEffect, useState } from "react";
import axios from "axios";
import PhoneDetails from "../pages/PhoneDetails";

//Bootstrap
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export default function Phones() {
  const [allPhonesList, setAllPhonesList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDetailsShowing, setIsDetailsShowing] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/phones");

      setAllPhonesList(response.data);
      setIsLoading(false);
    } catch (error) {}
  };

  const handleShowDetails = (eachPhoneId) => {
    setIsDetailsShowing(eachPhoneId);
  };

  if (isLoading) {
    return <Spinner animation="border" className="spinnerColor" />;
  }

  return (
    <div>
      {allPhonesList.map((eachPhone) => {
        return (
          <div key={eachPhone.id}>
            {isDetailsShowing === eachPhone.id ? (
              <PhoneDetails
                phoneId={eachPhone.id}
                setIsDetailsShowing={setIsDetailsShowing}
              />
            ) : (
              <Button variant="primary" onClick={() => handleShowDetails(eachPhone.id)}>
                {eachPhone.name}
              </Button>
            )}
          </div>
        );
      })}
    </div>
  );
}
