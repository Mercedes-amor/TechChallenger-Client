
import { Route, Routes } from "react-router-dom";
import './App.css'
import Phones from "./pages/Phones";
import PhoneDetails from "./pages/PhoneDetails";

function App() {
 

  return (
   <>

<Routes>
<Route path="/" element={<Phones />} />
<Route path="phone/details/:id" element={<PhoneDetails />} />

</Routes>
</>

  )
}

export default App
