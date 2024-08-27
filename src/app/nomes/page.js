"use client";

import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Page(){

    const [nome, setNome] = useState('matheus')
 //   let nome = 'matheus'

    function alterarnome(){
        const novoNome = nome == 'matheus' ? 'matheus rodrigues monte' : 'matheus'
        setNome(novoNome)

    }
    return (
        <Pagina titulo= {"nome:" + nome} >

            <Button onClick={alterarnome}>alterar  nome</Button>
            <h1>{nome}</h1>
          
        </Pagina>
    )
}
