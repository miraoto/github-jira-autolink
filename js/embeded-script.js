window.onload = function(){
  let commitTitle = document.getElementsByClassName('commit-title');
  if (commitTitle[0]) {
    const regex = new RegExp(localStorage[INPUT_CODE_NAME] + '-\d+');
    let jiraId = commitTitle[0].innerText.match(regex)
    if (jiraId) {
      let href = document.createElement('a');
      href.setAttribute('href', localStorage[INPUT_URL_NAME] + jiraId);
      href.setAttribute('target', '_blank');
      href.setAttribute('style', 'color: #0366d6;');
      href.appendChild(document.createTextNode('[' + jiraId  + '] '))
      commitTitle[0].appendChild(href)
    }
  }
};
