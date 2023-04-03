
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import React, { memo, useEffect, useState } from "react";
import { getMyRecordDiary, getMyRecordExercises, MyRecordProps, RecordDiaryProps } from "../../api/MyRecord.api";
import { Button } from "../../components/Button";
import { Diary } from "../../components/Diary/Diary";
import { Exercise } from "../../components/Exercise/Exercise";
import { Record } from "../../components/Record/Record";
import { Section } from "../../components/Section/Section";
import { COMMON_PAGE_WIDTH } from "../../constants/appDimension";
import Colors from "../../styles/colors";
import ChartImage from "../../assets/images/body-record.png";

function _MyRecordPage() {

    const [exercises, setExercises] = useState<MyRecordProps[]>([])
    const [diary, setDiary] = useState<RecordDiaryProps[]>([])

    useEffect(() => {
        getMyRecordExercises().then((res) => setExercises(res));
        getMyRecordDiary().then((res) => setDiary(res));
    }, []);

    return (
        <StyledWrapper>


            <Section>
                <StyledRecord>
                    <Record textBody="BODY RECORD" text="自分のカラダの記録"/>
                    <Record textBody="MY EXERCISE" text="自分の運動の記録"/>
                    <Record textBody="MY DIARY" text="自分の日記"/>
                </StyledRecord>
            </Section>

            <Section>
                <StyledChart>
                    <img  src={ChartImage} alt="" className={imageCss}/>
                </StyledChart>
            </Section>

            <Section>
                <StyledExerciseContainer>
                    <StyledTitle>
                        <div className={exerciseCss}>MY EXERCISE</div>
                        <div className={dateCss}>2021.05.21</div>
                    </StyledTitle>
                    <StyledExercise>
                        {exercises?.map((_exercise) => (
                            <Exercise
                                {..._exercise}
                                key={_exercise.id}
                            />
                        ))}
                    </StyledExercise>
                </StyledExerciseContainer>
            </Section>

            <Section 
                title="MY DIARY" 
                className={SectionDiaryCss}
            >
                <StyledDiary>
                    {diary?.map((_diary) => (
                        <Diary
                            {..._diary}
                            key={_diary.id}
                        />
                    ))}
                </StyledDiary>
            </Section>

            <Section className={SectionButtonCss}>
                <Button>自分の日記をもっと見る</Button>
            </Section>

        </StyledWrapper>
  );
}

export const MyRecordPage = memo(_MyRecordPage);


const StyledWrapper =  styled.div`
    width: 100%;
    margin-top: 56px;
    margin-bottom: 64px;
`;

const StyledDiary = styled.div`
    width: ${COMMON_PAGE_WIDTH}px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin: 0 auto ;
`;


const StyledRecord = styled.div`
    width: ${COMMON_PAGE_WIDTH}px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
    margin: 0 auto ;
    margin-bottom: 56px;
`;

const SectionButtonCss = css`
    margin-top: 24px;
`;

const StyledExercise = styled.div`
    width: 100%;
    margin: 0 auto ;
    height: 192px;
    background: ${Colors.DARK_5};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    grid-auto-rows: 8px;
    padding: 0;
    overflow: auto;
`;

const StyledExerciseContainer = styled.div`
    width: ${COMMON_PAGE_WIDTH - 48}px;
    margin: 0 auto ;
    background: ${Colors.DARK_5};
    padding: 16px 24px;
    margin-bottom: 56px;
`;

const StyledTitle = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: flex-start;
`;

const exerciseCss =  css`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.15px;
    color: ${Colors.LIGHT};
    width: 96px;
`;

const dateCss = css`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.11px;
    color: ${Colors.LIGHT};
`;

const SectionDiaryCss = css`
    width: ${COMMON_PAGE_WIDTH }px !important;
    margin: 0 auto ;
`;

const StyledChart = styled.div`
    height: 304px ;
    width: ${COMMON_PAGE_WIDTH }px;
    margin: 0 auto ;
    margin-bottom: 56px;
`;

const imageCss = css`
    width: 100% ;
    height: 100%;
    object-fit: contain ;
`;
