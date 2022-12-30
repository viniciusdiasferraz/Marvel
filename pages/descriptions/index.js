import * as S from "./style";
import { GlobalStyle } from "../../styles/globalstyle";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Descriptions() {
  const [answer, setAnswer] = useState();

  let url;
  let characterId;

  if (typeof window !== "undefined") {
    url = window?.location?.href;
    characterId = url.split("id=")[1];
  }

  const selectPerson = () => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${characterId}?ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`
      )

      .then((response) => {
        setAnswer(response?.data?.data?.results);
      });
  };

  useEffect(() => {
    selectPerson();
  }, []);

  console.log(answer, "answer");

  return (
    <S.Container>
      <GlobalStyle />
      {answer?.map((item) => {
        return (
          <>
            <S.BoxInformation>
              <S.Imagem
                src={`${item?.thumbnail?.path}/standard_fantastic.${item?.thumbnail?.extension}`}
              />
              <S.Box>
                <S.Typography>{item?.name}</S.Typography>
                <S.Typography>
                  {item.description ? (
                    <p>{item?.description}</p>
                  ) : (
                    <p>There is no description for this character</p>
                  )}
                </S.Typography>
              </S.Box>
            </S.BoxInformation>

            <S.BoxDescriptions>
              <S.BoxItens>
                <S.Typography> Comics</S.Typography>
                {answer?.[0].comics?.items.length === 0 ? (
                  <S.Text>This character has no comics</S.Text>
                ) : (
                  <div>
                    {answer?.[0].comics?.items.map((item) => {
                      return (
                        <>
                          <S.Text>{item?.name}</S.Text>
                        </>
                      );
                    })}
                  </div>
                )}
              </S.BoxItens>

              <S.BoxItens>
                <S.Typography> Events</S.Typography>
                {answer?.[0]?.events?.items.length === 0 ? (
                  <S.Text>This character has no events</S.Text>
                ) : (
                  <div>
                    {answer?.[0]?.events?.items.map((item) => {
                      return (
                        <>
                          <S.Text>{item.name}</S.Text>
                        </>
                      );
                    })}
                  </div>
                )}
              </S.BoxItens>

              <S.BoxItens>
                <S.Typography> Series</S.Typography>
                {answer?.[0]?.series?.items.length === 0 ? (
                  <S.Text>This character has no series</S.Text>
                ) : (
                  <div>
                    {answer?.[0]?.series?.items.map((item) => {
                      return (
                        <>
                          <S.Text>{item.name}</S.Text>
                        </>
                      );
                    })}
                  </div>
                )}
              </S.BoxItens>

              <S.BoxItens>
                <S.Typography> Stories</S.Typography>
                {answer?.[0]?.stories?.items.length === 0 ? (
                  <S.Text>This character has no stories</S.Text>
                ) : (
                  <div>
                    {answer?.[0]?.stories?.items.map((item) => {
                      return (
                        <>
                          <S.Text>{item.name}</S.Text>
                        </>
                      );
                    })}
                  </div>
                )}
              </S.BoxItens>
            </S.BoxDescriptions>
          </>
        );
      })}
    </S.Container>
  );
}
