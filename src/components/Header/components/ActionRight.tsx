import styled from "@emotion/styled";
import { NaviMemo } from "./NaviMemo";

import Menu1Image from "../../../assets/icons/icon_memo.png";
import Menu2Image from "../../../assets/icons/icon_challenge.png";
import Menu3Image from "../../../assets/icons/icon_info.png";
import { DropDown } from "../../DropDown/DropDown";
import { HOME_PAGE_PATH, RECORD_PATH } from "../../../router/AppRouter";

export function ActionRight() {

  return (
      <StyledActionRightWrapperCss>

        <StyledMenu>
          <a href={window.location.origin + RECORD_PATH} ><NaviMemo text="自分の記録" active={window.location && window.location?.pathname === RECORD_PATH} icon={Menu1Image}/></a>
          <a href={window.location.origin + HOME_PAGE_PATH} ><NaviMemo text="チャレンジ" active={false} icon={Menu2Image}/></a>
          <a href={window.location.origin + HOME_PAGE_PATH} ><NaviMemo text="お知らせ" active={false} icon={Menu3Image} count={1}/></a>
        </StyledMenu>

        <StyledIconMenu>
          <DropDown/>
        </StyledIconMenu>

      </StyledActionRightWrapperCss>
  );
}

// ===========================================================================
// CSS
// ===========================================================================

const StyledActionRightWrapperCss = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  cursor: pointer;
  gap: 16px;
  width: calc(100% - 144px);
`;

const StyledIconMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  cursor: pointer;
`;

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 48px;
  cursor: pointer;
  gap: 0;

  a {
    text-decoration: none;
  }
`;
