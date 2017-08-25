window.onload = () => {
  attachLinkToTitle();
  attachLinkToPullReq();
};

const attachLinkToTitle = () => {
  let regex = new RegExp(`${localStorage[INPUT_CODE_NAME]}-\\d+`);
  let title = document.getElementsByClassName('commit-title')[0];
  if (!title) {
    title = document.getElementsByClassName('js-issue-title')[0];
  }
  if (!title) {
   return false;
  }
  let jiraId = title.innerText.match(regex)
  if (!jiraId) {
   return false;
  }
  let href = document.createElement('a');
  href.setAttribute('href', `${localStorage[INPUT_URL_NAME]}${jiraId}`);
  href.setAttribute('target', '_blank');
  href.setAttribute('style', 'color: #0366d6;');
  href.appendChild(document.createTextNode(`[${jiraId}]`));
  title.appendChild(href);
}

const attachLinkToPullReq = () => {
  let regex = new RegExp(`(${localStorage[INPUT_CODE_NAME]}-\\d+)`);
  let branches = document.getElementsByClassName('branch');
  if(branches.length <= 1) {
    return false;
  }
  let pullReqBranch = branches[branches.length -1];
  let pullReqBranchName = pullReqBranch.innerText;
  if (!pullReqBranchName.match(regex)[0]) {
    return false;
  }
  let pullReqJiraId = pullReqBranchName.match(regex)[0];
  let pullReqTitle = document.getElementById('pull_request_title').value;
  document.getElementById('pull_request_title').value = `${pullReqJiraId} ${pullReqTitle}`;
}
