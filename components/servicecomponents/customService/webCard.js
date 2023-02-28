import * as S from "./webTechnology.style";

const WebCard = (props) => {
  return (
    <>
      <S.Card>
        <S.Webcards>
          <S.Image1 src={props.image} alt="" />
          <S.Title>{props.title}</S.Title>
        </S.Webcards>
        <S.Content>{props.content}</S.Content>
      </S.Card>
    </>
  );
};
export default WebCard;
