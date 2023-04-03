
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import React from "react";
import Colors from "../../styles/colors";


// ===========================================================================
// MAIN COMPONENT
// ===========================================================================

interface RememberProps {
    title?: string;
    subTile?: string;
}

export const Remember = React.memo((props: RememberProps) => {
    const { title, subTile } = props;

    return (
        <StyledWrapper>
            <StyledContainer>
                <StyledText>{title || ""}</StyledText> 
                <h1 className={hrCss} />
                <StyledSubTile>{subTile || ""}</StyledSubTile> 
            </StyledContainer>
        </StyledWrapper>
    )
});

// ===========================================================================
// CSS
// ===========================================================================

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 8px;
  background: ${Colors.DARK_6};
  position: relative;
  justify-content: center;
  color: ${Colors.LIGHT};
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
  height: 144px ;
`;

const StyledText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.11px;
    color: ${Colors.PRIMARY_3};
    width: 100%;
`;

const StyledSubTile = styled.div`
    font-family: 'Hiragino Kaku Gothic Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: ${Colors.LIGHT};
    width: 100%;
`;

const hrCss = css`
    margin: 10px 0 8px ;
    background: ${Colors.LIGHT};
    height: 1px ;
    width: 56px;
`;

const StyledContainer =  styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
