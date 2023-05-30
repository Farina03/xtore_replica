const router = require("express").Router();

router.get("/user_get_test", (req, res) => {
    res.send("User GET test is successful !");
});

router.post("/user_post_test", (req, res) => {
    const username = req.body.username;
    res.send("User name is " + username);
    console.log("User name is " + username);
})

module.exports = router;