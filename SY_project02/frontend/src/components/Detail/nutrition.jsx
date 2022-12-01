import { Table } from "./nutritionCss";
import React from "react";

const Nutrition = () => {
  return (
    <Table>
      <colgroup>
        <col width="16%"></col>
        <col width="14%"></col>
        <col width="14%"></col>
        <col width="14%"></col>
        <col width="14%"></col>
        <col width="14%"></col>
        <col width="14%"></col>
      </colgroup>
      <thead>
        <tr>
          <th scope="col">메뉴</th>
          <th scope="col">칼로리</th>
          <th scope="col">당류</th>
          <th scope="col">단백질</th>
          <th scope="col">나트륨</th>
          <th scope="col">포화지방</th>
          <th scope="col">카페인</th>
        </tr>
      </thead>
      <tbody>
        <td>민트 콜드 브루</td>
        <td>100</td>
        <td>23</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>415</td>
        <tr>
          <td>나이트로 바닐라 크림</td>
          <td>10</td>
          <td>1</td>
          <td>40</td>
          <td>2</td>
          <td>232</td>
          <td>232</td>
        </tr>
        <tr>
          <td>나이트로 바닐라 크림</td>
          <td>10</td>
          <td>1</td>
          <td>40</td>
          <td>2</td>
          <td>232</td>
          <td>232</td>
        </tr>{" "}
        <tr>
          <td>나이트로 바닐라 크림</td>
          <td>10</td>
          <td>1</td>
          <td>40</td>
          <td>2</td>
          <td>232</td>
          <td>232</td>
        </tr>{" "}
        <tr>
          <td>나이트로 바닐라 크림</td>
          <td>10</td>
          <td>1</td>
          <td>40</td>
          <td>2</td>
          <td>232</td>
          <td>232</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Nutrition;
