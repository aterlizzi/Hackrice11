// const headers = {
//   "Content-Type": "application/json",
//   Authorization: "Bearer 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",
// };

// const main = async () => {
//   const res = await axios.post(
//     "https://api.openai.com/v1/engines/davinci-instruct-beta/completions",
//     {
//       prompt:
//         "Summarize the following text.\nText: Sunflowers, several species of which are native to Colorado, are grown as ornamental garden plants, for their edible seeds, and as commercial crops for confection seeds and oil. Sunflowers offer many ecological and economic benefits to commercial agriculture because they demand few inputs, such as water or nitrogen, and do not require the soil to be tilled. These characteristics make sunflowers a good candidate for crop rotations. Recent research has been looking into hybrid sunflowers that would produce fiber for paper and rubber.\nSummarization:",
//       max_tokens: 128,
//       temperature: 0.7,
//       top_p: 1,
//     },
//     {
//       headers,
//     }
//   );
//   console.log(res);
// };
// main();
let returnMsg;
chrome.runtime.onMessage.addListener(receiver);

function receiver(req, sender, sendResponse) {
  if (req.key === "J4KPsEOjYy") {
    const data = {
      prompt: req.text,
      max_tokens: 2,
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
    fetch("https://api.openai.com/v1/engines/curie/completions", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        returnMsg = data.choices[0].text;
      });
    chrome.runtime.sendMessage({ key: "k8k4IQwFaX", text: returnMsg });
  }
}
