// // Method 1 (works on all browsers but not that good)

// let textarea = document.querySelector("textarea");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   let text = textarea.value;
//   let a = document.createElement("a");
//   a.download = "saved-file.txt";
//   a.href = URL.createObjectURL(new Blob([text]));
//   a.click();
// });

// -------------------------------------------------------------------------------------------------------

// // Method 2 (works on Chrome and Edge browsers but not works as you see in modern websites)

// selecting my textarea and btn
let textarea = document.querySelector("textarea");
let btn = document.querySelector("button");

// listening to the btn clicking (we use async cause we will need await)
btn.addEventListener("click", async function () {
  // function that picks default file name and restricts its type to .txt file (deals with native file explorer)
  const fileHandle = await window.showSaveFilePicker({
    suggestedName: "saved-file.txt",
    types: [
      {
        description: "Text File",
        accept: { "text/plain": [".txt"] },
      },
    ],
  });

  // opens the file to write into
  const writable = await fileHandle.createWritable();
  // writing into the file (writing the value (content) of textarea)
  await writable.write(textarea.value);
  // closing the file to save it
  await writable.close();
});
