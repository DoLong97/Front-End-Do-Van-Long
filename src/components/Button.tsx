import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import Colors from "../styles/colors";


// ===========================================================================
// MAIN COMPONENT
// ===========================================================================

interface ButtonProps {
    onClick?: () => void;
    className?: string;
    children?: ReactNode;
}

export const Button = ( props: ButtonProps) => {

    const { children, ...rest } =  props;

    return (
      <StyledWrapper {...rest}>
        <StyledButton>
          {children}
        </StyledButton>
      </StyledWrapper>

    )
};

// ===========================================================================
// CSS
// ===========================================================================

const StyledButton = styled.button`
  background: ${Colors.PRIMARY_LINEAR_GRADIENT};
  border: none;
  color: white;
  padding: 14px 4px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border-radius: 4px;
  font-family: 'Hiragino Kaku Gothic Pro';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  width: 296px;

  &:hover {
    opacity: 0.7;
  }
`;

const StyledWrapper = styled.div`
    width: 485px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;
