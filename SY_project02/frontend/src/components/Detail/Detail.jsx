import React from "react";
import styled from "styled-components";
import { CbBox, ClassificationBox, Main, MainClassification } from "./test";

const Detail = () => {
  return (
    <>
      <Main>
        <h1>음료</h1>
        <MainClassification>
          <ClassificationBox>
            <CbBox>
              <span>분류 보기</span>
              <span>1</span>
            </CbBox>
          </ClassificationBox>
        </MainClassification>
      </Main>
    </>
  );
};

export default Detail;
