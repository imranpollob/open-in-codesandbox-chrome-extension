"use strict";

function sayHello() {
  var h = document.createElement("button");
  var t = document.createTextNode("Open in CodeSandbox");

  h.appendChild(t);

  h.style.fontSize = "20px";

  h.onclick = function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var url = tabs[0].url;
      var codesandboxUrl = url.replace(
        "https://github.com",
        "https://codesandbox.io/s/github"
      );

      chrome.tabs.update({ url: codesandboxUrl });

      window.close();
    });
  };

  document.body.appendChild(h);
}

window.onload = sayHello;
