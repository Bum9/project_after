const express = require("express");
const uuid = require("uuid").v4;
const got = require("got");
const router = express.Router();

const secretKey = "test_sk_P24xLea5zVAaQBw5wXbVQAMYNwW6";

router.get("/payment", function (req, res) {
  res.render("/", {
    title: "구매하기",
    orderId: uuid(),
    customerName: "김토스",
  });
});

router.get("/payment/success", function (req, res) {
  got
    .post(
      "https://api.tosspayments.com/v1/payments/" +
        req.query.paymentKey,
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(secretKey + ":").toString("base64"),
          "Content-Type": "application/json",
        },
        json: {
          orderId: req.query.orderId,
          amount: req.query.amount,
        },
        responseType: "json",
      }
    )
    .then(function (response) {
      console.log(response.body);
      // TODO: 구매 완료 비즈니스 로직 구현

      res.render("success", {
        title: "성공적으로 구매했습니다",
        amount: response.body.totalAmount,
      });
    })
    .catch(function (error) {
      res.redirect(
        `/fail?code=${error.response?.body?.code}&message=${error.response?.body?.message}`
      );
    });
});

router.get("/payment/fail", function (req, res) {
  res.render("fail", {
    message: req.query.message,
    code: req.query.code,
  });
});

module.exports = router;
