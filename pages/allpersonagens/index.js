/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useEffect, useState } from "react";
import Api from "../../services/api";
import * as S from "./style"
import { GlobalStyle } from "../../styles/globalstyle";
import  Router  from "next/router";

export default function allpersonagens() {
  const [answer, setAnswer] = useState()

let url
let characterNames

if (typeof window !== 'undefined') {
  url = window.location.href;
  characterNames = url.split("name=")[1];
}



  const selectPerson = () => {
    Api.get('/characters', {
      params: {
        nameStartsWith:characterNames,
      }
    })
      .then(response => {
        setAnswer(response?.data?.data?.results);
      })

  }

  useEffect(() => {
    selectPerson()
  }, [])
 
console.log(answer, 'answer');

  return (
    <S.Container>
      <GlobalStyle />
      <S.Card>
        {answer?.map((item, index) => {
          return (
            <S.Box  
            key={index}
            onClick={() => Router.push(`/descriptions?id=${item.id}`)}>
              <S.Typography>{item?.name}</S.Typography>
              <S.Imagem src={`${item?.thumbnail?.path}/portrait_uncanny.${item?.thumbnail?.extension}`} />
            </S.Box>
          )
        })}
      </S.Card>


    </S.Container>
  )
}