const courses = require("./courses-data");

const express = require("express");
const { Router } = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  const about = {
    img_url: "https://avatars1.githubusercontent.com/u/28929274?s=280&v=4",
    company: "Rocketseat",
    description:
      "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
    list_img: "trofeu",
    technologies: [
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
      },
      { name: "Node.js", url: "https://nodejs.org/en/" },
      { name: "ReactJS", url: "https://pt-br.reactjs.org/" },
      { name: "React Native", url: "https://reactnative.dev/" },
    ],
    links: [
      {
        img: "https://img.icons8.com/nolan/64/github.png",
        url: "https://github.com/Rocketseat",
      },
      {
        img: "https://img.icons8.com/nolan/64/instagram-new.png",
        url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br",
      },
      {
        img: "https://img.icons8.com/nolan/64/facebook-circled.png",
        url: "https://www.facebook.com/rocketseat",
      },
    ],
  };

  res.render("about", { about });
});

routes.get("/courses", (req, res) => {
  res.render("courses", { items: courses });
});

routes.get("/courses/:id", (req, res) => {
  const id = req.params.id;

  const course = courses.find((course) => {
    return course.id == id;
  });

  if (!course) {
    res.send("course not found");
  }

  return res.render("course", { item: course });
});

module.exports = routes;
