import react from "react";
import { useEffect, useState } from "react";
import Api from "../../services/api";
import * as S from "./style"
import { GlobalStyle } from "../../styles/globalstyle";

export default function allpersonagens() {
  const [answer, setAnswer] = useState()

  useEffect(() => {
    Api.get('/characters', {
      params: {
        limit: 20
      }
    })
      .then(response => {
        setAnswer(response?.data?.data?.results);
        console.log(response, 'requisição');
      })
  }, [])


  return (
    <S.Container>
      <GlobalStyle/> 
      <S.Title>MYSUPERHERO</S.Title>
      <S.Card>
      {answer?.map((item) => {
        return (
            <S.Box>
              <S.Imagem src={`${item?.thumbnail?.path}/portrait_uncanny.${item?.thumbnail?.extension}`} />
              <S.Typography>{item?.name}</S.Typography>
            </S.Box>
        )
      })}
      </S.Card>
    </S.Container>
  )
}