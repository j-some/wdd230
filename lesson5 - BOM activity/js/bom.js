const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  let inputText = input.value;
  if (inputText == "") {
    alert("Please enter the Book and chapter of the BOM ");
  } else {
    let myItem = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = "❌";
    list.appendChild(listItem);

    listBtn.onclick = function (e) {
      list.removeChild(listItem);
    };

    input.focus();
  }
});
