import { type ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type Categoria from "../models/Categoria";
import { atualizar, buscar, cadastrar } from "../services/Services";
import { ToastAlerta } from "../../util/ToastAlerta.ts";
import { InfinitySpin, RotatingLines } from "react-loader-spinner";

export default function FormCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { id } = useParams<{ id: string }>();

  function retornar() {
    navigate("/categorias")
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      ativo: true,
      [e.target.name]: e.target.value
    })
  }

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)
    } catch (error: any) {
      if (error.toString().includes('403')) {
        ToastAlerta("Erro ao buscar a categoria.", "erro")
      }
    }
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/categorias/${id}`, categoria, setCategoria)
        ToastAlerta("A categoria foi atualizado com sucesso!", "sucesso")
      } catch (error: any) {
        ToastAlerta("Erro ao atualizar a categoria.", "erro")
      }
    } else {
      try {
        console.log("cadastrando categoria", categoria);

        await cadastrar(`/categorias`, categoria, setCategoria)
        ToastAlerta("A categoria foi cadastrado com sucesso!", "sucesso")
      } catch (error: any) {
        ToastAlerta("Erro ao cadastrar a categoria.", "erro")
      }
    }

    setIsLoading(false)
    retornar()
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  return (
    <div className="py-6 min-h-screen container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="font-bold">Nome</label>
          <input
            type="text"
            placeholder="Descreva sua categoria"
            name='nome'
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className="font-bold">Descrição</label>
          <span className="text-gray-500 text-xs">Deve conter mais de 10 caracteres</span>
          <input
            type="text"
            placeholder="Descreva sua categoria"
            name='descricao'
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit">
          {isLoading ?
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

          }
        </button>
      </form>
    </div>
  )
}
