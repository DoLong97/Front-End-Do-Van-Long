import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import Colors from "../../styles/colors";


// ===========================================================================
// MAIN COMPONENT
// ===========================================================================

interface SectionProps {
    children: ReactElement;
    className?: string;
    title?: string;
}

export const Section = React.memo((props: SectionProps) => {
    const { children, className, title} = props;

    return (
        <StyledWrapper className={className}>
            {title && <StyledTitle>{title}</StyledTitle>}
            {children}
        </StyledWrapper>
    )
    
});

// ===========================================================================
// CSS
// ===========================================================================

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledTitle = styled.div`
    width: 100%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.11px;
    color: ${Colors.DARK_5};
`;