import Campo from "@/Layout/Formulario/Campo.jsx";
import {useState} from "react";
import {router} from "@inertiajs/react";

export default function Formulario() {
   const [valores, setValores] = useState({
      email: "",
      usuario: "",
      comentario: "",
   })

   function enviarFormulario(e) {
      e.preventDefault()
      router.post(route("nuevo.dwitt"), valores)
   }

   function detectarCambio(e) {
      const key = e.target.name
      const valor = e.target.value

      setValores(valores => ({
            ...valores,
            [key]: valor
         }
      ))
   }

   return (
      <form
         className="bg-gray-800 p-4 text-white rounded-lg shadow-xl shadow-gray-700 mb-2 flex flex-col"
         method="post" onSubmit={enviarFormulario}
      >
         <div
            className="flex flex-col"
         >
            <Campo nombre={"usuario"} texto={"Usuario"} tipo={"text"} requirido={true} funcion={detectarCambio}/>
            <Campo nombre={"email"} texto={"Email"} tipo={"email"} requirido={true} funcion={detectarCambio}/>
         </div>
         <textarea
            className="bg-gray-600/75 w-full border-none resize-none p-3 my-3 rounded-lg h-40 relative
            placeholder:text-gray-300" required={true} placeholder={"Comenentario ..."} name={"comentario"}
            onChange={detectarCambio}
         ></textarea>
         <button
            className="bg-gray-600/75 px-5 py-1 rounded-lg self-end mt-2"
         >Enviar
         </button>
      </form>
   )
}
