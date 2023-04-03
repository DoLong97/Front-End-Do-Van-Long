
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import React, { memo, useEffect, useState } from "react";
import { ColumnsPageProps, getColumnsPages } from "../../api/ColumnsPage.api";
import { Button } from "../../components/Button";
import { Column } from "../../components/Column/Column";
import { Remember } from "../../components/Remember/Remember";
import { Section } from "../../components/Section/Section";
import { COMMON_PAGE_WIDTH } from "../../constants/appDimension";


function _ColumnPage() {

    const [columnPages, setColumnPages] = useState<ColumnsPageProps[]>([])

    useEffect(() => {
        getColumnsPages().then((res) => setColumnPages(res));
    }, []);

    console.log('columnPages', columnPages)

    return (
        <StyledWrapper>
            <Section>
                <StyledRemember>
                    <Remember title="RECOMMENDED COLUMN" subTile="オススメ"/>
                    <Remember title="RECOMMENDED DIET" subTile="オススメ"/>
                    <Remember title="RECOMMENDED BEAUTY" subTile="オススメ"/>
                    <Remember title="RECOMMENDED HEALTH" subTile="オススメ"/>
                </StyledRemember>
            </Section>
            <Section>
                <StyledColumns>
                    {columnPages?.map((_columns) => (
                        <Column
                            {..._columns}
                            key={_columns.id}
                        />
                    ))}
                </StyledColumns>
            </Section>
            <Section className={SectionButtonCss}>
                <Button>コラムをもっと見る</Button>
            </Section>
        </StyledWrapper>
  );
}

export const ColumnPage = memo(_ColumnPage);


const StyledWrapper =  styled.div`
    width: 100%;
    margin-top: 56px;
    margin-bottom: 64px;
`;

const StyledColumns =  styled.div`
    width: ${COMMON_PAGE_WIDTH}px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin: 0 auto ;
`;

const StyledRemember =  styled.div`
    width: ${COMMON_PAGE_WIDTH}px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    margin: 0 auto 56px;
`;

const SectionButtonCss = css`
    margin-top: 24px
`;
