import styled from "@emotion/styled";
import React from "react";
import { APP_FOOTER_HEIGHT, COMMON_PAGE_WIDTH } from "../../constants/appDimension";
import Colors from "../../styles/colors";


// ===========================================================================
// MAIN COMPONENT
// ===========================================================================

interface FooterProps {
    id: string; 
    value: string
}

const footers: FooterProps[] = [
    {
        id: "1",
        value: "会員登録"
    },
    {
        id: "2",
        value: "運営会社"
    },
    {
        id: "3",
        value: "利用規約"
    },
    {
        id: "4",
        value: "個人情報の取扱について"
    },
    {
        id: "5",
        value: "特定商取引法に基づく表記"
    },
    {
        id: "6",
        value: "お問い合わせ"
    }
]

export const Footer = React.memo(() => (
  <StyledWrapper>
    <StyledContainer>
        {footers.map((_footer) => (
            <StyledItem
                key={_footer.id}
            >
                {_footer.value}
            </StyledItem>
        ))}
        
    </StyledContainer>
    
  </StyledWrapper>
));

// ===========================================================================
// CSS
// ===========================================================================

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: ${APP_FOOTER_HEIGHT}px;
  background: ${Colors.DARK_5};
  width: 100%;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start ;
  width: ${COMMON_PAGE_WIDTH}px ;
  margin: 0 auto;
  gap: 45px;
`;

const StyledItem = styled.div`
    font-family: 'Hiragino Kaku Gothic Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.033px;
    color: ${Colors.LIGHT};
    cursor: pointer;
`;
