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
  align-items: baseline;
  width: 716px;
  height: 60px;
  border: 1px solid #ddd;
  border-top: 0px;
  border-left: 0px;

  border-right: 0px;
`;
export const MainInnerCheckBox = styled.div`
  height: 50px;
  background-color: blue;
`;
export const FirstContainer = styled.div`
  background-color: #fff;
  height: 255px;
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
`;
export const SmallBox = styled.div`
  background: #666
    url("http://image.istarbucks.co.kr/common/img/menu/icon_pic_on.png") 9px
    center no-repeat;

  color: #ddd;

  width: 69px;
  height: 28px;
  line-height: 26px;
  font-size: 12px;
  border: 1px solid #666;
  border-radius: 3px;
  padding: 0 9px 0 25px;
  margin-right: 8px;
`;
export const SmallBox1 = styled.div`
  background: #fff url("//image.istarbucks.co.kr/common/img/menu/icon_ante.png")
    9px center no-repeat;

  color: #666;

  width: 80px;
  height: 28px;
  line-height: 26px;
  font-size: 12px;
  border: 1px solid #666;
  border-radius: 3px;
  padding: 0 9px 0 25px;
`;
export const SmallBox2 = styled.div`
  background: #666
    url("http://image.istarbucks.co.kr/common/img/menu/icon_pic_on.png") 9px
    center no-repeat;

  color: #ddd;

  width: 67px;
  height: 26px;
  line-height: 26px;
  font-size: 11px;
  border: 1px solid #666;
  border-radius: 3px;
  padding: 0 9px 0 25px;
  margin-left: auto;
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
