import Dwitt from "@/Layout/Dwitt/Dwitt.jsx";
import Formulario from "@/Layout/Formulario/Formulario.jsx";

export default function Dwitts({dwitts}) {
   return (
      <div
         className="w-3/4 flex flex-col justify-center mx-auto mt-4 bg-gray-200 p-6 shadow-gray-500 shadow-lg rounded-lg"
      >
         <Formulario/>
         {dwitts.map((dwitt, id) => <Dwitt key={id} dwitt={dwitt}/>)}
      </div>
   )
}
