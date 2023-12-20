import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "6b5f28b2d490db0fa7c9780e5a257ee8",
        language: "ko-KR",
    }
});

export default instance;