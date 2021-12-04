import sidebar from "../helpers/sidebar";
import { Image } from "../models";

export const index = async (req, res) => {
  const images = await Image.find().sort({ timestamp: -1 });
  let viewModel = { images: [] };
  viewModel.images = images;
  viewModel = await sidebar(viewModel);
  res.render("index", viewModel);
};

export const profile = async (req, res) => {
  const images = await Image.find().sort({ timestamp: -1 });
  let viewModel = { images: [] };
  viewModel.images = images;
  viewModel = await sidebar(viewModel);

  res.render("authentication/profile", { sidebar: viewModel , layout: "stats"} );
};