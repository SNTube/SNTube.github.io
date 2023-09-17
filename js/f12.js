window.addEventListener("keydown", function(e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
        e.preventDefault();
        window.location = "http://www.bing.com";
    }
});