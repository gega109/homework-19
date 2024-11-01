var box = document.getElementById("box");
var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  var Information = prompt("შეიყვანეთ ინფორმაცია");
  switch (true) {
    case Information === "":
      alert("ხარვეზია");
      break;

    default:
      var li = document.createElement("li");
      li.textContent = Information;
      box.appendChild(li);
      var RemoveButton = document.createElement("button");
      RemoveButton.textContent = "click me for delete info";
      box.appendChild(RemoveButton);
      break;
  }
  RemoveButton.addEventListener("click", () => {
    box.firstChild.remove();
    box.removeChild(RemoveButton);
  });
});
