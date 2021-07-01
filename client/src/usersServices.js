import axios from "axios";

class UsersServices {
  static async test() {
    try {
      const response = await axios.get("http://localhost:4443/users/");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
}

export default UsersServices;
