import styled from "@emotion/styled";
import React from "react";
import { APP_TOP_BAR_HEIGHT, COMMON_PAGE_WIDTH } from "../../constants/appDimension";
import Colors from "../../styles/colors";
import { ActionRight } from "./components/ActionRight";
import { Logo } from "./components/Logo";


// ===========================================================================
// MAIN COMPONENT
// ===========================================================================

export const Header = React.memo(() => (
  <StyledWrapper>
    <StyledContainer>
        <Logo/>
        <ActionRight/>
    </StyledContainer>
    
  </StyledWrapper>
));

// ===========================================================================
// CSS
// ===========================================================================

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: ${APP_TOP_BAR_HEIGHT}px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.160784);
  background: ${Colors.DARK_5};
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  position: fixed;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between ;
  width: ${COMMON_PAGE_WIDTH}px ;
  margin: 0 auto;
`;
