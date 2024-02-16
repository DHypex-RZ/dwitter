import Boton from "@/Layout/Dwitt/Boton.jsx";
import {router} from "@inertiajs/react";
import { usePage } from '@inertiajs/react'


export default function Dwitt({dwitt}) {
   return (
      <article
         className="bg-gray-800 p-4 text-white rounded-lg scale-90 hover:scale-100 transition duration-500
               hover:shadow-xl hover:shadow-gray-700"
      >
         <header
            className="flex items-center"
         >
            <h2
               className="mr-4 font-bold text-2xl"
            >{dwitt.usuario}</h2>
            <h3
               className="text-gray-400"
            >{dwitt.email}</h3>
         </header>
         <div
            className="bg-gray-600/75 p-3 my-3 rounded-lg h-40 relative"
         >
            <p>{dwitt.comentario}</p>
            {dwitt.editado ? (<p
               className="absolute bottom-2 right-2 text-gray-400"
            >Dwitt editado</p>) : (<></>)}
         </div>
         <footer
            className="text-right"
         >
            <div
               className="absolute"
            >
               <Boton
                  posicion={"left-0"}
                  texto={"Eliminar"}
                  funcion={eliminarDwitt}
               />
               <Boton
                  posicion={"left-20"}
                  texto={"Editar"}
                  funcion={() => {
                     console.log(usePage().props)
                  }}
               />
            </div>
            {dwitt.fecha}
         </footer>
      </article>
   )

   function eliminarDwitt() {
      router.delete(route("eliminar.dwitt", dwitt.id))
   }
}
