




import Carta from './componentes/carta';
import ModalCarta from './componentes/ModalCarta';
import { useState } from 'react';

const cartas = [
  {
    numero: 1,
    nombre: 'Creeper',
    tipo: 'Explosivo',
    ataque: 1000,
    defensa: 8,
    descripcion: 'Mata de una, no te confíes',
    imagen:
      'https://www.pngarts.com/files/10/Creeper-PNG-Picture.png',
  },
  {
    numero: 2,
    nombre: 'Esqueleto',
    tipo: 'Rango',
    ataque: 3,
    defensa: 7,
    descripcion: 'Rango medio, el daño depende del arco que tenga',
    imagen:
      'https://minecraft.wiki/images/thumb/Skeleton_Aiming_JE2_BE3.png/150px-Skeleton_Aiming_JE2_BE3.png',
  },
  {
    numero: 3,
    nombre: 'Zombie',
    tipo: 'Cuerpo a cuerpo',
    ataque: 5,
    defensa: 7,
    descripcion: 'El daño depende del arma que porte',
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9G12oHwEP065-Jc_QA1G49MfV5f4AuwsFw&s',
  },
];

function App() {
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

    </div>

  );
}

export default App;