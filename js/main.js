$(function(){

    function chenge_text(className){
        var i = 0;
        var ii = 0;
        var code = document.getElementsByClassName(className);
        var color = ["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","A3338B"];

        for (i = 0; i < code.length; i++){
            code[i].innerHTML = code[i].innerText.replace(/./g, function(s){
                return '<span style="color:#'+color[ii++ % color.length]+'">' + s + '</span>'
            });
        }
    }

    chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

        if (location.host.match(/github/)) {
            var className = "blob-code";
        } else if (location.host.match(/twitter/)) {
            var className = "tweet-text";
        }

        chenge_text(className);
    });

    $('.new-tweets-bar-visible').on('click', function(){

        var className = "tweet-text";

        chenge_text(className);

    });
    
});