"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface propReceitas {
  id : string;
  nome : string;
  categoria : string;
}

export default function Acompanhamentos() {
  
  const [receitas,setReceitas] = useState<propReceitas[]>([]);

  useEffect(() =>{
    const buscarReceitas = async () => {
      try{
        const response = await fetch("/receitas.json");
        const data = await response.json();
        const acompanhamentos = data.filter(
            (receita: propReceitas) => receita.categoria === "Acompanhamentos"
        );
      
        setReceitas(acompanhamentos);

      }catch(error){
        console.error(error);
      }
    }
    buscarReceitas();
  },[])

  return (
    <>
      <ul>
        {
          receitas.map((receita,index)=>(
            <li key={index}>
              <Link href={`receitas/${receita.id}`}>{ receita.nome}</Link>
              - {receita.categoria}
            </li>
          ))

        }
      </ul>
    </>
  );
}