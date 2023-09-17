window.addEventListener("keydown", function(e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
        e.preventDefault();
        window.location = "https://www.bing.com/search?q=%E6%80%8E%E6%A0%B7%E5%AD%A6%E4%B9%A0js%E3%80%81html%E5%92%8Ccss%EF%BC%9F";
    }
});