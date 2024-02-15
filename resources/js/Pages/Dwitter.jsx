import {Head} from "@inertiajs/react";
import Cabecera from "@/Layout/Cabecera/Cabecera.jsx";
import Dwitts from "@/Layout/Dwitt/Dwitts.jsx";

export default function Dwitter({dwitts}) {
   return (
      <>
         <Head title={"Inicio"}/>
         <Cabecera/>
         <Dwitts dwitts={dwitts}/>
      </>
   )
}
