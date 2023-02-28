import * as S from "./testing.style";

function TestingCards(props) {
  return (
    <S.Card>
      <S.Image1 src={props.image} alt="" />
      <S.Title>{props.title}</S.Title>
      <S.Content>{props.cont}</S.Content>
    </S.Card>
  );
}
export default TestingCards;
