import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import Loading from "../../core/components/Loading";
import { Text } from "../../core/components/Text/styles";
import { getStatusIcon } from "../../helpers/getStatusIcon";
import CharServices from "../../services/CharServices";
import {
  Container,
  DetailWrapper,
  Episode,
  Episodes,
  Image,
  RowStatus,
} from "./styles";

const DetailPage = () => {
  const [loading, setLoading] = useState(false);
  const [char, setChar] = useState(null);
  const { color, size, family } = useTheme();

  //Karakter kartlarına tıklanınca gelen id parametresi
  let { id } = useParams();

  //url üzerinden okunan id ile apiye istek atar ve karakter bilgisini getirir.
  useEffect(() => {
    setLoading(true);
    CharServices.getSingleChar(id)
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        setTimeout(() => {
          setChar(res);
          setLoading(false);
        }, 0.75 * 1000);
      });
  }, []);

  return (
    <DetailWrapper>
      <Container>
        <Loading loading={loading} />
        {char ? (
          <>
            <Image src={char?.image} alt="char image" />
            <Text
              centered
              size={size.medium}
              color={color.darkGrey}
              family={family.semiBold}
            >
              {char?.name}
            </Text>
            <RowStatus>
              <RowStatus>
                {getStatusIcon(char?.status)}
                <Text
                  size={size.medium}
                  color={color.darkGrey}
                  family={family.medium}
                >{`${char?.status} - ${char?.species}`}</Text>
              </RowStatus>
              <RowStatus>
                <Text
                  size={size.medium}
                  color={color.grey}
                  family={family.medium}
                >
                  {"Gender: "}
                </Text>
                <Text
                  size={size.medium}
                  color={color.darkGrey}
                  family={family.regular}
                >
                  {char?.gender}
                </Text>
              </RowStatus>
            </RowStatus>
            <div>
              <Text
                size={size.normal}
                color={color.grey}
                family={family.medium}
              >
                Last known location:
              </Text>
              <Text
                size={size.medium}
                color={color.darkGrey}
                family={family.regular}
              >
                {char?.location?.name}
              </Text>
            </div>
            <div>
              <Text
                size={size.normal}
                color={color.grey}
                family={family.medium}
              >
                Origin:
              </Text>
              <Text
                size={size.medium}
                color={color.darkGrey}
                family={family.regular}
              >
                {char?.origin?.name}
              </Text>
            </div>
            <div>
              <Text
                size={size.normal}
                color={color.grey}
                family={family.medium}
              >
                Episodes:
              </Text>
              <Episodes>
                {char?.episode?.map((episode, index) => {
                  if (index >= 5) return;
                  return (
                    <Episode key={index}>
                      <Text
                        size={size.medium}
                        color={color.darkGrey}
                        family={family.regular}
                      >
                        {episode}
                      </Text>
                    </Episode>
                  );
                })}
              </Episodes>
            </div>
          </>
        ) : null}
      </Container>
    </DetailWrapper>
  );
};

export default DetailPage;
