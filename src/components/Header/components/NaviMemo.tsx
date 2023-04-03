import styled from "@emotion/styled";
import React from "react";
import Colors from "../../../styles/colors";

interface NaviMemoProps {
    count?: number;
    icon: string;
    text: string;
    active: boolean
}

export function NaviMemo(props: NaviMemoProps) {
    const { count = 0 , icon , text, active } =  props;

  return (
      <StyledNaviMemoWrapperCss>

        {count > 0 && <StyledInfoCount>
            {count}
        </StyledInfoCount>}

        <StyledIconInfo>
          <img
            width={32}
            height={32}
            src={icon}
            alt={text}
            style={{
                objectFit: "contain"
            }}
        />
        </StyledIconInfo>

        <StyledText style={active ? { color: Colors.PRIMARY_4} : { color: Colors.LIGHT }}>
            {text}
        </StyledText>

      </StyledNaviMemoWrapperCss>
  );
}

// ===========================================================================
// CSS
// ===========================================================================

const StyledNaviMemoWrapperCss = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 48px;
  cursor: pointer;
  gap: 8px;
  width: 160px;
  position: relative;
`;

const StyledInfoCount = styled.div`
  position: absolute;
  z-index: 3;
  top: 7px;
  left: 20px ;
  height: 16px;
  width: 16px;
  background: ${Colors.PRIMARY_5};
  color: ${Colors.LIGHT};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  font-family: 'Inter';
`;

const StyledIconInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
`;

const StyledText = styled.div`
    font-weight: 300;
    font-size: 16px;
    line-height: 23px;
`;
