import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import * as S from "./Layout.styled.js";

export const Layout = ({ children }) => {
  return (
    <S.LayoutContainer>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </S.LayoutContainer>
  );
};