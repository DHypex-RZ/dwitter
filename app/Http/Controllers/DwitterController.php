<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class DwitterController extends Controller
{

   public function vistaInicial(): Response
   {
      return Inertia::render("Dwitter", [
         "dwitts" => DB::table("dwitts")
            ->orderBy("fecha", "desc")
            ->get()
      ]);
   }

   public function insertarDwitt(Request $request): RedirectResponse
   {
      DB::table("dwitts")->insert([
         "email" => $request->email,
         "usuario" => $request->usuario,
         "comentario" => $request->comentario,
         "fecha" => date("Y/m/d H:i:s")
      ]);

      return to_route("inicio");
   }
}
