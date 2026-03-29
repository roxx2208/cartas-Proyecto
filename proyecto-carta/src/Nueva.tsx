import { useState } from "react"; 
import type { ICarta } from "./componentes/index";
import { useNavigate } from "react-router"; 

const Nueva = ({ onCrear }: { onCrear: (carta: ICarta) => void }) => {
    // Hook para poder saltar de una página a otra (Navegación)
    const navigate = useNavigate(); 
    
    // ESTADO LOCAL: Objeto que guarda temporalmente lo que el usuario escribe en los inputs
    const [formData, setFormData] = useState<ICarta>({
        numero: Math.floor(Math.random() * 1000), // Generamos un ID al azar para la nueva carta
        nombre: '',
        tipo: '',
        defensa: 0,
        descripcion: '',
        imagen: '',
        ataque: 0,
        vida: 0,
        onClick: () => {}, // Funciones vacías por defecto para cumplir con la interfaz
        deleteCar: () => {}
    });

    // Función que se activa al dar clic en "Guardar Mob"
    const manejarEnvio = () => {
        
        // VALIDACIÓN: Si el nombre está vacío, mostramos alerta y detenemos el proceso
        if(formData.nombre.trim() === "") {
            alert("¡Ponle un nombre al mob!");
            return;
        }

        // ENVIAR DATOS: Llamamos a la función onCrear que nos pasó el componente Padre (App)
        onCrear(formData);

        // NAVEGACIÓN: Una vez creada la carta, regresamos automáticamente al Home ("/")
        navigate("/"); 
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6 text-green-700">Crear Nuevo Mob de Minecraft</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                {/* INPUT NOMBRE: Cada cambio actualiza solo la propiedad 'nombre' del estado */}
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del Mob</label>
                <input
                    type="text"
                    placeholder="Ej: Enderman"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="border border-gray-300 rounded px-3 py-2 w-full mb-4 focus:ring-2 focus:ring-green-500 outline-none"
                />

                {/* INPUT TIPO: Neutral, Hostil, etc. */}
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                <input
                    type="text"
                    placeholder="Ej: Neutral / Hostil"
                    value={formData.tipo}
                    onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                    className="border border-gray-300 rounded px-3 py-2 w-full mb-4 focus:ring-2 focus:ring-green-500 outline-none"
                />

                {/* GRID PARA ATRIBUTOS NUMÉRICOS */}
                <div className="grid grid-cols-3 gap-2">
                    <div>
                        <label className="block text-xs font-bold text-gray-500">Ataque</label>
                        <input 
                            type="number"
                            value={formData.ataque}
                            // Convertimos el valor de texto a número antes de guardarlo
                            onChange={(e) => setFormData({ ...formData, ataque: Number(e.target.value) })}
                            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500">Defensa</label>
                        <input
                            type="number"
                            value={formData.defensa}
                            onChange={(e) => setFormData({ ...formData, defensa: Number(e.target.value) })}
                            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500">Vida</label>
                        <input 
                            type="number"
                            value={formData.vida}
                            onChange={(e) => setFormData({ ...formData, vida: Number(e.target.value) })}
                            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                        />
                    </div>
                </div>

                {/* TEXTAREA PARA LA DESCRIPCIÓN LARGA */}
                <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                <textarea
                    placeholder="¿Qué hace este mob?"
                    value={formData.descripcion}
                    onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                    className="border border-gray-300 rounded px-3 py-2 w-full mb-4 h-24"
                />

                {/* INPUT PARA LA IMAGEN (URL) */}
                <label className="block text-sm font-medium text-gray-700 mb-1">URL de Imagen</label>
                <input
                    type="text"
                    placeholder="https://link-de-la-imagen.png"
                    value={formData.imagen}
                    onChange={(e) => setFormData({ ...formData, imagen: e.target.value })}
                    className="border border-gray-300 rounded px-3 py-2 w-full mb-6"
                />

                <div className="flex gap-2">
                    {/* BOTÓN DE ENVÍO: Dispara la función manejarEnvio */}
                    <button
                        onClick={manejarEnvio}
                        className="flex-1 bg-green-600 text-white font-bold px-4 py-2 rounded hover:bg-green-700 transition-colors shadow-md"
                    >
                        Guardar Mob
                    </button>
                    {/* BOTÓN CANCELAR: Solo nos regresa al Home sin hacer nada */}
                    <button
                        onClick={() => navigate("/")}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Nueva;