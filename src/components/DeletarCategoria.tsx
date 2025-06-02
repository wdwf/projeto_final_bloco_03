import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import { buscar, deletar } from "../services/Services"
import { RotatingLines } from "react-loader-spinner"
import { ToastAlerta } from "../../util/ToastAlerta"
import type Categoria from "../models/Categoria"

function deletarCategoria() {

  const navigate = useNavigate()

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)
    } catch (error: any) {
      if (error.toString().includes('403')) {
        ToastAlerta("Erro ao buscar a categoria.", "erro")
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  async function deletarCategoria() {
    setIsLoading(true)

    try {
      await deletar(`/categorias/${id}`)

      ToastAlerta("Categoria apagada com sucesso", "sucesso")

    } catch (error: any) {

      ToastAlerta("Erro ao deletar a categoria.", "erro")

    }

    setIsLoading(false)
    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>
      <p className='text-center font-semibold mb-4'>
        Você tem certeza de que deseja apagar a categoria a seguir?</p>

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
          <button
            className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
            onClick={deletarCategoria}>
            {isLoading ?
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
              <span>Deletar</span>
            }
          </button>
          <button
            onClick={retornar} className="cursor-pointer bg-transparent border border-gray-700 text-gray-900 px-4 py-2 rounded hover:bg-gray-300 transition-colors">
            cancelar
          </button>
        </div>
      </div>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header
          className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
          Categoria
        </header>
        <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
        <div className="flex">
          <button
            className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
            onClick={retornar}>
            Não
          </button>
          <button
            className='w-full text-slate-100 bg-indigo-400 
                                   hover:bg-indigo-600 flex items-center justify-center'
            onClick={deletarCategoria}>
            {isLoading ?
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
              <span>Sim</span>
            }
          </button>
        </div>
      </div>
    </div>
  )
}
export default deletarCategoria