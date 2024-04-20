// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
// var speakWord = "Hello";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
// function speak(name) {
//   console.log(speakWord + " " + name);
// }

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;

//------------------------------


// var helloSpeaker = {}; //Obj AND global STEP 3
// var speakWord = "Hello"; // NOT attaching speakWord var to the helloSpeaker Obj
// helloSpeaker.speak = function () { //STEP 4. it IS attached to the helloSpeaker Object
//   console.log(speakWord + " " + names );
// };

// ^^^ that feels proper. going to try exposing them globally


// // Step 2 wrap it all up in a IIFE
(function (window) {


  var helloSpeaker = {}; //Obj AND global STEP 3
  var speakWord = "Hello"; // NOT attaching speakWord var to the helloSpeaker Obj
  helloSpeaker.speak = function(name) { //STEP 4. it IS attached to the helloSpeaker Object
    console.log(speakWord + " " + name );
  }
  window.helloSpeaker = helloSpeaker;

})(window);