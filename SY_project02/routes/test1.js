const express = require("express");
const router = express.Router();

router.get("/test1/", (req, res) => {
  res.send({ message: "hello root" });
});

router.get("/api", (req, res) => {
  res.send({ message: "api" });
});
router.get("/test1", async (req, res, next) => {
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

router.get("/*", (req, res) => {
  res.status(404).send("not found");
  res.send(console.log("404"));
});

router.post("/id", (req, res) => {
  const serverId = req.body.id;
  console.log(serverId);
});
// router.get("/p2", async (req, res, next) => {
//   res.send({ message: "login" });
// }); //왜 내려가면 안되는가? 위치를 옮기니까 된다.

router.post("/join", async (req, res) => {
  res.send({ message: "heelo" });
  // console.log(req.body.data, " -------->");

  // const { name, address, password, telephone, email } = req.body.data;

  try {
    // const emailCheck = User.findOne({ where: "a@a.com" });

    // createUser = User.create({
    //   email,
    //   name,
    //   nickname: "수세미",
    //   password,
    //   telephone,
    //   address,
    // });

    console.log(req.body.data);
  } catch {
    (error) => {
      console.error(error);
    };
  }
});

module.exports = router;
