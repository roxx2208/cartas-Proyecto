import { Route, Routes } from "react-router";
import Nueva from "./Nueva";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import type { IapiCart, ICarta } from "./componentes";
import { ToCardApiMapper, ToApiCardMapper } from "./componentes/index";
import SeleccionarCartas from "./componentes/SeleccionarCartas";



// Obtenemos la URL de la API desde las variables de entorno
const API_URL = import.meta.env.VITE_EDUCA_API_URL;

function App() {
  // ESTADO: Aquí guardamos la lista de cartas que se mostrarán en la app
  const [cartas, setCartas] = useState<ICarta[]>([]);

  // FUNCIÓN FETCH (READ): Obtiene todas las cartas de la base de datos
  const fetchCartas = async () => {
    try {
      console.log('Cargando cartas...');
      const response = await fetch(`${API_URL}/card`, {
        headers: {
          'usersecretpasskey': "Roxe572975EL" // Clave de seguridad para la API
        }
      });

      const data = await response.json() as { data: IapiCart[] };
      if (data && data.data) {
        // MAPPER: Convertimos los datos que vienen de la API al formato que usa nuestra App
        const cartasMapper: ICarta[] = data.data.map(ToCardApiMapper);
        setCartas(cartasMapper); // Guardamos las cartas en el estado
      }
    } catch (error) {
      console.error('Error al obtener las cartas:', error);
    }
  };

  // FUNCIÓN CREAR (CREATE): Envía una nueva carta a la API
  const onCrear = async (nuevaCarta: ICarta) => {
    try {
      // Convertimos los datos de nuestra App al formato que espera la API
      const apiCard = ToApiCardMapper(nuevaCarta);
      const response = await fetch(`${API_URL}/card`, {
        method: 'POST', // Método POST para crear nuevos registros
        headers: {
          'Content-Type': 'application/json',
          'usersecretpasskey': "Roxe572975EL"
        },
        body: JSON.stringify(apiCard) // Enviamos la carta como texto JSON
      });

      if (response.ok) {
        console.log("¡Carta creada con éxito!");
        await fetchCartas(); // Recargamos la lista para ver la nueva carta
      }
    } catch (error) {
      console.error("Error en la conexión al crear:", error);
    }
  };

  // FUNCIÓN BORRAR (DELETE): Elimina una carta usando su número identificador
  const onBorrar = async (numero: number) => {
    try {
      const response = await fetch(`${API_URL}/card/${numero}`, {
        method: 'DELETE', // Método DELETE para borrar
        headers: {
          'usersecretpasskey': "Roxe572975EL"
        }
      });

      if (response.ok) {
        console.log("Carta eliminada");
        // Filtramos el estado actual para quitar la carta visualmente de inmediato
        setCartas(cartas.filter(c => c.numero !== numero));
      }
    } catch (error) {
      console.error("Error al borrar:", error);
    }
  };

  // FUNCIÓN EDITAR (UPDATE): Actualiza la información de una carta existente
  const onEditar = async (carta: ICarta) => {
    try {
      // Hacemos la petición a la URL específica de esa carta (/card/numero)
      const response = await fetch(`${API_URL}/card/${carta.numero}`, {
        method: 'PATCH', // Método PATCH para actualizaciones parciales
        headers: {
          'Content-Type': 'application/json',
          'usersecretpasskey': "Roxe572975EL"
        },
        body: JSON.stringify(ToApiCardMapper(carta)) // Enviamos los datos actualizados
      });

      if (response.ok) {
        console.log("¡Carta actualizada correctamente!");
        await fetchCartas(); // Recargamos la lista para ver los cambios
      } else {
        console.error("Error al actualizar la carta:", response.statusText); 
      }
    } catch (error) {
      console.error("Error de conexión al editar:", error);
    }
  };

  // USEEFFECT: Ejecuta la carga de cartas una sola vez cuando se abre la App
  useEffect(() => {
    fetchCartas();
  }, []);

  return (
    // RUTAS: Definimos la navegación de la aplicación
    <Routes>
      <Route 
        path="/" 
        element={
          <Home 
            cartas={cartas} 
            onBorrar={onBorrar} 
            onEditar={onEditar} 
          />
        } 
      />
      <Route
         path="/Seleccionar-Cartas" element={<SeleccionarCartas mazo={cartas} />}  />
     


        
      

        
        



      <Route path="/Nueva" element={<Nueva onCrear={onCrear} />} />
    </Routes>

  );
}

export default App;