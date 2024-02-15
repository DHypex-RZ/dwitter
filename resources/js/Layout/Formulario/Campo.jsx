export default function Campo({nombre, texto, tipo, requirido, funcion}) {
   return (
      <label
      className="relative my-2 text-white h-10"
      ><input
         className="bg-gray-600/75 w-full border-none absolute left-0 p-0 h-full px-3 placeholder:text-gray-300 rounded-lg"
         type={tipo} required={requirido} placeholder={texto} name={nombre} onChange={funcion}/></label>
   )
}
