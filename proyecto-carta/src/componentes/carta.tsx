import type { ICarta } from "../componentes/index";


interface CartaProps extends ICarta {
  onEdit: () => void;
}

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
  deleteCar,
  onEdit
}: CartaProps) => {

  return (
    <div className="w-64 bg-white rounded-lg shadow-md border border-gray-300 overflow-hidden">
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-48 object-contain rounded-t-lg hover:scale-105 transition-transform"
      />

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-800">{nombre}</h3>
          <span className="text-blue-500 text-sm">#{numero}</span>
        </div>

        <div className="mb-3 text-sm">
          <span className="text-gray-600">Tipo: </span>
          <span className="font-medium text-blue-600">{tipo}</span>
        </div>

        
        <div className="flex justify-between mb-3 border-b pb-3 text-center">
          <div>
            <div className="text-lg font-bold text-red-600">{ataque}</div>
            <div className="text-xs text-gray-500">Ataque</div>
          </div>
          <div>
            <div className="text-lg font-bold text-blue-600">{defensa}</div>
            <div className="text-xs text-gray-500">Defensa</div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-600">{vida}</div>
            <div className="text-xs text-gray-500">Vida</div>
          </div>
        </div>

        <p className="text-gray-700 text-xs mb-4 h-10 overflow-y-auto">
          {descripcion}
        </p>

        
        <div className="flex flex-col gap-2">
          <button
            onClick={onClick}
            className="w-full py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600"
          >
            Ver detalle
          </button>
          
          <div className="flex gap-2">
            <button
              onClick={onEdit}
              className="flex-1 py-2 bg-yellow-500 text-white rounded-lg text-sm font-medium hover:bg-yellow-600"
            >
              Editar
            </button>
            <button
              onClick={deleteCar}
              className="flex-1 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600"
            >
              Borrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carta;