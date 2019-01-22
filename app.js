import React from "react";
import ReactDOM from "react-dom";
import DemoBar from './demobar';
import FormBuilder from "./src/index";
import * as variables from './variables'

// Add our stylesheets for the demo.
require('./css/application.css.scss');

const updater = (data) => console.log(data);
ReactDOM.render(
  <FormBuilder.ReactFormBuilder variables={variables} dataUpdater={updater} />,
  document.getElementById('form-builder')
)

ReactDOM.render(
  <DemoBar variables={variables} />,
  document.getElementById('demo-bar')
)
