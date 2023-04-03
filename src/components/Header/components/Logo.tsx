import { css } from "@emotion/css";
import React from "react";
import LogoImage from "../../../assets/logo.png";
import { HOME_PAGE_PATH } from "../../../router/AppRouter";

export function Logo() {
  return (
      <div className={logoWrapperCss}>
        <a href={window.location.origin + HOME_PAGE_PATH} >
          <img
            width={109}
            height={40}
            src={LogoImage}
            alt="Logo"
          />
        </a>
      </div>
  );
}

// ===========================================================================
// CSS
// ===========================================================================

const logoWrapperCss = css`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  height: 64px;
  width: 144px;
  cursor: pointer;

  a {
    text-decoration: none;
  }
`;
