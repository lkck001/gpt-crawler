import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.zhihu.com/topics",
  match: "https://www.zhihu.com/topics",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
};
