
import styled from "@emotion/styled";
import React from "react";
import Colors from "../../styles/colors";


// ===========================================================================
// MAIN COMPONENT
// ===========================================================================

interface DiaryProps {
    date?: string;
    content?: string;
}

export const Diary = React.memo((props: DiaryProps) => {
    const { date, content } = props;

    return (
        <StyledWrapper>
            <StyledTextDate>{date || ""}</StyledTextDate> 
            <StyledContainer>
                <StyledContent>{content || ""}</StyledContent> 
            </StyledContainer>   
        </StyledWrapper>
    )
});

// ===========================================================================
// CSS
// ===========================================================================

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;
  background: transparent;
  position: relative;
  justify-content: flex-start;
  background: ${Colors.LIGHT};
  border: 2px solid ${Colors.GRAY_4};
  flex-direction: column;
  gap: 8px;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start ;
`;

const StyledTextDate = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${Colors.DARK_5};
    width: 147px ;
`;

const StyledContent = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${Colors.DARK_5};
    text-overflow: ellipsis;
    width: 100%;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
    word-break: break-all;

`;
