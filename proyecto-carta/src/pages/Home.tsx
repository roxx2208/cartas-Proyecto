import { useState } from "react";
import Carta from "../componentes/carta";
import ModalCarta from "../componentes/ModalCarta";
import Nueva from "../Nueva";
import { Link } from "react-router";

export interface ICarta  {
   numero: number;
    nombre: string;
    tipo: string;
    ataque: number;
    defensa: number;
    descripcion: string;
    imagen: string;
    vida: number;
}




const Home = ({cartas}: {cartas: ICarta[]}) => {
    const [descripcionSeleccionada, setDescripcionSeleccionada] = useState<string|null>(null);

    

    return (
        <div className="min-h-screen bg-[url('https://i.pinimg.com/736x/40/e3/d7/40e3d7e9b30eae60489fdb0c0fbc37ed.jpg')] bg-cover bg-no-repeat p-6">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
        Cartas de Minecraft
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto hover:transition-all hover:scale-105">
        {cartas.map((carta) => (
          <Carta key={carta.numero} {...carta} 
          onClick={()=>setDescripcionSeleccionada(carta.descripcion) }/>

        ))}
      </div>
      <ModalCarta isOpen={descripcionSeleccionada !== null} onClose={() => setDescripcionSeleccionada(null)} contenido={descripcionSeleccionada || ""} />
        <Link to="/Nueva" className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-colors">
        Crear Nueva Carta
      </Link>
     


    </div>
    )
}

export default Home