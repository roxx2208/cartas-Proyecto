import { Route, Routes } from "react-router";
import Home, { type ICarta } from "./pages/Home";
import Nueva from "./Nueva";
import { useState } from "react";

const defaultCartas :ICarta[] = [
  {
    numero: 1,
    nombre: 'Creeper',
    tipo: 'Explosivo',
    ataque: 1000,
    defensa: 8,
    vida: 8,
    descripcion: 'Mata de una, no te confíes',
    imagen:'https://www.pngarts.com/files/10/Creeper-PNG-Picture.png',
  },
  {
    numero: 2,
    nombre: 'Esqueleto',
    tipo: 'Rango',
    ataque: 3,
    defensa: 7,
    vida: 10,
    descripcion: 'Rango medio, el daño depende del arco que tenga',
    imagen: 'https://minecraft.wiki/images/thumb/Skeleton_Aiming_JE2_BE3.png/150px-Skeleton_Aiming_JE2_BE3.png',
  },
  {
    numero: 3,
    nombre: 'Zombie',
    tipo: 'Cuerpo a cuerpo',
    ataque: 5,
    defensa: 7,
    vida: 10, 
    descripcion: 'El daño depende del arma que porte',
    imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9G12oHwEP065-Jc_QA1G49MfV5f4AuwsFw&s',
  },
];
function App() {
  const [cartas,setCartas] = useState<ICarta[]>(defaultCartas)
  const onCrear= (carta: ICarta)=>{
      setCartas([...cartas,carta])
  }

  function eliminarCarta (numero:number){
    const nuevasCartas = cartas.filter(carta => carta.numero !== numero); 
    setCartas(nuevasCartas);
  }
  
  return (
    
    <Routes>  
      <Route path="/" element={<Home cartas={cartas} />} />
    <Route path = "/Nueva" element={<Nueva onCrear={onCrear} />} />
    </Routes>

  );
};

export default App;