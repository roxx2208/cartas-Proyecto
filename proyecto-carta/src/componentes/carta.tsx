import type { ICarta } from "../componentes/index";
const Carta = ({
  ataque,
  defensa,
  descripcion,
  imagen,
  nombre,
  vida,
  numero,
  tipo,
  onClick,
  deleteCar
}: ICarta) => {

  return (
    
    <div className="w-64 bg-white rounded-lg shadow-md border border-gray-300 "   >
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-48 object-contain rounded-t-lg hover:transition-all hover:scale-105"
      />

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-800">{nombre}</h3>
          <span className="text-blue-500 text-sm">#{numero}</span>
        </div>

        <div className="mb-3">
          <span className="text-gray-600">Tipo: </span>
          <span className="font-medium text-blue-600">{tipo}</span>
        </div>

        <div className="flex gap-4 mb-3">
          <div className="text-center">
            <div className="text-lg font-bold text-red-600">{ataque}</div>
            <div className="text-sm text-gray-600">Ataque</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">{defensa}</div>
            <div className="text-sm text-gray-600">Defensa</div>
          </div>
        </div>
        <div className="flex gap-4 mb-3">
          <div className="text-center">
            <div className="text-lg font-bold text-red-600">{vida}</div>
            <div className="text-sm text-gray-600">Vida</div>
          </div>

        <p className="text-gray-700 text-sm border-t pt-3">
          {descripcion}
        </p>

        
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={onClick}
          className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 transition-colors"
        >
          Ver detalle
        </button>
        <button
          onClick={deleteCar}
          className="flex-1 px-3 py-2 bg-red-500 text-white rounded-lg shadow-sm hover:bg-red-600 transition-colors"
        >
          Borrar
        </button>
      </div>
    </div>
    </div>
  );
}

export default Carta;