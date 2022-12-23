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

  const selectPerson = () => {
    SetModalIsOpen(true)
    Api.get('/characters', {
      params: {
        limit: 80
      }
    })
      .then(response => {
        setAnswer(response?.data?.data?.results);
        console.log(response, 'requisição');
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
        {answer?.map((item) => {
          return (
            <S.Box onClick={() => selectPerson(item) }>
              <S.Imagem src={`${item?.thumbnail?.path}/portrait_uncanny.${item?.thumbnail?.extension}`} />
              <S.Typography>{item?.name}</S.Typography>
            </S.Box>
          )
        })}
      </S.Card>

      <S.Modal>
        {
          answer &&
          <Modal
            Descrição={answer.map(() =>{
              return(
                <></>
              )
            })}
            Comics={answer?.[3]?.comics?.items.map((item) =>{
              console.log(item, 'items')
              return(
                <p>{item.name}</p>
                )
              })}
            Eventos={2}
            Series={2}
            Histórias={2}
            setIsOpen={SetModalIsOpen}
            isOpen={modasIsOpen}
          />
        }
      </S.Modal>

    </S.Container>
  )
}