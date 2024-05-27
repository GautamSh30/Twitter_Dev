import Like from "../models/like";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }
}

export default LikeRepository;
