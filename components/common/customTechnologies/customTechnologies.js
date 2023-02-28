import Image from "next/image";
import * as S from "./customTechnologies.styles";

const CustomTechnologies = ({ data }) => {
  return (
    <S.Technologies>
      {data &&
      <S.Main>
        <S.TransformationJourney>
          <S.Circle>
            <S.MobileDetails>
              <S.IconJourney>
                <Image src={data?.icon1?.url} alt="mobile image" width={75} height={75} />
              </S.IconJourney>
              <S.Content>
                <S.Heading>{data?.title1}</S.Heading>
                <S.Para>{data?.title1Content}</S.Para>
                <S.Container>
                  <Image className="techImages" width={25} height={25} src={data?.title1Image1?.url} alt="apple" />
                  <Image className="techImages" width={25} height={25} src={data?.title1Image2?.url} alt="android" />
                  <Image className="techImages" width={25} height={25} src={data?.title1Image3?.url} alt="flutter" />
                  <Image className="techImages" width={25} height={25} src={data?.title1Image4?.url} alt="x image" />
                  <Image className="techImages" width={25} height={25} src={data?.title1Image5?.url} alt="react" />
                </S.Container>
              </S.Content>
            </S.MobileDetails>

            <S.DBDetails>
              <S.IconJourney1>
                <Image src={data?.icon2?.url} alt="database Image" width={75} height={75} />
              </S.IconJourney1>
              <S.Content1>
                <S.Heading>{data?.title2}</S.Heading>
                <S.Para>{data?.title2Content}</S.Para>
                <S.Container>
                  <Image  className="techImages" width={25} height={25} src={data?.title2Image1?.url} alt="mongodb" />
                  <Image  className="techImages" width={25} height={25} src={data?.title2Image2?.url} alt="postgre" />
                  <Image  className="techImages" width={25} height={25} src={data?.title2Image3?.url} alt="Mysql" />
                </S.Container>
              </S.Content1>
            </S.DBDetails>
            <S.AnimationCircle></S.AnimationCircle>
            <S.BackendDetails>
              <S.IconJourney2>
                <Image src={data?.icon3?.url} alt="backend image" width={75} height={75} />
                <S.Content2>
                  <S.Heading2>{data?.title3}</S.Heading2>
                  <S.Para>{data?.title3Content}</S.Para>
                  <S.Container>
                    <Image  className="techImages" width={25} height={25} src={data?.title3Image1?.url} alt="javascript" />
                    <Image  className="techImages" width={25} height={25} src={data?.title3Image2?.url} alt="python" />
                    <Image  className="techImages" width={25} height={25} src={data?.title3Image3?.url} alt="ruby on rails" />
                  </S.Container>
                </S.Content2>
              </S.IconJourney2>
            </S.BackendDetails>
            <S.FrontendDetails>
              <S.IconJourney3>
                <Image src={data?.icon4?.url} alt="frontend image" width={75} height={75} />
                <S.Content3>
                  <S.Heading2>{data?.title4}</S.Heading2>
                  <S.Para>{data?.title4Content}</S.Para>
                  <S.Container>
                    <Image className="techImages" width={25} height={25} src={data?.title4Image1?.url} alt="react" />
                    <Image className="techImages" width={25} height={25} src={data?.title4Image2?.url} alt="angular" />
                    <Image className="techImages" width={25} height={25} src={data?.title4Image3?.url} alt="vue" />
                  </S.Container>
                </S.Content3>
              </S.IconJourney3>
            </S.FrontendDetails>
          </S.Circle>
        </S.TransformationJourney>
        <S.MobileTransformation>
          <S.CardDetails>
            <S.IconContainer>
              <Image src={data?.icon1?.url} alt="mobile image" width={120} height={100} />
            </S.IconContainer>
            <S.CardContent>
              <S.Header>{data?.title1}</S.Header>
              <S.Paragraph>{data?.title1Content}</S.Paragraph>
              <S.ImageContainer>
                <Image width={25} height={25} className="techImages" src={data?.title1Image1?.url} alt="apple" />
                <Image width={25} height={25} className="techImages" src={data?.title1Image2?.url} alt="android" />
                <Image width={25} height={25} className="techImages" src={data?.title1Image3?.url} alt="flutter" />
                <Image width={25} height={25} className="techImages" src={data?.title1Image4?.url} alt="x image" />
                <Image width={25} height={25} className="techImages" src={data?.title1Image5?.url} alt="react" />
              </S.ImageContainer>
            </S.CardContent>
          </S.CardDetails>

          <S.CardDetails>
            <S.IconContainer>
              <Image src={data?.icon2?.url} alt="database image" width={120} height={100}/>
            </S.IconContainer>
            <S.CardContent>
              <S.Header>{data?.title2}</S.Header>
              <S.Paragraph>{data?.title2Content}</S.Paragraph>
              <S.ImageContainer>
                <S.Images className="techImages" src={data?.title2Image1?.url} alt="mongodb" />
                <S.Images className="techImages" src={data?.title2Image2?.url} alt="postGre" />
                <S.Images className="techImages" src={data?.title2Image3?.url} alt="Mysql" />
              </S.ImageContainer>
            </S.CardContent>
          </S.CardDetails>
          <S.CardDetails>
            <S.IconContainer>
              <Image src={data?.icon3?.url} alt="backend image" width={120} height={100} />
            </S.IconContainer>
            <S.CardContent>
              <S.Header>{data?.title3}</S.Header>
              <S.Paragraph>{data?.title3Content}</S.Paragraph>
              <S.ImageContainer>
                <S.Images className="techImages" src={data?.title3Image1?.url} alt="javascript" />
                <S.Images className="techImages" src={data?.title3Image2?.url} alt="python" />
                <S.Images className="techImages" src={data?.title3Image3?.url} alt="ROR" />
              </S.ImageContainer>
            </S.CardContent>
          </S.CardDetails>
          <S.CardDetails>
            <S.IconContainer>
              <Image src={data?.icon4?.url} alt="frontend image" width={120} height={100}/>
            </S.IconContainer>
            <S.CardContent>
              <S.Header>{data?.title4}</S.Header>
              <S.Paragraph>{data?.title4Content}</S.Paragraph>
              <S.ImageContainer>
                <S.Images className="techImages" src={data?.title4Image1?.url} alt="react" />
                <S.Images className="techImages" src={data?.title4Image2?.url} alt="angular" />
                <S.Images className="techImages" src={data?.title4Image3?.url} alt="vue" />
              </S.ImageContainer>
            </S.CardContent>
          </S.CardDetails>
        </S.MobileTransformation>
      </S.Main>}
    </S.Technologies>
  );
};
export default CustomTechnologies;
