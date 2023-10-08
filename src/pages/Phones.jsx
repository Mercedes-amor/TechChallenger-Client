import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PhoneDetails from "../pages/PhoneDetails";

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

  const handleShowDetails = (phoneId) => {
    setIsDetailsShowing(phoneId);
  };

  if (isLoading) {
    return <h3>cargando</h3>;
  }

  return (
    <div>
      {allPhonesList.map((eachPhone) => {
        return (
          <div key={eachPhone.id}>
            <p>{eachPhone.name}</p>
           
            {isDetailsShowing === eachPhone.id ? (
              <PhoneDetails phoneId={eachPhone.id} setIsDetailsShowing={setIsDetailsShowing}/>
            ) : (
              <button onClick={() => handleShowDetails(eachPhone.id)}>
                Mostrar detalles
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}