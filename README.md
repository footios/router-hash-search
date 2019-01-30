This is from MLR in Q&A or this [Udemy course](https://www.udemy.com/react-the-complete-guide-incl-redux/)

[Purpose of Fragment/hash and Query/search](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/questions/3469586)

index.js has the refactored code from MLR again.

My last comment:

Hi MLR,

Thanks again for the hi-tech code. I really enjoyed it digging into it.

Actually I realized a misconception I had above.

MySearches doesn't log out what the props.location.search does, but "...utility methods to work with the query string of the URL (i.e. the string from props.location.search )". So mySearches is an object that has a dozen of utility methods, which you can use to manipulate the URL you assign to it. I find it strange though that it doesn't log the URL.
```js
console.log("myProps.location.search: ", myProps.location.search);
// 'myProps.location.search'
// returns this: ?my-search-writtenColor=green-search&my-search-bgdColor=%235e9
// which is from Link -> search (below):
// `?my-search-writtenColor=` +
// `${myCurrentItem.writtenColor}-search` +
// `&my-search-bgdColor=` +
// `${encodeURIComponent(myCurrentItem.bgdColor)}`

console.log("mySearches: ", mySearches); // logs utility methods
```
Anyway, one of its methods is also the forEach, which you use to get the key/value pair each time a link is clicked.
```js
mySearches.forEach(currentParam => {
mySearchValueArray.push(currentParam);
});
console.log("mySearchValueArray: ", mySearchValueArray); // ["pink-search", "#fac"]

return [myHash, mySearchValueArray];
This time of course myExternalProcessor returns a multidimensional array with the [0] hash and the [1] key/value pair of search. Further in MyComponent you print the hash and the key and you use the value for the backgoundColor.

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
{myExternalProcessor(props)[0]} {/_#pink-hash_/}
{" & "}
{myExternalProcessor(props)[1][0]} {/_pink-search_/}
</div>
);
};
```
As you said you use one component this time MyComponent which you "render" three times. When a color link is clicked, then one of these components gets renderd with dynamically passed in values with the use of myExternalProcessor.

myMapLinkMethod takes care of the color links. It maps an array with writtenColor and bgdColor key/value pairs, which you use dynamically for pathname, hash and search, by passing the according value when a link is clicked.

That was my favorite part of the code!
```js
myMapLinkMethod = () =>
this.state.myColorsArray.map(myCurrentItem => (
<li key={myCurrentItem.writtenColor} style={this.myLiStyle}>
<Link
to={‌{
pathname: `/${myCurrentItem.writtenColor}`,
hash: `#${myCurrentItem.writtenColor}-hash`,
search:
`?my-search-writtenColor=` +
`${myCurrentItem.writtenColor}-search` +
`&my-search-bgdColor=` +
`${encodeURIComponent(myCurrentItem.bgdColor)}`
}} >
{myCurrentItem.writtenColor}
</Link>
</li>
));
```
Thanks also for the use of encodeURIComponent(myCurrentItem.bgdColor)

It's the first time I encounter it and I realized that is absolutely useful, since:

"URLs can only be sent over the Internet using the ASCII character-set.

Since URLs often contain characters outside the ASCII set, the URL has to be converted into a valid ASCII format.

URL encoding replaces unsafe ASCII characters with a "%" followed by two hexadecimal digits.

URLs cannot contain spaces. URL encoding normally replaces a space with a plus (+) sign or with %20. "

source

This version is of course as you said more condensed.

Furthermore, passing values dynamically makes it also scalable, since you don't have to hardcode every new color link and component you want to add. You just add a new object in myColorsArray and one more <Route...> and that's it.

Thanks once more for your help.

I really appreciate it!
