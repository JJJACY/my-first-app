import request from "@/global/request/axios";
import API from "@/global/request/api";

const SomeService = {
  all() {
    return request.get(API.user)
  }
}

export default SomeService