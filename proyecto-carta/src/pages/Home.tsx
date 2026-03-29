import { useState, useEffect } from "react";
import Carta from "../componentes/carta";
import ModalCarta from "../componentes/ModalCarta";
import type { ICarta } from "../componentes/index";
import { Link } from "react-router";


const API_URL = import.meta.env.VITE_EDUCA_API_URL;

const Home = () => {
  
  const [cartas, setCartas] = useState<ICarta[]>([]);
  const [descripcionSeleccionada, setDescripcionSeleccionada] = useState<string | null>(null);

  
  const fetchCartas = async () => {
    try {
      console.log('Cargando cartas desde el backend...');
      const response = await fetch(`${API_URL}/card`, {
        headers: {
          usersecretpasskey: "Roxel572975el"
        }
      });
      const data = await response.json();
      setCartas(data);
    } catch (error) {
      console.error('Error al obtener las cartas:', error);
    }
  };

  
  const eliminarCarta = (numero: number) => {
    const nuevas = cartas.filter(carta => carta.numero !== numero);
    setCartas(nuevas);
  };

  
  useEffect(() => {
    fetchCartas();
  }, []);

  
  return (
    <div className="min-h-screen bg-[url('https://i.pinimg.com/736x/40/e3/d7/40e3d7e9b30eae60489fdb0c0fbc37ed.jpg')] bg-cover bg-no-repeat p-6">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
        Cartas de Minecraft
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {cartas.map((carta) => (
  <Carta
    key={carta.numero}
    {...carta}
    onClick={() => setDescripcionSeleccionada(carta.descripcion)}
    deleteCar={() => eliminarCarta(carta.numero)}
    onEdit={() => console.log("Editando...", carta.numero)} 
  />
))}
      </div>

      
      <ModalCarta 
        isOpen={descripcionSeleccionada !== null} 
        onClose={() => setDescripcionSeleccionada(null)} 
        contenido={descripcionSeleccionada || ""} 
      />

      
      <Link to="/Nueva" className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110">
        Crear Nueva Carta
      </Link>
    </div>
  );
};

export default Home;