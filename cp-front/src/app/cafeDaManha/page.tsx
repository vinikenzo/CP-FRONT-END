"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
interface propReceitas {
  id: string;
  nome: string;
  categoria: string;
  imagem: string;
}

export default function Cafe() {

  const [receitas, setReceitas] = useState<propReceitas[]>([]);
// funçao para filtrar cafe da manha
  useEffect(() => {
    const buscarReceitas = async () => {
      try {
        const response = await fetch("/receitas.json");
        const data = await response.json();
        const cafeDaManha = data.filter(
          (receita: propReceitas) => receita.categoria === "Café da Manhã"
        );

        setReceitas(cafeDaManha);

      } catch (error) {
        console.error(error);
      }
    }
    buscarReceitas();
  }, [])

  return (
    <>
      <div className=" h-320">
        <ul className={"mb-"}>
          {
            receitas.map((receita, index) => (
              <li className="ml-40 border- flex space mr-0 w-auto  float-start" key={index}>
                <div className="h-100 border-  w-[450px]">

                  <Link className="font-bold text-2xl text-center" href={`receitas/${receita.id}`}>{receita.nome}
                    - {receita.categoria}
                    <Image className="mt-7 ml-20"
                      src={`/images/${receita.imagem}.jpg`}
                      alt=""
                      width={300}
                      height={100}
                    />
                  </Link>
                </div>
              </li>
            ))

          }
        </ul>
      </div>
    </>
  );
}