"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface propReceitas {
  id : string;
  nome : string;
  categoria : string;
}

export default function Pratos() {
  
  const [receitas,setReceitas] = useState<propReceitas[]>([]);

  useEffect(() =>{
    const buscarReceitas = async () => {
      try{
        const response = await fetch("/receitas.json");
        const data = await response.json();
        const pratosPrincipais = data.filter(
            (receita: propReceitas) => receita.categoria === "Pratos principais"
        );
      
        setReceitas(pratosPrincipais);

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
            <li className="ml-6" key={index}>
              <div className="h-70  w-[500px]">
              <Link href={`receitas/${receita.id}`}>{ receita.nome}</Link>
              - {receita.categoria}
              </div>
            </li>
          ))

        }
      </ul>
    </>
  );
}