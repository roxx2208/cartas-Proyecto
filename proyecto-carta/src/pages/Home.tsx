import { useState } from "react";
import Carta from "../componentes/carta";
import type { ICarta } from "../componentes/index";

const Home = ({ 
  cartas, 
  onBorrar, 
  onEditar 
}: { 
  cartas: ICarta[], 
  onBorrar: (n: number) => void, 
  onEditar: (c: ICarta) => void 
}) => {
  // ESTADO: Guarda la descripción de la carta seleccionada para mostrarla en un modal
  const [descripcionSeleccionada, setDescripcionSeleccionada] = useState<string | null>(null);
  
  // ESTADO: Guarda el objeto completo de la carta que el usuario decidió editar
  const [cartaEnEdicion, setCartaEnEdicion] = useState<ICarta | null>(null);

  // FUNCIÓN: Se ejecuta al presionar "Guardar Cambios" en el modal de edición
  const guardarCambios = () => {
    if (cartaEnEdicion) {
      onEditar(cartaEnEdicion); // Llama a la función del padre (App.tsx) para actualizar la API
      setCartaEnEdicion(null);  // Cierra el modal de edición limpiando el estado
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 p-8 text-white">
      <h1 className="text-4xl font-bold text-center text-green-500 mb-10">
        Cartas de Minecraft
      </h1>

      {/* RENDERIZADO DINÁMICO: Usamos .map para crear un componente <Carta /> por cada elemento en el array */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cartas.map((carta) => (
          <Carta
            key={carta.numero} // "key" es obligatorio en React para identificar elementos de forma única
            {...carta}        // SPREAD OPERATOR: Pasa todas las propiedades de la carta como props automáticamente
            onClick={() => setDescripcionSeleccionada(carta.descripcion)} // Al hacer clic, guarda la descripción
            deleteCar={() => onBorrar(carta.numero)} // Pasa la acción de borrar al hijo
            onEdit={() => setCartaEnEdicion(carta)}  // Al dar clic en editar, guarda la carta actual en el estado
          />
        ))}
      </div>

      {/* MODAL DE EDICIÓN: Solo se muestra si "cartaEnEdicion" tiene datos (Renderizado Condicional) */}
      {cartaEnEdicion && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-white text-black p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-green-700">Editar Mob: {cartaEnEdicion.nombre}</h2>
            
            <label className="block text-sm font-bold mb-1">Nombre</label>
            <input 
              className="w-full border p-2 mb-3 rounded"
              value={cartaEnEdicion.nombre}
              // INPUT CONTROLADO: Actualizamos el estado "cartaEnEdicion" conforme el usuario escribe
              onChange={(e) => setCartaEnEdicion({...cartaEnEdicion, nombre: e.target.value})}
            />

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div>
                <label className="block text-xs font-bold">Vida</label>
                <input type="number" className="w-full border p-2 rounded"
                  value={cartaEnEdicion.vida}
                  onChange={(e) => setCartaEnEdicion({...cartaEnEdicion, vida: Number(e.target.value)})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold">Ataque</label>
                <input type="number" className="w-full border p-2 rounded"
                  value={cartaEnEdicion.ataque}
                  onChange={(e) => setCartaEnEdicion({...cartaEnEdicion, ataque: Number(e.target.value)})}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button onClick={guardarCambios} className="flex-1 bg-green-600 text-white py-2 rounded font-bold">
                Guardar Cambios
              </button>
              <button onClick={() => setCartaEnEdicion(null)} className="flex-1 bg-gray-300 py-2 rounded">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE DETALLE: Se muestra solo si el usuario hizo clic para ver la descripción */}
      {descripcionSeleccionada && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-40">
          <div className="bg-white text-black p-6 rounded-lg max-w-sm">
            <p>{descripcionSeleccionada}</p>
            <button 
              onClick={() => setDescripcionSeleccionada(null)}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
      
      {/* NAVEGACIÓN: Botón flotante para ir a la página de creación */}
      <a href="/Nueva" className="fixed bottom-8 right-8 bg-green-600 p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
        ➕ Crear Nueva
      </a>
    </div>
  );
};

export default Home;

