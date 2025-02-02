// TODO: everything is pending
// make the elements passed a function for easier reusability
var app = document.getElementById("root");
function customRender(el, attr) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var element = document.createElement(el);
    attr.forEach(function (attr) {
        for (var key in attr) {
            if (key === "children")
                continue;
            element.setAttribute(key, attr[key]);
        }
    });
    children.forEach(function (child) {
        element.appendChild(document.createTextNode(child));
    });
    app === null || app === void 0 ? void 0 : app.appendChild(element);
}
customRender("a", [{ href: "https://reactjs.org/", target: "_blank", class: "anchor text-2xl text-blue-500 hover:text-blue-700" }], "React");
