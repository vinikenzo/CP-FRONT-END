"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


interface propReceita {
    id : string;
    categoria : string;
    nome : string;
    imagem : string;
    ingredientes : string[];
    tempo: string;
    preparo: string; 
}

const PageReceitas = () => {

    const { id } = useParams();

    const [receita,setReceita] = useState<propReceita | null>(null);

    const [erro,setErro] = useState<string | null>(null);

    useEffect(()=>{
        const procurarReceita = async () => {
            try{
                const response = await fetch('/receitas.json')
                if(!response.ok){
                    throw new Error("Erro ao acessar a base de dados");
                }
                const data = await response.json();

                const encontrarReceita = data.find((r: { id : string} ) => r.id === id);

                if(!encontrarReceita){
                    throw new Error("Receita não encontrada!");
                }

                setReceita(encontrarReceita);
                setErro(null);
            }
            catch(error){
                setErro(error instanceof Error ? error.message : "Erro desconhecido");
            }
        }
        if(id){
            procurarReceita()
        }
    },[id])
        if (erro){
            return <p>{ erro }</p>
        }

        if(!receita){
            return <p>Carregando......</p>
        }

    return(
        <>
           
            <h1>{ receita?.nome }</h1>
            <p><b>Categoria: </b>{ receita?.categoria }</p>
            <p><b>Ingredientes: </b></p>
            <ul>
                {receita?.ingredientes.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p><b>Tempo: </b>{ receita?.tempo }</p>
            <p><b>Modo de preparo: </b>{receita?.preparo}</p>

        </>
    )
}
export default PageReceitas;