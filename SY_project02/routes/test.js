const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  res.send({ message: "hello root" });
});

router.get("/api", (req, res) => {
  res.send({ message: "api" });
});
router.get("/p1", async (req, res, next) => {
  res.send({ message: "p1" });
});

router.get("/test", (req, res) => {
  res.send({ message: "test" });
});

router.get("/login", (req, res) => {
  res.send({ message: "login" });
});
router.get("/users", async (req, res, next) => {
  res.json([
    { id: 1, username: "fuck react" },
    { id: 2, username: "hate css" },
  ]);
  console.log(res.json);
});
router.get("/hello", async (req, res, next) => {
  res.json([
    { id: 1, username: "fuck rea11ct" },
    { id: 2, username: "hate css" },
  ]);
  console.log(res.json);
});
router.get("/join", async (req, res, next) => {
  const abc = { name: "hello" };
  const userData = await User.findAll({});
  console.log(userData);
  res.send({ data: userData });
});

router.get("/*", (req, res) => {
  res.status(404).send("not found");
  res.send(console.log("404"));
});

router.post("/id", (req, res) => {
  const serverId = req.body.id;
  console.log(serverId);
});
// router.post("/join", async (req, res, next) => {
//   // const { email, nick, password } = req.body.data;
//   try {
//     // const exUser = await User.findOne({ where: { email } });
//     // if (exUser) {
//     //   return res.redirect("/join?error=exist");
//     // }
//     // const hash = await bcrypt.hash(password, 12);
//     // await User.create({
//     //   email,
//     //   nick,
//     //   password: hash,
//     // });
//     // return res.redirect("/");

//     console.log(req.body);
//   } catch (error) {
//     console.error(error);
//     return next(error);
//   }
// });
// router.get("/p2", async (req, res, next) => {
//   res.send({ message: "login" });
// }); //왜 내려가면 안되는가? 위치를 옮기니까 된다.

router.post("/join", async (req, res) => {
  const { name, address, password, telephone, email } = req.body.data;

  try {
    console.log(req.body.data, " --------> pst");
    User.create({
      email,
      name,
      password,
      telephone,
      address,
      nickname: "호날두",
    });

    console.log(req.body.data, "뭐지?");
  } catch {
    (error) => {
      console.error(error);
    };
  }
});

module.exports = router;
