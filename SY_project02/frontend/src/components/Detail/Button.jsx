import styled from "styled-components";

export const ButtonBox = styled.div`
  font-family: "nbg", "맑은 고딕", HelveticaNeue, DroidSans, Sans-serif,
    Helvetica;
  margin-right: 10px;
  background-color: ${(props) => props.background};
  width: 200px;
  height: 35px;
  line-height: 35px;
  border-radius: 3px;
  font-size: 14px;
  text-align: center;
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.underline};

  &:active {
    background: #f2f2f2;
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0);
    position: relative;
    top: 2px;
  }

  /* &: {
    background: #006633;
    text-decoration: underline;
    color: #f2f2f2;
    a {
      color: #22aa;
    }
  } */
`;
