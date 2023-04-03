import styled from "@emotion/styled";
import React, { useCallback, useEffect } from "react";
import IconUp from "../../assets/icons/component_scroll.png";
import { css } from "@emotion/css";
import { APP_TOP_BAR_HEIGHT } from "../../constants/appDimension";

// ===========================================================================
// MAIN COMPONENT
// ===========================================================================

const SCROLL_TOP_ID = "scroll-top-id";

export const ButtonScroll = () => {

    useEffect(() => {

        const btnScroll = document.getElementById(SCROLL_TOP_ID);

        
        function handleScroll(){   
            if (document.body.scrollTop > APP_TOP_BAR_HEIGHT || document.documentElement.scrollTop > APP_TOP_BAR_HEIGHT) {
                if (btnScroll) {
                    btnScroll.style.display = "block";
                }
              } else {
                if (btnScroll) {
                    btnScroll.style.display = "none";
                }
              }
        }

        document.addEventListener("scroll", handleScroll)

        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
        
    })

    const handleScrollTop = useCallback(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },[])

    return (
      <StyledWrapper
        onClick={handleScrollTop}
        id={SCROLL_TOP_ID}
      >
          <img src={IconUp} alt="" className={imageCss}/>
      </StyledWrapper>

    )
};

// ===========================================================================
// CSS
// ===========================================================================

const StyledWrapper = styled.div`
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 96px;
    bottom: 272px;
    z-index: 3;
    cursor: pointer;
    display: none ;

    &:hover {
        opacity: 0.8;
    }
`;

const imageCss = css`
    width: 100% ;
    height: 100%;
    object-fit: contain;
`;
