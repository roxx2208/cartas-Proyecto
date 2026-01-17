interface modalCartaProps {
  isOpen: boolean;
  onClose: () => void;
  contenido: string;
}
const ModalCarta: React.FC<modalCartaProps> = ({ isOpen, onClose, contenido }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Contenido de la carta</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <p>{contenido}</p>
      </div>
    </div>
  );
};
export default ModalCarta;