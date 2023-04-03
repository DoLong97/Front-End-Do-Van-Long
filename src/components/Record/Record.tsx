import styled from "@emotion/styled";
import React from "react";
import Colors from "../../styles/colors";
import MyRecommend1Image from "../../assets/images/MyRecommend-1.jpg";
import { css } from "@emotion/css";


// ===========================================================================
// MAIN COMPONENT
// ===========================================================================

interface RecordProps {
    imageUrl?: string;
    text?: string;
    textBody?: string
}

export const Record = React.memo((props: RecordProps) => {
  const { imageUrl, text, textBody} = props;
  return(
    <StyledWrapper>
      <img
          src={imageUrl || MyRecommend1Image}
          alt={""}
          className={imageCss}
      />
      <StyledBodyText>
          <StyledText>{textBody || ""}</StyledText>
          <StyledTextFullBackGround>{text || ""}</StyledTextFullBackGround>
      </StyledBodyText>
      
    </StyledWrapper>
  )
});

// ===========================================================================
// CSS
// ===========================================================================

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 288px;
  border: 24px solid ${Colors.PRIMARY_3};
  padding: 0;
  position: relative;
  justify-content: center;
`;

const StyledBodyText = styled.div`
 display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between ;
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: calc(100% - 48px);
  gap: 10px;
`;

const StyledText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.125px;
  color: ${Colors.PRIMARY_3};
`;  

const StyledTextFullBackGround = styled.div`
  font-family: 'Hiragino Kaku Gothic Pro';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  background: ${Colors.PRIMARY_4};
  color: ${Colors.LIGHT};
  padding: 0 24px;
`;

const imageCss =  css`
  width: 100% ;
  height: 100% ;
  object-fit: cover;
  background: #000000;
  mix-blend-mode: luminosity;
  opacity: 0.9;
`
