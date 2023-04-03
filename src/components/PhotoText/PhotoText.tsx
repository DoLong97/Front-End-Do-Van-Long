
import styled from "@emotion/styled";
import React from "react";
import Colors from "../../styles/colors";
import { css } from "@emotion/css";
import Image50 from "../../assets/icons/50.png";
import Imaged01 from "../../assets/images/d01.jpg";

// ===========================================================================
// MAIN COMPONENT
// ===========================================================================

interface PhotoProps {
    text?: string;
    perCent?: string
}

export const PhotoText = React.memo((props: PhotoProps) => {
    const { text, perCent } =  props;

    return (
        <StyledWrapperPhotoText>
            <img
                src={Imaged01}
                alt={""}
                className={imageCss}
            />
            <PhotoTextPercentContainer>
                <PhotoTextPercent text={text} perCent={perCent}/>
            </PhotoTextPercentContainer>
        </StyledWrapperPhotoText>
        
    )
});

function PhotoTextPercent(props: PhotoProps){
    const { text, perCent } =  props;

    return (
        <StyledWrapper>
            <img
                src={Image50}
                alt={""}
                className={imageCss}
            />
            <StyledTagText>
                <StyledText>{text || ""}</StyledText>
                <StyledTextPercent>{(perCent || 0) + "%"} </StyledTextPercent>
            </StyledTagText>
            
        </StyledWrapper>

        
    )
};

// ===========================================================================
// CSS
// ===========================================================================

const  StyledWrapperPhotoText = styled.div`
  display: flex;
  align-items: center;
  width: 540px;
  height: 316px;
  background: transparent;
  padding: 0;
  position: relative;
  justify-content: center;
  cursor: pointer;
`;

const PhotoTextPercentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start ;
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 181px;
  height: 181px;
  background: transparent;
  padding: 0;
  position: relative;
  justify-content: center;
  cursor: pointer;
`;

const StyledTagText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start ;
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StyledTextPercent = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.15px;
    color: ${Colors.LIGHT};
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    text-shadow: 0px 0px 6px #FC7400;
    width: 50px ;
`;

const StyledText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: ${Colors.LIGHT};
    text-align: center;
    text-shadow: 0px 0px 6px #FC7400;

`;

const imageCss =  css`
    width: 100% ;
    height: 100% ;
    object-fit: cover;
`;
