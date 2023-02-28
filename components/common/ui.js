import React from "react";
import * as S from "../Stepper.style";

export default function Ui(props) {
  const { number, stepheader, stepcontent } = props;
  return (
    <>
      <S.MethodologystepsWrapper>
        <S.Row className="Col Colmd2">
          <S.NoGutters>
            <S.Main>
              <S.Column>
                <S.ColMd2>
                  <S.StepWrapper>
                    <S.CenterSquare>
                      <S.CentricCircle>
                        <S.CentricCircle2>
                          <S.CentricCircle3></S.CentricCircle3>
                        </S.CentricCircle2>
                      </S.CentricCircle>

                      <S.CoreCircle>
                        <S.MethodologyPulsatebck className="pulsate-bck"></S.MethodologyPulsatebck>
                      </S.CoreCircle>
                      <S.StepNumber>{number}</S.StepNumber>
                    </S.CenterSquare>
                    <S.StepContentWrapper>
                      <S.StepHeader>{stepheader}</S.StepHeader>
                      <S.StepContent>{stepcontent}</S.StepContent>
                    </S.StepContentWrapper>
                  </S.StepWrapper>
                </S.ColMd2>
              </S.Column>
            </S.Main>
          </S.NoGutters>
        </S.Row>
      </S.MethodologystepsWrapper>
    </>
  );
}
