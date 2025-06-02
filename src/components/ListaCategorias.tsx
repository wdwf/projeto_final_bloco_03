import { useEffect, useState } from "react";
import CardCategoria from "./CardCategoria";
import { buscar } from "../services/Services";
import { ToastAlerta } from "../../util/ToastAlerta";
import { Link, useNavigate } from "react-router";
import type Categoria from "../models/Categoria";

export default function ListaCategorias() {

  const navigate = useNavigate();

  const [categorias, setCategorias] = useState<Categoria[]>([])


  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias)
    } catch (error: any) {
      if (error.toString().includes('403')) {
        ToastAlerta("Erro ao buscar categorias!", "erro")
      }
    }
  }

  useEffect(() => {
    buscarCategorias()
  }, [categorias.length])

  console.log(categorias);

  return (
    <div className=" min-h-screen py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold">Lista de Categorias</h2>
        <Link to="/cadastrar-categoria" className="px-3 py-2 rounded-full bg-blue-700 text-sm text-white">Cadastrar categoria</Link>
      </div>
      {
        categorias.map((categoria) => (
          <CardCategoria key={categoria.id} categoria={categoria} />
        ))
      }
    </div>
  )
}
