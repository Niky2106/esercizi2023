import { tweetGen } from "../utils/fn.js";
import { GET } from "../utils/http.js";

const tweetData = {
    id: 1,
    image: "https://school-gfb61fa999_640.png",
    body: "His mother had always taught him",
    title: "His mother had always taught him",
    reactions: 2,
};

let userList = [];
let postList = [];
const navItems = document.querySelectorAll(".navItem");
const contentEl = document.querySelector(".content");

contentEl.append(tweetGen(tweetData));

// Async
GET("/posts").then(({ posts }) => (postList = posts));

GET("/users")
    .then(({ users }) => (userList = users))
    .then(() => console.log(postList));

// Richiesta multipla in parallelo
const remoteData = Promise.all([GET("/posts"), GET("/users")]);

// Richiesta multipla in serie
GET("/posts").then(() => GET("/users"));

remoteData
    .then((data) => {
        postList = data[0].posts;
        userList = data[1].users;
    })
    .then(() =>
        postList
            .map((post) => {
                post.user = userList.find((user) => user.id === post.userId);
                return post;
            })
            .forEach((post) => contentEl.append(tweetGen(post)))
    );

// Events
navItems.forEach((element) => {
    element.addEventListener("click", () => {
        navItems.forEach((item) => {
            item.classList.remove("active");
        });
        element.classList.add("active");
    });
})
