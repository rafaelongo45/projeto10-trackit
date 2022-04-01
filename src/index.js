import ReactDom from "react-dom";

import "./Assets/styles/reset.css"
import "./Assets/styles/style.css"

import App from "./Components/App/App.js"


ReactDom.render(<App />, document.querySelector('.root'))