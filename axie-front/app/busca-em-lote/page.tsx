'use client'

import Navbar from "../components/navbar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const formSchema = z.object({
  breedCount: z.number().min(1, {
    message: "O ID deve ser um número positivo.",
  }),
  purityGenes: z.number().min(1, {
    message: "O ID deve ser um número positivo.",
  }),
  class: z.number().min(1, {
    message: "O ID deve ser um número positivo.",
  }),


});

type AxieSchemaType = z.infer<typeof formSchema>;

export default function BuscaEmLote() {
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AxieSchemaType>({ resolver: zodResolver(formSchema) });


  const onSubmit: SubmitHandler<AxieSchemaType> = (data) => {
    console.log(data);

    setSearchResult(`Resultado da busca: ${data.axieId}`);
  }


  return (
    <>
      <Navbar />
      <div className="page-content min-h-screen flex flex-col justify-center">
        <div className="space-y-8 w-full max-w-md mx-auto">

          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Busca em lote de Axies
          </h2>


          <form onSubmit={handleSubmit(onSubmit)} className="form">

            <p className="mb-3">Filtros:</p>
            
            <Input
              className="input"
              placeholder="Breed Count"
              {...register("breedCount", { valueAsNumber: true })}
            />

            <Input
              className="input"
              placeholder="Purity & Genes"
              {...register("purityGenes", { valueAsNumber: true })}
            />

            <Input
              className="input"
              placeholder="breedCount"
              {...register("class", { valueAsNumber: true })}
            />

            <div className="flex flex-col">
              <Button
                type="submit"
                className="transition-transform transform active:scale-95"
              >Buscar</Button>
              {errors.breedCount && (
                <span className="text-red-500 mt-2">{errors.breedCount.message}</span>
              )}
              {errors.purityGenes && (
                <span className="text-red-500 mt-2">{errors.purityGenes.message}</span>
              )}
              {errors.class && (
                <span className="text-red-500 mt-2">{errors.class.message}</span>
              )}
            </div>
          </form>


          <div className="space-y-8 w-full max-w-md mx-auto">
            {searchResult ? searchResult : 'Resultado da busca: '}
          </div>

        </div>
      </div>
    </>
  );
}


