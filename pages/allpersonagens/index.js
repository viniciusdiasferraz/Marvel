import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Api from "../../services/api";
import * as S from "./style"

export default function allpersonagens() {

  const[answer, setAnswer] = useState()


  useEffect(() => {
    Api.get('/characters', {
        params: {
            limit: 20
        }
    })
    .then(response =>{
      setAnswer(response?.data?.data?.results);
      console.log(response, 'requisição');
    })
}, [])


  return (
       <S.Container>
         <S.Title>MYSUPERHERO</S.Title>
     {answer?.map((item) => {
      return(
        <>
        <S.Box>
          <S.Typography>{item?.name}</S.Typography>
        </S.Box>
        </>
      )
     })}
        </S.Container>
  )
}