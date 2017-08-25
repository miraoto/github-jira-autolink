window.onload = function(){
  document.getElementById('save').onclick = function(){
    chrome.extension.sendRequest({storage: INPUT_URL_NAME, value: document.getElementById(INPUT_URL_NAME).value});
    chrome.extension.sendRequest({storage: INPUT_CODE_NAME, value: document.getElementById(INPUT_CODE_NAME).value});
    window.close();
  }
  document.getElementById(INPUT_URL_NAME).value = localStorage[INPUT_URL_NAME];
  document.getElementById(INPUT_CODE_NAME).value = localStorage[INPUT_CODE_NAME];
}
