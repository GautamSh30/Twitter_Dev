import { UserRepository } from "../repository/index.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (err) {
      throw err;
    }
  }

  async getUserByEmail(email) {
    try {
      const user = await this.userRepository.findBy({ email });
      return user;
    } catch (err) {
      throw err;
    }
  }
  async signin(data) {
    try {
      const user = await this.getUserByEmail(data.email);
      if (!user) {
        throw {
          message: "No user found",
        };
      }
      // console.log(user);
      if (!user.comparePassword(data.password)) {
        throw {
          message: "Incorrect password",
        };
      }
      const token = user.genJWT();
      return token;
    } catch (err) {
      throw err;
    }
  }
}

export default UserService;
