import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c05f1cf128e04424be7d17867185c22f",
  },
});
