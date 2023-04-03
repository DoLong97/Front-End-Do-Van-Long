import styled from "@emotion/styled";
import React from "react";
import Colors from "../../styles/colors";
import BoxImage from "../../assets/images/hex-48.png";
import IconCupImage from "../../assets/icons/icon_cup.png";
import IconKnifeImage from "../../assets/icons/icon_knife.png";
import { css } from "@emotion/css";


// ===========================================================================
// MAIN COMPONENT
// ===========================================================================

interface HexProps {
    iconUrl?: string;
    text?: string;
    imageUrl?: string;
}

export const Hex = React.memo((props: HexProps) => {
    const { iconUrl,text, imageUrl } = props;

    return (
        <StyledWrapper>
            <img
                width={116}
                height={134}
                src={imageUrl || BoxImage}
                alt={""}
                className={imageCss}
            />
            <StyledContainer>
                <div>
                <img
                    width={56}
                    height={56}
                    src={iconUrl ? IconCupImage : IconKnifeImage}
                    alt={""}
                    style={{
                        objectFit: "contain"
                    }}
                />
                <StyledText>{text || ""}</StyledText>
                </div>
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
  height: 136px;
  background: transparent;
  width: 136px;
  padding: 0 10px;
  position: relative;
  justify-content: center;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between ;
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
`;

const StyledText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center ;
    color: ${Colors.LIGHT};
`;


const imageCss =  css`
    object-fit: cover;
`
