function sendData (tabURL, tabTitle) {

    jQuery.post("http://myalexandria.herokuapp.com/add",
                {"title": tabTitle,
                "url": tabURL,
                "note": ""});
    alert("You just added a scroll to your Library of Alexandria!");
}

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: sendData(tab.url, tab.title)
  });
});
