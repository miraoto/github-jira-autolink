window.onload = function(){
  // attach link to title
  let title = document.getElementsByClassName('commit-title')[0];
  if (!title) {
    title = document.getElementsByClassName('js-issue-title')[0];
  }
  if (title) {
    const regex = new RegExp(localStorage[INPUT_CODE_NAME] + "-\\d+");
    let jiraId = title.innerText.match(regex)
    if (jiraId) {
      let href = document.createElement('a');
      href.setAttribute('href', localStorage[INPUT_URL_NAME] + jiraId);
      href.setAttribute('target', '_blank');
      href.setAttribute('style', 'color: #0366d6;');
      href.appendChild(document.createTextNode('[' + jiraId  + '] '))
      title.appendChild(href)
    }
  }
};
