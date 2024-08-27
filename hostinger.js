const story = document.body.querySelector(".story");
const setText = document.body.querySelector("#set-text");
const clearText = document.body.querySelector("#clear-text");

setText.addEventListener("click", () => {
  story.textContent =
    "I will be a great FrontEnd Developer, oh yessss great oppurtunities locate me whoosh and i'm preparing greatly for them";
});
clearText.addEventListener("click", () => {
  story.textContent = "";
});

const parent = document.body.querySelector(".parent");

const addChild = document.body.querySelector("#add-child");

addChild.addEventListener("click", () => {
  if (parent.childNodes.length > 1) {
    return;
  }
  const child = document.createElement("div");
  child.classList.add("child");
  child.textContent = "child";
  parent.appendChild(child);
});

const removeChild = document.body.querySelector("#remove-child");
removeChild.addEventListener("click", () => {
  const child = document.body.querySelector(".child");
  parent.removeChild(child);
});
