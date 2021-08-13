import request from "@/global/request/request";
import API from "@/global/request/api";

const SomeService = {
   all() {
    return request.get(API.news)
  }
}

export default SomeService