import * as S from "../styles/indexstyle"
import { GlobalStyle } from "../styles/globalstyle"
import React, { useState } from "react"
import Router  from "next/router"

export default function Home() {

const [search, setSearch]= useState("")

return (
  <>
      <GlobalStyle />
      <S.Container>
        <S.Box>
          <S.Imput  onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())} type={"seacrh"} placeholder={"Digite seu personagem"} />
          <S.Button onClick={() =>  Router.push(`/allpersonagens?name=${search}`)}>Pesquisar</S.Button>
        </S.Box>
      </S.Container>
    </>
  )
}
