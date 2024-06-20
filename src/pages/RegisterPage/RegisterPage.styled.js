import styled from "styled-components";

export const TitleForm = styled.h2`
  color: ${(props) => props.theme.buttonTextColor};
  text-align: center;
  display: block;
  margin-bottom: 5px;
  font-size: 30px;
  font-weight: bold;
`;

export const ImagesContainer = styled.div`
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(/images/telephone-background-images.webp);
  background-size: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  max-width: 1440px;
  flex: 1;
`;