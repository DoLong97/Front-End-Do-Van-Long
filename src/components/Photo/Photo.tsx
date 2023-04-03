import styled from "@emotion/styled";
import React from "react";
import Colors from "../../styles/colors";
import { css } from "@emotion/css";


// ===========================================================================
// MAIN COMPONENT
// ===========================================================================

interface PhotoProps {
    date?: string;
    urlImage?: string
}

export const Photo = React.memo((props: PhotoProps) => {
    const { date, urlImage } =  props;

    return (
        <StyledWrapper>
            <img
                src={urlImage || ""}
                alt={date}
                className={imageCss}
            />
            <StyledTagText>
                <StyledText>{date || ""}</StyledText>
            </StyledTagText>
            
        </StyledWrapper>
    )
});

// ===========================================================================
// CSS
// ===========================================================================

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 234px;
  background: transparent;
  padding: 0;
  position: relative;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledTagText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start ;
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: 0;
  width: 120px;
  height: 32px;
  background: ${Colors.PRIMARY_3} ;
  padding: 7px 8px;
`;

const StyledText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.15px;
    color: ${Colors.LIGHT};
`;

const imageCss =  css`
    width: 100% ;
    height: 100% ;
    object-fit: cover;
`
