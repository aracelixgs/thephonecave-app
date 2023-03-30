import { useState, useEffect } from "react"

import { getPhonesService } from "../services/phones.services";

function PhoneList() {

  const [phones, setPhones ] = useState(null);

  useEffect(() => {
    getDataPhones();
  }, []);

  const getDataPhones = async () => {
    try {
      const response = getPhonesService();
      console.log(response.data)
      setPhones(response.data)
    } catch(error) {
      console.log(error)
    }
  };


  return (
    <div>
        <h1>LISTA DE TELÉFONOS</h1>
    </div>
  )
}

export default PhoneList