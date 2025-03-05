import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "b8262d5f4f59cea829679f1bf1b3c9a6",
    language: "ko-KR",
  },
});

export default instance;
