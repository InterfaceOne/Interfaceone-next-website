import styled from "styled-components";
import tw from "twin.macro";

const Header = styled.div`
  ${tw`flex justify-between items-center `}
`;

const Title = styled.div`
  ${tw`font-semibold text-xl`}
`;

const IconWrapper = styled.div`
  ${tw``}
`;

export { Header, IconWrapper, Title };
