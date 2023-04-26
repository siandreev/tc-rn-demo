import registerRootComponent from "expo/build/launch/registerRootComponent";

global.Buffer = require("buffer").Buffer;

import App from "./App";

registerRootComponent(App);
