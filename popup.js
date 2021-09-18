const emptyTag = document.querySelector(".empty");
const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { text: "Hello world." });
  });
});
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.key === "k8k4IQwFaX") {
    const summary = msg.text;
    emptyTag.textContent = summary;
  } else if (msg.key === "ogLlRDalkA") {
    const text = msg.text;
    emptyTag.textContent = text;
  }
});
