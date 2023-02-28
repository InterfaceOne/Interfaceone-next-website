import styled from "styled-components";
import tw from "twin.macro";

const ButtonContainer = styled.span`
  text-decoration: none;
  ${tw`relative py-2 px-5 bg-gold text-black rounded-xl`}
  border: 2px solid black;
  display: inline-flex;
  overflow: hidden;

  &:hover {
    ${tw` text-gold border-2 border-gold `}
  }

  &::before {
    content: "";
    position: absolute;
    /* ${tw` text-gold border-2 border-gold `} */
    top: var(--y);
    left: var(--x);
    transform: translate(-50%, -50%);
    width: 0px;
    height: 0px;
    border-radius: 50%;
    background-color: black;
    transition: width 0.5s, height 0.5s;
  }
  &:hover::before {
    overflow: hidden;

    width: 300px;
    height: 300px;
  }
`;
const Button = styled.span`
  ${tw`relative`};
  z-index: 10;
`;

export { ButtonContainer, Button };
