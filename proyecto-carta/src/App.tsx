import { Route, Routes } from "react-router";
import Nueva from "./Nueva";
import Home from "./pages/Home";
import { useState } from "react";
import type { ICarta } from "./componentes";

function App() {
  const [cartas, setCartas] = useState<ICarta[]>([]);

  const onCrear = (nuevaCarta: ICarta) => {
    setCartas([...cartas, nuevaCarta]);
    
  };

  return (
    <Routes>
      
      <Route path="/" element={<Home/>} /> 
      <Route path="/Nueva" element={<Nueva onCrear={onCrear} />} />
    </Routes>
  );
}
export default App;