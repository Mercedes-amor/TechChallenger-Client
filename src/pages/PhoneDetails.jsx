import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


export default function Phones(props) {
    
   const {phoneId, setIsDetailsShowing} = props
    const [phoneDetails, setPhoneDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    getData()
},[])


const getData = async () => {
    try {
        
const response = await axios.get(`http://localhost:5005/api/phones/${phoneId}`)

setPhoneDetails(response.data)
setIsLoading(false)
    } catch (error) {
        
    }
}
const dontShowDetails = () => {
    setIsDetailsShowing(null)
}


if (isLoading) {
    return <h3>cargando</h3>
  }

  return (
    <div>

<p>Manufacturer: {phoneDetails.manufacturer}</p>
<p>Description:{phoneDetails.description}</p>
<p>Screen: {phoneDetails.screen}</p>
<p>Processor {phoneDetails.processor}</p>
<p>Ram ram {phoneDetails.ram}</p>
<p>Color: {phoneDetails.color}</p>
<p>Price: {phoneDetails.price}</p>
<img src={`http://localhost:5173/src/assets/${phoneDetails.imageFileName}`} alt="phoneImg" width={200}/>
<br />
<button onClick={dontShowDetails} >Close Details</button>





    </div>
  )
}