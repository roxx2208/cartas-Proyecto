import { useState } from "react"; 
import type { ICarta } from "./pages/Home";
const Nueva = ({onCrear}: {onCrear: (carta: ICarta) => void}) => {
    const [formData, setFormData] = useState<ICarta>({
        numero: 0,
        nombre: '',
        tipo: '',
        defensa: 0,
        descripcion: '',
        imagen: '',
        ataque:0
    });

    return(
    <div>
        <div className="">
            <input
            type="text"
            required
            placeholder="mobs"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            />
            <input
            type="text"
            required
            placeholder="tipo"
            value={formData.tipo}
            onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            />
            <input 
            type="number"
            required
            placeholder="ataque"
            value={formData.ataque}
            onChange={(e)=>setFormData({...formData, ataque: Number(e.target.value)})}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            />
            <input
            type="number"
            required
            placeholder="defensa"
            value={formData.defensa}
            onChange={(e) => setFormData({ ...formData, defensa: Number(e.target.value) })}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            />
            <input
            type="text"
            placeholder="descripcion"
            value={formData.descripcion}
            onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            />
            <input
            type="text"
            placeholder="https://www.pngarts.com/files/10/Creeper-PNG-Picture.png"
            value={formData.imagen}
            onChange={(e) => setFormData({ ...formData, imagen: e.target.value })}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            />
            <button
            onClick={() => onCrear(formData)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
            Crear Carta
            </button>
            </div>
    
        
    
        
    </div>
    )
}

   
    

export default Nueva; 
