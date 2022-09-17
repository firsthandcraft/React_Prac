// import styled, { css } from 'styled-components';
// https://styled-components.com/docs/basics#adapting-based-on-props
const StyledUntitled-1 = styled.div`
  padding: 10px;
  color: #FFFFFF;
  background-color: ${(props) => props.backgroundColor || '#304FFE'};

  &:hover {
    background-color: ${(props) => props.hoverColor || '#1E40FF'};
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0,0,0,0.2);
  }

  ${(props) => {
    return props.huge && css`
      width: 10rem;
      height: 10rem;
    `
  }}
`;