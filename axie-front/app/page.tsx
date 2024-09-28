'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const formSchema = z.object({
  axieId: z.number().min(1, {
    message: "O ID deve ser um número positivo.",
  }),
});

type AxieSchemaType = z.infer<typeof formSchema>;

export default function HomePage() {
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
      <div className="page-content min-h-screen flex flex-col justify-center">
        <div className="space-y-8 w-full max-w-md mx-auto">
          <h1 className="title scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Axie Brasil
          </h1>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Busca singular de Axie
          </h2>


          <form onSubmit={handleSubmit(onSubmit)} className="form">

            <Input
              className="input"
              placeholder="axieId"
              {...register("axieId", { valueAsNumber: true })}
            />

            <div className="flex flex-col">
              <Button 
                type="submit"
                className="transition-transform transform active:scale-95"
              >Buscar</Button>
              {errors.axieId && (
                <span className="text-red-500 mt-2">{errors.axieId.message}</span>
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


