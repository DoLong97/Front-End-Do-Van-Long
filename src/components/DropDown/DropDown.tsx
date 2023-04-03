
import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Colors from "../../styles/colors";
import Menu1Image from "../../assets/icons/icon_menu.png";
import Menu2Image from "../../assets/icons/icon_close.png";

import { css } from "@emotion/css";
import { COLUMN_PATH } from "../../router/AppRouter";



// ===========================================================================
// MAIN COMPONENT
// ===========================================================================


const DropdownList = "dropdownList";

export const DropDown = React.memo(() => {

    const containerRef =  useRef<HTMLDivElement>(null);

    const [open, setOpen] = useState(false);

    const handleToggle =  useCallback(() => {
        document.getElementById(DropdownList)?.classList.add(showDropDown);
        setOpen(true)
    },[])

    useEffect(() => {
    
        const containerParent = containerRef.current?.parentElement;
        if (!containerParent) return () => undefined;
    
        const handler = (event: MouseEvent) => {

          const container = containerRef.current;

          if (!container) return;

          const isClickInside = container.contains(event.target as Node);

          if (isClickInside) return;

          setOpen(false)
          document.getElementById(DropdownList)?.classList.remove(showDropDown);

        };
    
        const options: AddEventListenerOptions = {
          capture: true, // Make sure it can't be stopped by others' stopPropagation
        };
    
        document.addEventListener("click", handler, options);
    
        return () => {
            document.removeEventListener("click", handler, options);
        };
      }, []);


    return (
        <StyledWrapper ref={containerRef} onClick={handleToggle}>
            <img
                width={32}
                height={32}
                src={!open ? Menu1Image : Menu2Image}
                alt="menu"
                style={{
                    objectFit: "contain"
                }}
            />

            <div id={DropdownList} className={dropdownContentCss}>
                <a href="#1">自分の記録</a>
                <a href="#2">体重グラフ</a>
                <a href="#3">目標</a>
                <a href="#4">選択中のコース</a>
                <a href={window.location.origin + COLUMN_PATH} >コラム一覧</a>
                <a href="#6">設定</a>
            </div>
        </StyledWrapper>
    )
});

// ===========================================================================
// CSS
// ===========================================================================

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
`;

const showDropDown = css`
    display: inline-block !important;
`;

const dropdownContentCss = css`
    display: none;
    position: absolute;
    background-color: ${Colors.DARK_6};
    min-width: 280px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px ${Colors.DARK_5};
    right: 0;
    z-index: 1;
    top: 30px;

    a {
        
        padding: 22px 32px;
        text-decoration: none;
        display: block;
        background-color: ${Colors.GRAY_4};
        color: ${Colors.LIGHT};

        &:hover {
            opacity: 0.6 ;
        }
    }
  `;