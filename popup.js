"use strict";

function sayHello() {
  const btn = document.createElement("button");
  const btnText = document.createTextNode("Open in CodeSandbox");

  btn.appendChild(btnText);

  btn.style.fontSize = "15px";
  btn.style.padding = "0.7em 1.7em";
  btn.style.margin = "0 0.3em 0.3em 0";
  btn.style.borderRadius = "0.2em";
  btn.style.fontWeight = "bold";
  btn.style.color = "#FFFFFF";
  btn.style.backgroundColor = "#3369ff";
  btn.style.border = "0";
  btn.style.textAlign = "center";
  btn.style.cursor = "pointer";

  btn.onclick = function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const url = tabs[0].url;
      const codesandboxUrl = url.replace(
        "https://github.com",
        "https://codesandbox.io/s/github"
      );

      chrome.tabs.update({ url: codesandboxUrl });

      window.close();
    });
  };

  document.body.appendChild(btn);
}

window.onload = sayHello;
