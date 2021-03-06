// TODO: refactor
const INPUT_URL_NAME = 'jira_url';
const INPUT_CODE_NAME = 'jira_project_code';

const injectScript = (file, node) => {
  var s, th;
  th = document.getElementsByTagName(node)[0];
  s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', file);
  return th.appendChild(s);
};

chrome.extension.sendRequest({storage: INPUT_CODE_NAME}, (response) => {
  localStorage[INPUT_CODE_NAME] = response.storage;
});

chrome.extension.sendRequest({storage: INPUT_URL_NAME}, (response) => {
  localStorage[INPUT_URL_NAME] = response.storage;
});

injectScript(chrome.extension.getURL('js/const.js'), 'body');
injectScript(chrome.extension.getURL('js/embeded-script.js'), 'body');
