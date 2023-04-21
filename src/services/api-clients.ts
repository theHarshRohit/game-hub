import axios from "axios";

export default axios.create({
baseURL:'https://api.rawg.io/api',
params:{
  key:'c2624b78d8e84c8499e6e361f63767f1'
}
}) 