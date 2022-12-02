import styled from "styled-components";
import React from "react";
import { Main } from "../Detail/test";
import {
  DetailBox,
  DetailImageBox,
  DetailText,
  Image,
  SmallImage,
} from "./DetailStyled";

const DetailEach = () => {
  return (
    <Main>
      <h1>브레드</h1>
      <DetailBox>
        <DetailImageBox>
          <Image />
          <SmallImage />
        </DetailImageBox>
        <DetailText />
      </DetailBox>
    </Main>
  );
};

export default DetailEach;
