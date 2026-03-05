// Message Needed In Output
"You Pressed Ctrl + Alt + Shift";

// // way
// document.addEventListener("keydown", function (e) {
//   if (e.key === "Control") {
//     document.addEventListener("keydown", function (e) {
//       if (e.key === "Alt") {
//         document.addEventListener("keydown", function (e) {
//           if (e.key === "Shift") {
//             console.log("You Pressed Ctrl + Alt + Shift");
//           }
//         });
//       }
//     });
//   }
// });

// // better way
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.altKey && e.shiftKey) {
    console.log("You Pressed Ctrl + Alt + Shift");
  }
});
