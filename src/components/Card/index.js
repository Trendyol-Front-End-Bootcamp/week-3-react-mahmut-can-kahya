import React from "react";
import { useHistory } from "react-router-dom";
import { useTheme } from "styled-components";
import { Text } from "../../core/components/Text/styles";
import { AppUrls } from "../../utils/AppUrls";
import { getStatusIcon } from "../../helpers/getStatusIcon";
import {
  AliveIcon,
  Container,
  ContentSide,
  DeadIcon,
  ImageBottom,
  ImageSide,
  NameWrapper,
  Row,
  StatusLine,
} from "./styles";

const Card = React.forwardRef(
  ({ id, name, species, gender, type, status, image, location }, ref) => {
    const { color, size, family } = useTheme();
    const history = useHistory();
    
    //karta tıklanınca detay sayfasına yönlenir.
    const onClickCard = () => {
      history.push(`${AppUrls.Detail}/${id}`);
    };
    return (
      <Container ref={ref} onClick={onClickCard}>
        <ImageSide>
          {image ? <img width={"100%"} src={image} alt="sa" /> : null}
          <ImageBottom>
            <NameWrapper>
              <Text
                size={size.medium}
                family={family.semiBold}
                color={color.white}
              >
                {name}
              </Text>
            </NameWrapper>
          </ImageBottom>
        </ImageSide>
        <ContentSide>
          <StatusLine>
            <Row>
              <div>{getStatusIcon(status)}</div>
              <Text
                size={size.normal}
                family={family.medium}
                color={color.white}
              >
                {`${status} - ${species}`}
              </Text>
            </Row>
          </StatusLine>
          <div>
            <Text size={16} weight={500} color={`rgb(169 163 163)`}>
              Gender:
            </Text>
            <Text
              marginBottom={12}
              size={18}
              weight={800}
              color={`rgb(245, 245, 245)`}
            >
              {gender}
            </Text>
          </div>
          <div>
            <Text size={16} weight={500} color={`rgb(169 163 163)`}>
              Last known location:
            </Text>
            <Text
              marginBottom={12}
              size={18}
              weight={800}
              color={`rgb(245, 245, 245)`}
            >
              {location.name}
            </Text>
          </div>
        </ContentSide>
      </Container>
    );
  }
);

export default Card;
