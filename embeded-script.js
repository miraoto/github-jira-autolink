window.onload = function(){
  let commitTitle = document.getElementsByClassName("commit-title");
  if (commitTitle) {
    let jiraId = commitTitle[0].innerText.match(/NOTE-\d+/)
    if (jiraId) {
      // TODO: 設定から登録する
      jiraUrl = 'https://jira.url.com/browse/'
      let href = document.createElement("a");
      href.setAttribute('href', jiraUrl + jiraId);
      href.setAttribute('target', '_blank');
      href.setAttribute('style', 'color: #0366d6;');
      href.appendChild(document.createTextNode("[" + jiraId  + "] "))
      commitTitle[0].appendChild(href)
    }
  }
};
