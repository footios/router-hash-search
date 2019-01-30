import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
//=========================================================================
const myExternalProcessor = myProps => {
  const myHash = myProps.location.hash;
  let mySearchValueArray = [];
  const mySearches = new URLSearchParams(myProps.location.search);
  console.log("myProps.location.search: ", myProps.location.search);
  // 'myProps.location.search'
  // returns this: ?my-search-writtenColor=green-search&my-search-bgdColor=%235e9
  // which is from Link -> search (below):
  // `?my-search-writtenColor=` +
  // `${myCurrentItem.writtenColor}-search` +
  // `&my-search-bgdColor=` +
  // `${encodeURIComponent(myCurrentItem.bgdColor)}`

  console.log("mySearches: ", mySearches); // logs utility methods

  mySearches.forEach(currentParam => {
    mySearchValueArray.push(currentParam);
  });
  console.log("mySearchValueArray: ", mySearchValueArray); //  ["pink-search", "#fac"]

  return [myHash, mySearchValueArray];
};
//=========================================================================
const MyComponent = props => {
  const myStyle = {
    padding: "6px 0",
    backgroundColor: myExternalProcessor(props)[1][1] // #fac
  };
  console.log("myExternalProcessor(props): ", myExternalProcessor(props));
  // "#pink-hash"
  // ["pink-search", "#fac"]

  return (
    <div style={myStyle}>
      {myExternalProcessor(props)[0]} {/*#pink-hash*/}
      {" & "}
      {myExternalProcessor(props)[1][0]} {/*pink-search*/}
    </div>
  );
};
//=========================================================================
class MyApp extends Component {
  state = {
    myColorsArray: [
      { writtenColor: "pink", bgdColor: "#fac" },
      { writtenColor: "green", bgdColor: "#5e9" },
      { writtenColor: "blue", bgdColor: "#9bf" },
      { writtenColor: "vvv", bgdColor: "#9bf" }
    ]
  };
  //-------------------------------------------------------------------------
  myContainer = {
    maxWidth: "360px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  myUlStyle = {
    width: "100%",
    margin: "0",
    padding: "0",
    listStyle: "none",
    textAlign: "center"
  };
  myLiStyle = { display: "inline-block", margin: "0 4px 10px" };
  //-------------------------------------------------------------------------
  myMapLinkMethod = () =>
    this.state.myColorsArray.map(myCurrentItem => (
      <li key={myCurrentItem.writtenColor} style={this.myLiStyle}>
        <Link
          to={{
            pathname: `/${myCurrentItem.writtenColor}`,
            hash: `#${myCurrentItem.writtenColor}-hash`,
            search:
              `?my-search-writtenColor=` +
              `${myCurrentItem.writtenColor}-search` +
              `&my-search-bgdColor=` +
              `${encodeURIComponent(myCurrentItem.bgdColor)}`
          }}
        >
          {myCurrentItem.writtenColor}
        </Link>
      </li>
    ));
  //-------------------------------------------------------------------------
  render() {
    return (
      <div style={this.myContainer}>
        <ul style={this.myUlStyle}>{this.myMapLinkMethod()}</ul>
        <Switch>
          <Route path="/pink" component={MyComponent} />
          <Route path="/green" component={MyComponent} />
          <Route path="/blue" component={MyComponent} />
          <Route path="/vvv" component={MyComponent} />
        </Switch>
      </div>
    );
  }
}
ReactDOM.render(
  <BrowserRouter>
    <MyApp />
  </BrowserRouter>,
  document.getElementById("root")
);
