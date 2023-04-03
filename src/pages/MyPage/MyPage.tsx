
import styled from "@emotion/styled";
import React, { memo, useEffect, useState } from "react";
import { getTopPages, TopPageProps } from "../../api/TopPage.api";
import { Hex } from "../../components/Hex/Hex";
import { Section } from "../../components/Section/Section";
import IconKnifeImage from "../../assets/icons/icon_knife.png";
import { COMMON_PAGE_WIDTH } from "../../constants/appDimension";
import { Photo } from "../../components/Photo/Photo";
import { Button } from "../../components/Button";
import { css } from "@emotion/css";
import { PhotoText } from "../../components/PhotoText/PhotoText";
import Colors from "../../styles/colors";
import ChartImage from "../../assets/images/main_graph.png";

 function _MyPage() {

    const [myPages, setMyPages] = useState<TopPageProps[]>([])

    useEffect(() => {
        getTopPages().then((res) => setMyPages(res));
    }, []);

    return (
        <StyledWrapper>

            <Section>
                <StyledTop>
                    <PhotoText text="05/21" perCent="75"/>
                    <StyledContainerChart>
                        <img  src={ChartImage} alt="" className={imageCss}/>
                    </StyledContainerChart>
                </StyledTop>
            </Section>

            <Section>
                <StyledHex>
                    <Hex text="Morning"/>
                    <Hex text="Lunch"/>
                    <Hex text="Dinner"/>
                    <Hex text="Snack" iconUrl={IconKnifeImage}/>
                </StyledHex>
            </Section>

            <Section>
                <StyledPhoto>
                    {myPages?.map((_photo) => (
                        <Photo 
                            key={_photo.id}
                            urlImage={_photo.urlImage}
                            date={_photo.date}
                        />
                    ))}
                    
                </StyledPhoto>
            </Section>

            <Section className={SectionButtonCss}>
                <Button>記録をもっと見る</Button>
            </Section>

        </StyledWrapper>
  );
}

export const MyPage = memo(_MyPage);


const StyledWrapper =  styled.div`
    width: 100%;
    margin: 0 0 64px;
`;

const StyledHex = styled.div`
    width: 894px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto ;
    height: 173px ;
    margin-bottom: 8px;
`;

const StyledPhoto = styled.div`
    width: ${COMMON_PAGE_WIDTH}px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin: 0 auto ;
`;

const SectionButtonCss = css`
    margin-top: 28px;
`;

const StyledContainerChart = styled.div`
    width: calc(100% - 540px);
    height: 100% ;
    background-color: ${Colors.DARK_6} ;
    padding: 0 ;
`;

const StyledTop = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 316px;
    padding: 0;
    justify-content: space-between;
`;

const imageCss = css`
    width: 100% ;
    height: 100%;
    object-fit: contain ;
`;