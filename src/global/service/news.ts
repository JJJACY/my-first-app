import request from "@/global/request/axios";
import API from "@/global/request/api";

const SomeService = {
  all(id: number) {
    return request.get(API.user(id))
  }
}

export default SomeService