export interface ICarta {
  numero: number;
  nombre: string;
  tipo: string;
  ataque: number;
  defensa: number;
  vida: number;
  descripcion: string;
  imagen: string;
  onClick: () => void;
  deleteCar: () => void;

};
export interface IapiCart{
    "idCard": string,
      "name": string,
      "description": string,
      "attack": number,
      "defense": number,
      "lifePoints": number,
      "pictureUrl": string,
      "attributes": {tipo?: string},
      "userSecret": string,
      "createdAt": string,
      "updatedAt": null | string 
}

export const ToApiCardMapper = (carta : ICarta) => {
    return {
        name: carta.nombre,
        description: carta.descripcion,
        attack: Number (carta.ataque) ,
        defense: Number (carta.defensa),
        lifePoints: Number (carta.vida),
        pictureUrl: carta.imagen || "https://i.pinimg.com/736x/40/e3/d7/40e3d7e9b30eae60489fdb0c0fbc37ed.jpg",
        attributes: {tipo: carta.tipo || "Desconocido"},
    }

}
    export const ToCardApiMapper =  (apiCard : IapiCart) => ({
    numero: parseInt(apiCard.idCard),
    nombre: apiCard.name,
    tipo: apiCard.attributes?.tipo || "Desconocido",
    ataque: apiCard.attack,
    defensa: apiCard.defense,
    vida: apiCard.lifePoints,
    descripcion: apiCard.description,
    imagen: apiCard.pictureUrl, 
    onClick: () => {},
    deleteCar: () => {}
});