type Props = {
  numero: number;
  nombre: string;
  tipo: string;
  ataque: number;
  defensa: number;
  descripcion: string;
  imagen: string;
  natural?: string;
  onClick?: () => void;
};

function Carta({
  ataque,
  defensa,
  descripcion,
  imagen,
  nombre,
  numero,
  tipo,
  natural,
  onClick
}: Props) {
  return (
    
    <div className="w-64 bg-white rounded-lg shadow-md border border-gray-300 " onClick={onClick}   >
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-48 object-contain rounded-t-lg hover:transition-all hover:scale-105"
      />

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-800">{nombre}</h3>
          <span className="text-gray-500 text-sm">#{numero}</span>
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

        <p className="text-gray-700 text-sm border-t pt-3">
          {descripcion}
        </p>

        {natural && (
          <div className="mt-3 pt-3 border-t">
            <span className="text-green-600 font-medium">{natural}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carta;