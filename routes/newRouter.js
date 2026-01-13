const { Router } = require("express");

const messages = require("../data/messages");

const newRouter = Router();

newRouter.get("/", (req, res) => {
    res.render("form", { title: "Create Message" });
});

newRouter.post("/", (req, res) => {
    messages.unshift({
        text: req.body.text,
        user: req.body.name,
        added: new Date(),
    });
    res.redirect("/");
});

module.exports = newRouter;
