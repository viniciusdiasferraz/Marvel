/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useEffect, useState } from "react";
import Api from "../../services/api";
import * as S from "./style"
import { GlobalStyle } from "../../styles/globalstyle";
import Header from "../componets/Header";
import Modal from "../componets/Modal";

export default function allpersonagens() {
  const [answer, setAnswer] = useState()
  const [modasIsOpen, SetModalIsOpen] = useState(false)
  const [value, setValue] = useState()

      const onItemClicked = (item) => {
        setItemSelecionado(item);
        setIsOpen(true);
    }

  const selectPerson = () => {
    SetModalIsOpen(true)
    Api.get('/characters', {
      params: {
        limit: 80
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
      <Header />
      <S.Card>
        {answer?.map((item, index) => {
          return (
            <S.Box  
            key={index}
            onClick={() => {selectPerson(item), setValue()}}>
              <S.Imagem src={`${item?.thumbnail?.path}/portrait_uncanny.${item?.thumbnail?.extension}`} />
              <S.Typography>{item?.name}</S.Typography>
              <S.Typography>{item?.description}</S.Typography>

              
            </S.Box>
          )
        })}
      </S.Card>


    </S.Container>
  )
}