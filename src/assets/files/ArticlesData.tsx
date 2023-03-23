import hogwarts from "../images/hogwartsArticle.jpg";
import shrek from "../images/shrekArticle.jpg";
import green from "../images/GreenAvatar.png";
import video from "../images/VideoGamesAvatar.png";
import movie from "../images/MovieAvatar.png";

export const ArticlesData = [
  {
    autor: "VideoGames",
    avatar: video,
    date: "5 minutes ago",
    text: "What do you think about the new game based on the Harry Potter books and movies?",
    img: hogwarts,
    votes: "10",
    commentsCount: "3",
  },
  {
    autor: "Green",
    avatar: green,
    date: "7 minutes ago",
    text: "A probe is about to be sent into space. On board will be a disk and a computer with a message from humanity. What are you sending?",
    votes: "2",
    commentsCount: "1",
  },
  {
    autor: "Movie",
    avatar: movie,
    date: "25 minutes ago",
    text: "What's your favorite shrek movie?",
    img: shrek,
    votes: "33",
    commentsCount: "15",
  },
];
