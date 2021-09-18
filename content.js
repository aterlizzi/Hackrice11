chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.text === "Hello world.") {
    let message = DOMParser();
    chrome.runtime.sendMessage(message);
  }
  return true;
});

const DOMParser = () => {
  const body = document.body;
  const article = "";
  console.log(body);
  if (body.querySelector("#root")) {
    if (body.querySelector("#root").tagName.toLowerCase() === "div") {
      return {
        key: "ogLlRDalkA",
        text: "Can't summarize this article format.",
      };
    }
  } else {
    const paragraphArr = document.querySelectorAll("p");
    paragraphArr.forEach((paragraph) => {
      console.log(paragraph.textContent);
    });
    console.log(article);
    // return { key: "J4KPsEOjYy", text: "I think therefore I" };
  }
};
