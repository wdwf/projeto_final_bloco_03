import { Link } from "react-router";
import type Categoria from "../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

export default function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 hover:shadow-lg transition-shadow duration-300">
      <div>
        <span className="text-sm text-gray-500">Nome</span>
        <h2 className="text-xl font-semibold mb-2">{categoria.nome}</h2>
      </div>
      <div>
        <span className="text-sm text-gray-500">Descrição</span>
        <p className="text-gray-600 mb-4">{categoria.descricao}</p>
      </div>
      <div className="flex gap-4 justify-end items-center">
        <Link
          to={`/editar-categoria/${categoria.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Editar
        </Link>
        <Link
          to={`/deletar-categoria/${categoria.id}`} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
          Deletar
        </Link>
      </div>
    </div>
  )
}