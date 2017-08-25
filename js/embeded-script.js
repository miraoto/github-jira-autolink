window.onload = function(){
  // attach link to title
  let title = document.getElementsByClassName('commit-title')[0];
  if (!title) {
    title = document.getElementsByClassName('js-issue-title')[0];
  }
  if (title) {
    let regex = new RegExp(localStorage[INPUT_CODE_NAME] + "-\\d+");
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
  // attach link to pull-req
  let branches = document.getElementsByClassName('branch');
  if(branches.length > 1) {
    let pullReqBranch = branches[branches.length -1]
    let pullReqBranchName = pullReqBranch.innerText
    regex = new RegExp("(" + localStorage[INPUT_CODE_NAME] + "-\\d+)");
    if (pullReqBranchName.match(regex)[0]) {
      let pullReqJiraId = pullReqBranchName.match(regex)[0]
      let pullReqTitle = document.getElementById('pull_request_title').value;
      document.getElementById('pull_request_title').value = pullReqJiraId + " " + pullReqTitle;
      console.log(pullReqTitle);
    }
  }
};
