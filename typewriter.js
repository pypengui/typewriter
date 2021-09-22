const sentence = "hello there from lighthouse labs";
for (const char of sentence) {
  setTimeout(() => {
    console.log(char);
  }, 2000); // <= 1s delay to make it noticeable. Can dial it down later.
}
