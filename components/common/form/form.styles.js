import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`flex flex-col w-full flex-wrap space-y-3  p-5`}
`;
const TextFieldGroup = styled.div`
  ${tw`flex space-x-3`}
`;
const CheckBoxGroup = styled.div`
  ${tw`flex`}
`;
const RadioButtonGroup = styled.div`
  ${tw`flex`}
`;
const ToggleButtonWrapper = styled.div`
  &::before {
    position: absolute;
    content: attr(data-left);
    font-size: 13px;
    top: 0.3rem;
    left: 8px;
    transition: all 0.3s ease-in-out;
  }
  &::after {
    content: attr(data-right);
    position: absolute;
    font-size: 13px;
    right: 8px;
    top: 0.3rem;
    transition: all 0.3s ease-in-out;
  }
  ${tw` select-none rounded-full relative`};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "gray")};

  height: 30px;
  z-index: 1;
  max-width: 6rem;
  .dialog-button {
    z-index: 1;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    padding: 3px 8px;
    background-color: ${(props) =>
    props.thumbRightBgColor ? props.thumbRightBgColor : "green"};
    color: ${(props) =>
    props.thumbRightTextColor ? props.thumbRightTextColor : "lightgreen"};
    min-width: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    min-width: unset;
    border-radius: 20px;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    transition: all 0.3s ease-in-out;
    top: 0.2rem;
    right: 0.2rem;
  }

  .disabled {
    background-color: ${(props) =>
    props.thumbLeftBgColor ? props.thumbLeftBgColor : "red"};
    left: 4.5px;
    color: ${(props) =>
    props.thumbLeftTextColor ? props.thumbLeftTextColor : "pink"};
    width: 48px;

    top: 0.2rem;
  }
  flex: 1;
  max-width: 6rem;
  transition: all 0.3s ease-in-out;
`;
const ModelFooter = styled.div`
  ${tw`flex justify-end items-end space-x-3`}
`;
const FormLayout = styled.div`
  ${tw`flex space-x-10 justify-start items-center w-full `}
  @media (max-width:520px){
  ${tw`space-x-0 space-y-0 flex flex-col justify-start items-start w-full `}

  }
 
`;

const FormComponent = styled.div`
  ${(props) => (props.type ? tw`w-2/12 mt-4  hover:outline-none   ` : tw` mt-4  w-full   `)};
 @media (max-width:768px){
  ${(props) => (props.type ? tw`w-2/12 mt-0  hover:outline-none   ` : tw` mt-0  w-full   `)};

 } 
 @media (max-width:520px){
  ${(props) => (props.type ? tw`w-2/12 mt-0 py-0 hover:outline-none   ` : tw` mt-0  w-full   `)};

 } 
 
`;

const Form = styled.form`
  ${tw`flex flex-col space-y-4 justify-start items-center p-5`}
`;
export {
  Container,
  CheckBoxGroup,
  TextFieldGroup,
  RadioButtonGroup,
  ToggleButtonWrapper,
  ModelFooter,
  FormLayout,
  FormComponent,
  Form,
};
