import { css } from "@emotion/css";
import React, { PropsWithChildren } from "react";
import { APP_FOOTER_HEIGHT, APP_TOP_BAR_HEIGHT } from "../../constants/appDimension";
import Colors from "../../styles/colors";
import { ButtonScroll } from "../ButtonScroll/ButtonScroll";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";


// ===========================================================================
// MAIN COMPONENT
// ===========================================================================

type AppLayoutProps = {
  children?: React.ReactNode;
};

export const MAIN_CONTENT_ID = "main-content";

export function AppLayout({ children }: AppLayoutProps) {
  // --------------------------------------------------------------------------- hooks

  return (
      <Wrapper>
        <div
          id={MAIN_CONTENT_ID}
          className={contentCss}
        >
          <main className={mainCss}>{children}</main>
         
        </div>
      </Wrapper>
  );
}

function Wrapper({ children }: PropsWithChildren<unknown>) {
  return (
    <div className={appCss}>
      <Header />
      {children}
      <Footer/>
      <ButtonScroll/>
    </div>
  );
}

// ===========================================================================
// CSS
// ===========================================================================

const appCss = css`
  background: ${Colors.LIGHT};
  min-height: 100vh;
  width: 100%;
  position: relative;
`;

const contentCss = css`
  display: flex;
  padding-top: ${APP_TOP_BAR_HEIGHT}px;
`;

const mainCss = css`
  width: 100%;
  min-height: calc(100vh - ${APP_TOP_BAR_HEIGHT}px - ${APP_FOOTER_HEIGHT}px);
`;
