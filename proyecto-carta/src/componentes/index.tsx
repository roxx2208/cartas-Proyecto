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
      "attributes": {},
      "userSecret": null,
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": null
}