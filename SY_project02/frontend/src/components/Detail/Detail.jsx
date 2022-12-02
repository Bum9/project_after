import React, { useState } from "react";
import {
  Main,
  FirstContainer,
  MainInner,
  CategoryBox,
  CheckBox,
  ButtonBoxCotainer,
  SmallBoxContanier,
  SmallBox,
  ClassificationBox,
  ClassificationContainer,
  ColorBox,
  CardContainer,
  Card,
  CardText,
  CardList,
  ClassificationList,
} from "./test";
import { ButtonBox } from "./Button";
import Nutrition from "./nutrition";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { CheckboxLabels } from "./test";

const Detail = () => {
  const [ClassificationInValid, setClassificationInValid] = useState(true);
  const [DetailBox, setDetailBox] = useState(true);
  const [smallBox, setSmallBox] = useState(true);
  const [hidden, setHidden] = useState("hidden");
  const [categoryTheme, setCategoryThema] = useState(false);

  const classificationInValidHandler = () => {
    setClassificationInValid(!ClassificationInValid);
  };
  const detailBoxHandler = () => {
    setDetailBox(!DetailBox);
  };
  const smallBoxTrueHanlder = () => {
    setSmallBox(true);
    setHidden("hidden");
  };
  const smallBoxFalseHanlder = () => {
    setSmallBox(false);
    setHidden("");
  };
  const checkboxHandler = () => {
    setDetailBox(false);
  };

  const categoryThemaTrueHandler = () => {
    setCategoryThema(true);
  };
  const categoryThemaFalseHandler = () => {
    setCategoryThema(false);
  };

  return (
    <>
      <Main>
        <h1>음료</h1>

        {ClassificationInValid ? (
          <FirstContainer height="55">
            <MainInner>
              <p>분류 보기</p>
              <img
                src="//image.istarbucks.co.kr/common/img/menu/list_down_btn.png"
                alt=""
                onClick={classificationInValidHandler}
              />
            </MainInner>
            <CategoryBox>
              <ButtonBoxCotainer>
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
              </ButtonBoxCotainer>

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
        ) : (
          <FirstContainer height="255">
            <MainInner>
              <p>분류 보기</p>
              <img
                src="https://image.istarbucks.co.kr/common/img/menu/list_up_btn.png"
                alt=""
                onClick={classificationInValidHandler}
              />
            </MainInner>
            <CategoryBox>
              {categoryTheme ? (
                <>
                  <ButtonBoxCotainer>
                    <ButtonBox
                      onClick={categoryThemaTrueHandler}
                      background="#006633"
                      color="#fff"
                      underline="underline"
                    >
                      <span>카테고리</span>
                    </ButtonBox>
                    <ButtonBox
                      onClick={categoryThemaFalseHandler}
                      background="#f4f4f1"
                    >
                      <span>테마</span>
                    </ButtonBox>
                  </ButtonBoxCotainer>

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
                </>
              ) : (
                <>
                  <ButtonBoxCotainer>
                    <ButtonBox
                      onClick={categoryThemaTrueHandler}
                      background="#f4f4f1"
                    >
                      <span>카테고리</span>
                    </ButtonBox>
                    <ButtonBox
                      onClick={categoryThemaFalseHandler}
                      background="#006633"
                      color="#fff"
                      underline1="underline"
                    >
                      <span>테마</span>
                    </ButtonBox>
                  </ButtonBoxCotainer>

                  <img
                    alt="이미지가 없습니다"
                    src="https://image.istarbucks.co.kr/upload/banner/themebnr/jAVzia_20221201102659366.jpg"
                  />
                </>
              )}
            </CategoryBox>
          </FirstContainer>
        )}

        <SmallBoxContanier>
          {smallBox ? (
            <>
              <SmallBox
                url="http://image.istarbucks.co.kr/common/img/menu/icon_pic_on.png"
                onClick={smallBoxFalseHanlder}
                width="69"
                backgroundColor="#EEB233"
              >
                사진으로 보기
              </SmallBox>
              <SmallBox
                url="http://image.istarbucks.co.kr/common/img/menu/icon_ante.png"
                width="80"
                onClick={smallBoxTrueHanlder}
                backgroundColor="#000"
                underline="underline"
              >
                영양정보로 보기
              </SmallBox>
            </>
          ) : (
            <>
              <SmallBox
                url="http://image.istarbucks.co.kr/common/img/menu/icon_pic_on.png"
                onClick={smallBoxFalseHanlder}
                width="69"
                backgroundColor="#000"
                underline="underline"
              >
                사진으로 보기
              </SmallBox>
              <SmallBox
                url="http://image.istarbucks.co.kr/common/img/menu/icon_ante.png"
                width="80"
                onClick={smallBoxTrueHanlder}
                backgroundColor="#EEB233"
              >
                영양정보로 보기
              </SmallBox>
            </>
          )}

          {DetailBox ? (
            <ClassificationContainer size="hidden" hidden={hidden}>
              <ClassificationBox onClick={detailBoxHandler}>
                상세 분류
              </ClassificationBox>
              <ClassificationList onClick={checkboxHandler}>
                <input type="checkbox" id="name" />
                신규 출시된 메뉴
              </ClassificationList>
              <ClassificationList onClick={checkboxHandler}>
                <input type="checkbox" />
                시즌기간 출시되는 시즌성 메뉴
              </ClassificationList>
            </ClassificationContainer>
          ) : (
            <ClassificationContainer>
              <ClassificationBox onClick={detailBoxHandler}>
                상세 분류
              </ClassificationBox>
              <ClassificationList onClick={checkboxHandler}>
                <label htmlFor="new">
                  <input type="checkbox" id="new" />
                  신규 출시된 메뉴
                </label>
              </ClassificationList>
              <ClassificationList onClick={checkboxHandler}>
                <label htmlFor="season">
                  <input type="checkbox" id="season" />
                  시즌기간 출시되는 시즌성 메뉴
                </label>
              </ClassificationList>
            </ClassificationContainer>
          )}
        </SmallBoxContanier>
        <ColorBox>
          <a href="https://www.naver.com">콜드 브루 커피</a>
          <img
            src="//image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
            alt=""
          />
          <span>디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</span>
        </ColorBox>
        {smallBox ? (
          <Nutrition />
        ) : (
          <CardList>
            <CardContainer>
              <Card url="https://image.istarbucks.co.kr/upload/store/skuimg/2022/10/[9200000004312]_20221005145029134.jpg" />
              <CardText>민트 초코 콜드 브루</CardText>
            </CardContainer>
            <CardContainer>
              <Card url="https://image.istarbucks.co.kr/upload/store/skuimg/2022/10/[9200000004279]_20221017113059439.jpg" />
              <CardText>오트 크림 스카치 콜드 브루</CardText>
            </CardContainer>
            <CardContainer>
              <Card url="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg" />
              <CardText>나이트로 바닐라 크림</CardText>
            </CardContainer>
            <CardContainer>
              <Card url="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg" />
              <CardText>나이트로 콜드 브루</CardText>
            </CardContainer>
            <CardContainer>
              <Card url="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg" />
              <CardText>돌체 콜드 브루</CardText>
            </CardContainer>
            <CardContainer>
              <Card url="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg" />
              <CardText>바닐라 크림 콜드 브루</CardText>
            </CardContainer>
            <CardContainer>
              <Card url="https://dimg.donga.com/wps/NEWS/IMAGE/2018/09/28/92173862.1.jpg" />
              <CardText>민트 초코 콜드 브루</CardText>
            </CardContainer>
            <CardContainer>
              <Card url="https://dimg.donga.com/wps/NEWS/IMAGE/2018/09/28/92173862.1.jpg" />
              <CardText>민트 초코 콜드 브루</CardText>
            </CardContainer>
          </CardList>
        )}
      </Main>
    </>
  );
};

export default Detail;
