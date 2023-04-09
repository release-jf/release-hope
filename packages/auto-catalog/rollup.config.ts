import { bundle } from "../../scripts/rollup.js";

export default [
  ...bundle("node/index"),
  ...bundle("client/config", {
    copy: [["client/styles", "client"]],
  }),
];
