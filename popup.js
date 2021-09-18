const emptyTag = document.querySelector(".empty");
const button = document.querySelector(".btn");
const container = document.querySelector(".container");
button.addEventListener("click", () => {
  container.appendChild(
    `<svg class="spinner" viewBox="0 0 50 50">
      <circle
        class="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="5"
      ></circle>
    </svg>`
  );
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { text: "Hello world." });
  });
});
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  const child = document.querySelector(".spinner");
  container.removeChild(child);
  if (msg.key === "k8k4IQwFaX") {
    const summary = msg.text;
    emptyTag.textContent = summary;
  } else if (msg.key === "ogLlRDalkA") {
    const text = msg.text;
    emptyTag.textContent = text;
  }
});
