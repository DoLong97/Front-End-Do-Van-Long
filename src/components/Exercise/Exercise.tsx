import styled from "@emotion/styled";
import React from "react";
import Colors from "../../styles/colors";
import { css } from "@emotion/css";


// ===========================================================================
// MAIN COMPONENT
// ===========================================================================

interface ExerciseProps {
    time?: string;
    text?: string;
    kcal?: string;
}

export const Exercise = React.memo((props: ExerciseProps) => {
    const { kcal,text, time } = props;

    return (
        <StyledWrapper>
            <div className={leftCss}>
                <div className={pointCss}>●</div>
                <div className={contentCss}>
                    <div className={textCss}>{text}</div>
                    <div className={kcalCss}>{kcal}</div>
                </div>
            </div>
            <div className={timeCss}>{time}</div>
        </StyledWrapper>
    )
});

// ===========================================================================
// CSS
// ===========================================================================

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background: transparent;
  width: 100%;
  padding: 8px 0 4px 0;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.GRAY_4};

`;

const contentCss = css`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const leftCss  = css`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: flex-start;
    gap: 3px;
`;

const pointCss = css`
    font-family: 'Hiragino Kaku Gothic Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 5px;
    line-height: 7px;
    letter-spacing: 0.015px;
    color: ${Colors.LIGHT};
    margin-top: 8px;
    padding: 4px;
`;

const kcalCss = css`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.075px;
    color: ${Colors.PRIMARY_3};
`;

const textCss = css`
    font-family: 'Hiragino Kaku Gothic Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.075px;
    color: ${Colors.LIGHT};
`;

const timeCss = css`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: right;
    letter-spacing: 0.09px;
    color: ${Colors.PRIMARY_3};
    margin-right: 15px;
`;
