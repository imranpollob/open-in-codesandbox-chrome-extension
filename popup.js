"use strict";

function sayHello() {
  const button = document.createElement("button");
  const buttonText = document.createTextNode("Open in CodeSandbox");

  button.appendChild(buttonText);

  button.style.fontSize = "15px";
  button.style.padding = "0.7em 1.7em";
  button.style.margin = "0 0.3em 0.3em 0";
  button.style.borderRadius = "0.2em";
  button.style.fontWeight = "bold";
  button.style.color = "#FFFFFF";
  button.style.backgroundColor = "#3369ff";
  button.style.border = "0";
  button.style.textAlign = "center";
  button.style.cursor = "pointer";

  button.onclick = function() {
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

  document.body.appendChild(button);
}

window.onload = sayHello;
