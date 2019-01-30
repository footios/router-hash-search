// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// // With function you get and return the 'hash' and the 'search'.
// // The color components use it to print them (hash/search).
// const myExternalProcessor = props => {
//   console.log("props: ", props);
//   // Further down below, in each Link
//   // you give a value for the 'hash' and the 'search'
//   // of the 'location'
//   // Here you access them through props
//   const myHash = props.location.hash;
//   console.log("myHash: ", myHash); // myHash:  #pink-hash
//   let mySearchValue = "";
//   // The URLSearchParams interface defines utility methods
//   // to work with the query string of a URL.
//   const mySearch = new URLSearchParams(props.location.search);
//   console.log("props.location.search: ", props.location.search);
//   //  const props.location.search = "?my-search=pink-color"
//   // The entries() method of the URLSearchParams interface returns
//   // an iterator allowing iteration through all key/value pairs
//   // contained in this object.
//   for (let myParam of mySearch.entries()) {
//     console.log("myParam: ", myParam); // ["my-search", "pink-color"]
//     mySearchValue = myParam[1];
//   }
//   // So here myExternalProcessor return an array:
//   // e.g ["#pink-hash", "[pink]-color"]
//   return [myHash, mySearchValue];
// };
// const MyComponentPink = props => {
//   const myPinkBgd = { padding: "6px 0", backgroundColor: "#fac" };
//   return (
//     <div style={myPinkBgd}>
//       {console.log("myExternalProcessor: ", myExternalProcessor(props)[0])}
//       {myExternalProcessor(props)[0]}
//       {/* #pink-hash */}
//       {" & "}
//       {myExternalProcessor(props)[1]}
//       {/* #pink-color */}
//     </div>
//     // So every component returns its hash and color.
//   );
// };
// const MyComponentGreen = props => {
//   const myPinkBgd = { padding: "6px 0", backgroundColor: "#5e9" };
//   return (
//     <div style={myPinkBgd}>
//       {myExternalProcessor(props)[0]}
//       {" & "}
//       {myExternalProcessor(props)[1]}
//     </div>
//   );
// };
// const MyComponentBlue = props => {
//   const myPinkBgd = { padding: "6px 0", backgroundColor: "#9bf" };
//   return (
//     <div style={myPinkBgd}>
//       {myExternalProcessor(props)[0]}
//       {" & "}
//       {myExternalProcessor(props)[1]}
//     </div>
//   );
// };
// class App extends Component {
//   render() {
//     const myContainer = {
//       maxWidth: "360px",
//       margin: "10px auto",
//       padding: "10px 0",
//       backgroundColor: "#ddd",
//       textAlign: "center",
//       border: "1px solid #000",
//       fontSize: "16px",
//       fontFamily: "Helvetica",
//       fontWeight: "lighter"
//     };
//     const ulStyle = {
//       width: "100%",
//       margin: "0",
//       padding: "0",
//       listStyle: "none",
//       textAlign: "center"
//     };
//     const liStyle = { display: "inline-block", margin: "0 4px 10px" };
//     return (
//       <div style={myContainer}>
//         <ul style={ulStyle}>
//           <li style={liStyle}>
//             <Link
//               to={{
//                 pathname: "/pink",
//                 hash: "#pink-hash",
//                 search: "?my-search=pink-color"
//               }}
//             >
//               Pink
//             </Link>
//           </li>
//           <li style={liStyle}>
//             <Link
//               to={{
//                 pathname: "/green",
//                 hash: "#green-hash",
//                 search: "?my-search=green-color"
//               }}
//             >
//               Green
//             </Link>
//           </li>
//           <li style={liStyle}>
//             <Link
//               to={{
//                 pathname: "/blue",
//                 hash: "#blue-hash",
//                 search: "?my-search=blue-color"
//               }}
//             >
//               Blue
//             </Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route path="/pink" component={MyComponentPink} />
//           <Route path="/green" component={MyComponentGreen} />
//           <Route path="/blue" component={MyComponentBlue} />
//         </Switch>
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
