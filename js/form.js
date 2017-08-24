window.onload = function(){
  document.getElementById('save').onclick = function(){
    localStorage.setItem(INPUT_URL_NAME, document.getElementById(INPUT_URL_NAME).value);
    localStorage.setItem(INPUT_CODE_NAME, document.getElementById(INPUT_CODE_NAME).value);
    window.close();
  }
  document.getElementById(INPUT_URL_NAME).value = localStorage[INPUT_URL_NAME];
  document.getElementById(INPUT_CODE_NAME).value = localStorage[INPUT_CODE_NAME];
}
