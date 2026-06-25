import smartphones from "./dummyApi/smartphones";
import laptops from "./dummyApi/laptops";
import headphones from "./dummyApi/headphones";
import tablets from "./dummyApi/tablets";
import smartwatches from "./dummyApi/smartwatches";

export const categoryMap = {
  smartphone: smartphones,
  smartphones: smartphones,

  laptop: laptops,
  laptops: laptops,

  headphone: headphones,
  headphones: headphones,

  tablet: tablets,
  tablets: tablets,

  smartwatch: smartwatches,
  smartwatches: smartwatches,
};