// TODO: everything is pending
// make the elements passed a function for easier reusability
const app = document.getElementById("root");

type Attribute = {
  [key: string]: string
}

function customRender(el: string, attr: Attribute[], ...children: string[]) {

  const element = document.createElement(el);
  attr.forEach((attr) => {
    for (const key in attr) {
      if (key === "children") continue;
      element.setAttribute(key, attr[key]);
    }
  })
  children.forEach((child) => {
    element.appendChild(document.createTextNode(child));
  })
  app?.appendChild(element);

}

customRender("a", [{ href: "https://reactjs.org/", target: "_blank", class: "anchor text-2xl text-blue-500 hover:text-blue-700" }], "React")
