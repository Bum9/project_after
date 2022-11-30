import * as React from "react";
import styled from "styled-components";
import {
  Main,
  FirstContainer,
  MainInner,
  CategoryBox,
  CheckBox,
  ButtonBox,
  SmallBoxContanier,
  SmallBox,
  SmallBox1,
  SmallBox2,
} from "./test";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { BasicButtons } from "./test";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { CheckboxLabels } from "./test";

const Detail = () => {
  return (
    <>
      <Main>
        <h1>음료</h1>
        <FirstContainer>
          <MainInner>
            <p>분류 보기</p>
            <ArrowUpwardIcon fontSize="large" />
          </MainInner>
          <CategoryBox>
            <ButtonBox>
              <Stack spacing={1} direction="row">
                <Button
                  variant="contained"
                  size="large"
                  sx={{ width: 200 /* background: "grey" */ }}
                >
                  카테고리
                </Button>
                <Button variant="contained" size="large" sx={{ width: 200 }}>
                  테마
                </Button>
              </Stack>
            </ButtonBox>

            <CheckBox>
              <CheckboxLabels label="전체 상품보기" />
              <CheckboxLabels label="콜드 브루 커피" />
              <CheckboxLabels label="브루드 커피" />
              <CheckboxLabels label="에소프레소" />
              <CheckboxLabels label="프라푸치노" />
              <CheckboxLabels label="블렌디드" />
              <CheckboxLabels label="스타벅스 리프레셔" />
              <CheckboxLabels label="스타벅스 피지오" />
            </CheckBox>
          </CategoryBox>
        </FirstContainer>
        <SmallBoxContanier>
          <SmallBox>사진으로 보기</SmallBox>
          <SmallBox1>영양정보로 보기</SmallBox1>
          {/* <SmallBox2>세번쨰</SmallBox2> */}
        </SmallBoxContanier>
      </Main>
    </>
  );
};

export default Detail;
