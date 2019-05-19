const fs = require("fs");

const file = fs.readFileSync(
  "./patch/styled-components.native.esm.js",
  "utf-8"
);

fs.writeFileSync(
  "./node_modules/styled-components/native/dist/styled-components.native.esm.js",
  file
);
