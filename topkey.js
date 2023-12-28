
//declare variables needed
//calculate the document height and set the offset to a quter of that value
// add event listener for click and scroll
var btt = document.getElementById("back-to-top"),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos,
    docHeight,
  
    


//calculate the document height
//Math.max() function  is used to find the maximum value among a set of numbers. It accepts any number of arguments and returns the largest value.
//call variable that i had declared

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != 'undefined') {
    offset = docHeight / 4;
}

//add scroll event listener
//window.addEventListener(): Allows you to attach event listeners to respond to various events such as mouse clicks, keyboard inputs, or page load.

window.addEventListener( "scroll", function( event ) {
    scrollPos = body.scrollTop || docElem.scrollTop;

    btt.className = (scrollPos > offset ) ? "visible" : "";

});

//add click listener
//btt.addEventListener("click", function(event){
    //event.preventDefault();

  
