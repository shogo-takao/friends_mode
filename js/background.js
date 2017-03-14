chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, {
        command: "friends mode"
    },
    function(msg) {
        console.log("result message:", msg);
    });
});