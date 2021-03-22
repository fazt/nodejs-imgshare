import Stats from "./stats";
import Images from "./images";
import Comments from "./comments";

export default async (viewModel) => {
  const results = await Promise.all([
    Stats(),
    Images.popular(),
    Comments.newest(),
  ]);

  viewModel.sidebar = {
    stats: results[0],
    popular: results[1],
    comments: results[2],
  };

  return viewModel;
};
