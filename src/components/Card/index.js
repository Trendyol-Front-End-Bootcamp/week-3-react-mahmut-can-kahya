import React from "react";
import { useHistory } from "react-router-dom";
import { AppUrls } from "../../utils/AppUrls";
import {
  AliveIcon,
  Container,
  ContentSide,
  DeadIcon,
  ImageSide,
  StatusLine,
  Text,
} from "./styles";

const Card = React.forwardRef(
  (
    { id, name, species, gender, type, status, image, location, firstSeen },
    ref
  ) => {
    const history = useHistory();
    const getStatusIcon = (status) => {
      switch (status) {
        case "Alive":
          return <AliveIcon />;
        case "Dead":
          return <DeadIcon />;
        default:
          return <DeadIcon />;
      }
    };
    const onClickCard = () => {
      history.push(`${AppUrls.Detail}/${id}`);
    };
    return (
      <Container ref={ref} onClick={onClickCard}>
        <ImageSide>
          {image ? <img width={"100%"} src={image} alt="sa" /> : null}
        </ImageSide>
        <ContentSide>
          <Text size={18} weight={800} color={`rgb(245, 245, 245)`}>
            {name}
          </Text>
          <StatusLine>
            <div>{getStatusIcon(status)}</div>
            <Text size={18} weight={800} color={`rgb(245, 245, 245)`}>
              {`${status} - ${species}`}
            </Text>
          </StatusLine>

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

          <Text size={16} weight={500} color={`rgb(169 163 163)`}>
            First seen in:
          </Text>
          <Text size={18} weight={800} color={`rgb(245, 245, 245)`}>
            as
          </Text>
        </ContentSide>
      </Container>
    );
  }
);

export default Card;
