import type { ICarta } from ".";
import { useState } from "react"; 
import { useEffect } from "react";
import Carta from "./carta";



type props = {
    mazo: ICarta[];
    
};

function SeleccionarCartas ({mazo}: props ) {
 return (<div> seleccionar carta</div>)

 
};

const [CartaSeleccionada1, SetCartaSeleccionada1] =
useState<ICarta | null>(null);
const [CartaSeleccionada2, SetCartaSeleccionada2] =
useState<ICarta | null>(null);
const [ListoBatalla, SetListoBatalla] = useState<boolean>(false);

const handleSeleccionarCarta = (carta: ICarta) => {
    const isSelected1 = CartaSeleccionada1?.idCard === carta.idCard;
        const isSelected2 = CartaSeleccionada2?.idCard === carta.idCard;

        if (isSelected1) {
            SetCartaSeleccionada1(null);
            SetListoBatalla(false);
            return;
        }

        if (isSelected2) {
            SetCartaSeleccionada2(null);
            SetListoBatalla(false);
            return;
        }

        if (!CartaSeleccionada1)  {
            SetCartaSeleccionada2 (carta);
            if (CartaSeleccionada2) SetListoBatalla(true)
            } else if (!CartaSeleccionada2 ) {
        SetCartaSeleccionada2(carta);
        SetListoBatalla(true);
         };

        };

        






    


















export default SeleccionarCartas