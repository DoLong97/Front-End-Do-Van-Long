import styled from "@emotion/styled";
import React from "react";
import Colors from "../../styles/colors";
import { css } from "@emotion/css";


// ===========================================================================
// MAIN COMPONENT
// ===========================================================================

interface ColumnProps {
    date?: string;
    urlImage?: string;
    title?: string;
    tag?: string;
}

export const Column = React.memo((props: ColumnProps) => {
  const { date, urlImage, title, tag } =   props;
  return(
  <StyledWrapper>
    <StyledContainer>
      <img
          src={urlImage}
          alt={""}
          className={imageCss}
      />
      <StyledTagText>
          <StyledText>{date || ""}</StyledText>
      </StyledTagText>
      
    </StyledContainer>
    <StyledContent>
      <StyledTitle>{title || ""}</StyledTitle>
      <StyledTag>{tag || ""}</StyledTag>
    </StyledContent>
  </StyledWrapper>
)});

// ===========================================================================
// CSS
// ===========================================================================

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 234px;
  padding: 0;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background: transparent;
  padding: 0;
  position: relative;
  justify-content: center;
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
  width: 144px;
  height: 24px;
  background: ${Colors.PRIMARY_3} ;
  padding: 7px 8px;
`;

const StyledContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 0;
`;

const StyledTitle = styled.div`
  font-family: 'Hiragino Kaku Gothic Pro';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.075px;
  color: ${Colors.DARK_5};
  text-overflow: ellipsis;
  width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
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

const StyledTag = styled.div`
  font-family: 'Hiragino Kaku Gothic Pro';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.06px;
  color: ${Colors.PRIMARY_4};
`;

const imageCss =  css`
    width: 100% ;
    height: 100% ;
    object-fit: cover;
`
