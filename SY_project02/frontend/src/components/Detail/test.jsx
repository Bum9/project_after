import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import * as React from "react";

export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 800px;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;

  h1 {
    margin-right: 700px;
  }
  //
`;

export const MainInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 716px;
  height: 60px;
  border: 1px solid #ddd;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  p,
  img {
    font-size: 18px;
    padding-bottom: 30px;
  }
`;
export const MainInnerCheckBox = styled.div`
  height: 50px;
  background-color: blue;
`;
export const FirstContainer = styled.div`
  background-color: #fff;
  height: ${(props) => props.height + "px"};
  ${(props) => props.width + "px"}

  width: 716px;
  overflow: hidden;
  padding: 30px 30px 0 30px;
  position: relative;
  margin-bottom: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const CategoryBox = styled.div`
  background-color: #fff;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  padding: 30px 0;
  position: relative;
  font-family: "nbg", "맑은 고딕", HelveticaNeue, DroidSans, Sans-serif,
    Helvetica;
`;
export const ButtonBox = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const CheckBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  width: auto;
  height: auto;
`;

export const SmallBoxContanier = styled.div`
  width: 768px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  height: 40px;
  margin-bottom: 11px;
`;
export const SmallBox = styled.div`
  background: #fff url(${(props) => props.url}) 9px center no-repeat;
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  width: ${(props) => props.width + "px"};
  height: 28px;
  line-height: 26px;
  font-size: 12px;
  border: 1px solid #666;
  border-radius: 3px;
  padding: 0 9px 0 25px;
  margin-right: 15px;
  margin-top: 10px;
  text-decoration: ${(props) => props.underline};
`;
export const ClassificationList = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  padding-right: 10px;
  height: 38px;
  border: 1px solid #ddd;
  border-radius: 3px;
  text-indent: 10px;
  text-align: left;
  font-size: 16px;
  color: #444;
  overflow: hidden;
  margin-left: auto;
  z-index: -2;
  background-color: white;
`;
export const ClassificationBox = styled(ClassificationList)`
  background: url(//image.istarbucks.co.kr/common/img/util/sbox_arrow_down.png)
    96% center no-repeat #fff;
`;
export const ClassificationContainer = styled.div`
  margin-left: auto;
  overflow: ${(props) => props.size};
`;
export const ColorBox = styled.div`
  padding: 20px;
  background: #f4f4f2;
  margin-bottom: 20px;
  border-radius: 3px;
  overflow: hidden;
  width: 728px;
  height: 18px;
  background-color: #f4f4f2;
  z-index: -1;
  display: flex;
  align-items: center;
  a {
    line-height: 18px;
    font-size: 18px;
    font-weight: bold;
    color: #222;
    cursor: pointer;
    margin-right: 10px;
    text-decoration: none;
  }
  img {
    width: 45px;
    height: 35.516px;
    margin-right: 5px;
  }
  span {
    line-height: 18px;
    margin-left: 5px;
    font-size: 13px;
    color: #444444;
    letter-spacing: -1px;
  }
`;

export const CardTest = styled.div`
  width: 768;
  background-color: #2a12;
`;
export const CardContainer = styled.div`
  width: 225px;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;
`;
export const CardList = styled.div`
  width: 768px;
  margin-top: 10px;
  display: flex;

  flex-wrap: wrap;
`;
export const Card = styled.div`
  width: 225px;
  height: 248px;
  background: #7bbce0 url(${(props) => props.url}) center no-repeat;
  background-size: cover;

  color: #fff;
`;

export const CardText = styled.div`
  font-size: 14px;
  color: #444;
  height: 54px;
  line-height: 54px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}

export function CheckboxLabels(props) {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label={props.label} />
    </FormGroup>
  );
}
// export const MainInner = styled(Main)`
//   background-color: ${(props) => props.color || "black"};
//   height: 200px;
// `;
