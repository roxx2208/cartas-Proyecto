type props = {
    numero : number;
    nombre : string;
    tipo : string;
    ataque : number;
    defensa : number;
    descripcion : string;
    imagen : string; 
    natural? : string;
}

function  Carta ({
 ataque,
 defensa,
 descripcion,
 imagen,
 nombre,
 numero,
 tipo,
 natural,
}: props) {
    return(
    <div>
        <h3>
            {nombre} (#{ numero})
        </h3>
        <img src={imagen} alt={nombre} />
        <p>
            tipo : {tipo}
        </p>
        <p> ataque : {ataque}</p>
        <p> defensa : {defensa}</p>
        <p> {descripcion}</p>
        <h3> {natural} </h3>
    </div>

    )
}
export default Carta;