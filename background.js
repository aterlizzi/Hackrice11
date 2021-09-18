let returnMsg;
chrome.runtime.onMessage.addListener(receiver);

function receiver(req, sender, sendResponse) {
  if (req.key === "J4KPsEOjYy") {
    const data = {
      prompt: `Summarize the following text.\nText: ${req.text}\nSummarization:`,
      max_tokens: 256,
      temperature: 0.7,
      top_p: 1,
      stream: false,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
      body: JSON.stringify(data),
    };
    fetch(
      "https://api.openai.com/v1/engines/davinci-instruct-beta/completions",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        returnMsg = data.choices[0].text;
      });
    chrome.runtime.sendMessage({ key: "k8k4IQwFaX", text: returnMsg });
  }
}
