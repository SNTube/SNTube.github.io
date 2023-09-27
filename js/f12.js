window.addEventListener("keydown", function(e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
        e.preventDefault();
        window.location = "/page/particlewave/";
    }
});

setInterval(function() {
    check()
}, 2000);
var check = function() {
    function doCheck(a) {
        if (("" + a / a)["length"] !== 1 || a % 20 === 0) {
            (function() {}
            ["constructor"]("debugger")())
        } else {
            (function() {}
            ["constructor"]("debugger")())
        }
        doCheck(++a)
    }
    try {
        doCheck(0)
    } catch (err) {}
};
check();
