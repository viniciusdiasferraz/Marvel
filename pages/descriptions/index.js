import * as S from "./style"
import { GlobalStyle } from "../../styles/globalstyle"
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";



export default function Descriptions() {
    
const [answer, setAnswer] = useState()

let url
let characterId

if (typeof window !== 'undefined') {
  url = window?.location?.href;
  characterId = url.split("id=")[1];
}

   

    const selectPerson = () => {
        axios
         .get(
            `https://gateway.marvel.com:443/v1/public/characters/${characterId}?ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`
         )
        
          .then(response => {
            setAnswer(response?.data?.data?.results);
          })
    
        }
        
        useEffect(() => {
            selectPerson()
        }, [])
        
        console.log(answer, 'answer');


    return(
        <S.Container>
        <GlobalStyle/>
        {answer?.map((item) =>{
            return(
                <>
                <S.BoxInformation>
                <S.Imagem src={`${item?.thumbnail?.path}/standard_fantastic.${item?.thumbnail?.extension}`} />
                <S.Box>
                <S.Typography>{item?.name}</S.Typography>
                <S.Typography>{ item.description ? (
                    <p>{item?.description}</p> ) : (
                    <p> Não existe descrição para este personagem</p>
                    )}
                     </S.Typography>
                </S.Box>
                </S.BoxInformation>

                <S.Typography> Comics</S.Typography>
                    {answer?.[0]?.comics?.items.map ((item) => {
                        return(
                          <>
                          { item.name ? (
                              <p>{item.name}</p>) : ( 
                              <p>Este personagem não tem comics</p>
                              )
                          }
                          </>  
                        )
                    })}

                <S.Typography> Eventos</S.Typography>
                <S.Typography> Series</S.Typography>
                <S.Typography> Histórias</S.Typography>
                </>
            )
        })}
        </S.Container>
    )
}
