window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.
    document.getElementById("hello").onclick = sayHello;
    // document.getElementById("rectangle").onclick = drawRectangle;
    // document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    // document.getElementById("triangle").onclick = drawTriangle;
    // document.getElementById("smile").onclick = drawFace;
    // document.getElementById("pyramid").onclick = drawPyramid;

}

/*
 * Exercise 1.
 */

const sayHello = function() {
  const canvas = document.getElementById("student-canvas-1")
  const ctx = canvas.getContext("2d")

  let text = prompt("Message:");

  if (text === null) {
    ctx.clearRect(0, 0, canvas.width , canvas.height);
  }

  while(text.length > 50) {
    alert("Your message is too long, fatty. Keep it under 50 characters.")
    text = promt("Message:")
  }

  ctx.font = "48px Sans-serif";
  ctx.clearRect(0 , 0 , canvas.width , canvas.height);
  ctx.strokeText(text, 30, 70, canvas.width - 30);

};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
    // write your exercise 2 code here
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {

    // write your exercise 3 code here



};

/*
 * Exercise 4.
 */

const drawTriangle = function() {

    // write your exercise 4 code here

};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here


};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {

    // write your exercise 5 code here
};
