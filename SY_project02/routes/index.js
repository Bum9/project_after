const express = require("express");
const authRouter = require("./auth");
const pageRouter = require("./page");
const shopRouter = require("./shop");
const testRouter = require("./test");

const router = express.Router();

router.route("/auth");

module.exports = router;
