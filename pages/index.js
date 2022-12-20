import * as S from "../styles/indexstyle"
import { GlobalStyle } from "../styles/globalstyle"
import react from "react"

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <S.Container>
        <S.Title>MYSUPERHERO</S.Title>
        <S.Box>
          <S.Imput type={"seacrh"} placeholder={"Digite seu personagem"} />
          <S.Button>Pesquisar</S.Button>
          <S.Button onClick={()=> {window.location.href = 'http:/allpersonagens'}}>Veja alguns personagens</S.Button>
        </S.Box>
      </S.Container>
    </>
  )
}
