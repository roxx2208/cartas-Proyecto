import { Route, Routes } from "react-router";
import type { ICarta } from "./componentes/index";
import Nueva from "./Nueva";
import { useState, useEffect } from "react";
import Home from "./pages/Home";

const API_URL = import.meta.env.VITE_EDUCA_API_URL;

function App() {
  const [cartas,setCartas] = useState<ICarta[]>([]);
  const onCrear= (carta: ICarta)=>{
      setCartas([...cartas,carta])
  }

  function nuevasCartas (numero:number){
    const nuevasCartas = cartas.filter(carta => carta.numero !== numero); 
    setCartas(nuevasCartas);
  }


  const fetchCartas = async () => {
    try {                              
      console.log('Fetching cartas from backend...');
      const response = await fetch('http://localhost:3000/cartas');
      const data = await response.json();
      setCartas(data);
    } catch (error) {
      console.error('Error fetching cartas:', error);
    }
  };

  useEffect(() => {
    fetchCartas();
  }, []);



















  return (
    
    <Routes>  
      <Route path="/" element={<Home carta={cartas} eliminarCarta={nuevasCartas}  />} />
    <Route path = "/Nueva" element={<Nueva onCrear={onCrear} />} />
    </Routes>

  );
};

export default App;