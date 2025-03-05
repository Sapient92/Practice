import axios from "axios";

console.log(process.env.MOVIE_DB_API_KEY);

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "",
    language: "ko-KR",
  },
});

export default instance;
