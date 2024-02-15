export default function Boton({texto, funcion, posicion}) {
   return (
      <button
         className={"absolute bg-gray-700/75 px-2 rounded hover:bg-gray-500/75 transition " + posicion}
         onClick={funcion}
      >
         {texto}
      </button>
   )
}
