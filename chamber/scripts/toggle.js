const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
display.classList.add("grid");

function toggleView(view) {
    display.classList.remove("grid", "list");
    display.classList.add(view);
}
gridbutton.addEventListener("click", () => toggleView("grid"));
listbutton.addEventListener("click", () => toggleView("list"));	

