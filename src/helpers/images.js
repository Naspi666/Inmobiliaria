import { Image } from "../models";

export default {
  async popular() {
    const images = await Image.find().limit(3).sort({ likes: -1 });
    return images;
  },
};
