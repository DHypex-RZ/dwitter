import {Head} from "@inertiajs/react";
import Cabecera from "@/Layout/Cabecera/Cabecera.jsx";
import Dwitts from "@/Layout/Dwitt/Dwitts.jsx";
import {NextUIProvider} from "@nextui-org/react";

export default function Dwitter({dwitts}) {
   return (
      <NextUIProvider>
         <Head title={"Inicio"}/>
         <Cabecera/>
         <Dwitts dwitts={dwitts}/>
      </NextUIProvider>
   )
}
