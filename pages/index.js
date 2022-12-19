import * as S from "./style"
import react from "react"

export default function Home() {
  return (
    <S.Container>
      <S.Imput>
       <imput type="seacrh" id="site-seacrh" placeholder="Digite seu personagem"></imput>
       <button>Pesquisar</button>
       </S.Imput>
    </S.Container>
  )
}
