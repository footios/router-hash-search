import React, { Component } from "react";

import { ThemeContext, themes } from "./components/theme-context";
import ThemeTogglerButton from "././components/theme-toggler-button";

const Content = () => <ThemeTogglerButton />;

class App extends Component {
  constructor(props) {
    super(props);

    // This func MUST be above this.state!!!
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  render() {
    // The entire state is passed to the provider
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}
export default App;
