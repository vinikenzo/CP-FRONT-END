"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";


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

    //função para acessar os dados do json
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
            <p className="ml-7 text-[88px] font-bold text-center mb-20">{receita?.nome}</p>
            <div className={"flex"}>

                <div className={"w-2/4 h-full mr-150"}>
                    <p className="ml-7 mt-3"><b>Ingredientes: </b></p>
                    <ul className="ml-7 mt-3">
                        {receita?.ingredientes.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="ml-7 mt-3"><b>Tempo: </b>{receita?.tempo}</p>
                    <p className="ml-7 mt-3 text-left"><b>Modo de preparo: </b>{receita?.preparo}</p>
                </div>
                <div className={"w-200 h-150 "}>
                    <Image className="ml-4 border-" src={`/images/${receita.imagem}.jpg`} alt="" width={450} height={150}/>
                    <p className="ml-7 mt-3"><b>Categoria: </b>{receita?.categoria}</p>
                </div>
            </div>

        </>
    )
}
export default PageReceitas;