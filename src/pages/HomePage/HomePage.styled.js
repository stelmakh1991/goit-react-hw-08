import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: ${(props) => props.theme.buttonTextColor};
`;

export const ImageContainer = styled.div`
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(/images/ai-generated-vintage-telephone-on-vibrant-gradient-background-photo.jpg);
  background-size: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  max-width: 1440px;
  flex: 1;
`;