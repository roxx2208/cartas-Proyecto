
import Carta from './componentes/carta'

function App() {

  return (
    <div className='flex justify-center intems-center gap-10 h-screen bg-emerald-400 p-4 bg-white-500 text-black rounded '>
     <Carta
     nombre='creeper'
     ataque={1000}
     tipo='explosivo'
     defensa={7}
     descripcion='mata de una, no te confies'
     imagen='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnQu4YbUJtQi4HUa4wlvcy7_SoDO6vx_W5A&s'
     numero={1}
     />

     <Carta
     nombre='esqueleto'
     ataque={3}
     tipo='rango'
     defensa={6}
     descripcion='rango medio, ataque mehh depende del arco que tenga'
     imagen='https://minecraft.wiki/images/thumb/Skeleton_Aiming_JE2_BE3.png/150px-Skeleton_Aiming_JE2_BE3.png?e6e26'
     numero={2}
     />

     <Carta
     nombre='zombie'
     ataque={5}
     tipo='cuerpo a cuerpo'
     defensa={5.5}
     descripcion='cuerpo a cuerpo, el daño depende de que arma porte'
     imagen='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9G12oHwEP065-Jc_QA1G49MfV5f4AuwsFw&s'
     numero={3}
     />


    </div>
  )
}

export default App
