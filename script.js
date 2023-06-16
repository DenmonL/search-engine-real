let submitBtn = document.querySelector("#submit");
let searchInput = document.querySelector("#form");
let mainForm = document.querySelector("#main");
let inputGroup = document.querySelector("#input-group");
let searchForm = document.querySelector("#search-form");

submitBtn.addEventListener("click", function () {

    if (searchInput.value === "") {
        if (searchInput.classList.contains("is-invalid")) {
            return;
        }
        searchInput.classList.add("is-invalid");
        if (!childNodesWithClass(inputGroup, "invalid-feedback")) {
            let elem = document.createElement("div");
            elem.classList.add("invalid-feedback");
            elem.innerHTML = "Anda belum mengetikkan apapun!";
            inputGroup.appendChild(elem);
        }

        setTimeout(() => {
            searchInput.classList.remove("is-invalid");
        }, 3000);
        return;
    }
    mainForm.style.visibility = "hidden";

    let elem = document.createElement('h1');
    elem.innerHTML = "Ya Mana Saya Tau Kok Tanya Saya.... T_T";
    elem.classList.add("h3");
    elem.classList.add("animation");

    searchForm.classList.add("text-left");
    searchForm.appendChild(elem);

    let tmo = setTimeout(function () {
        mainForm.style.visibility = "visible";
    }, 5000);
});

function childNodesWithClass(parentElement, desiredClass) {
    var hasChildNodesWithClass = false;

    for (var i = 0; i < parentElement.childNodes.length; i++) {
        var childNode = parentElement.childNodes[i];

        if (childNode.nodeType === Node.ELEMENT_NODE && childNode.classList.contains(desiredClass)) {
            // Child node with the desired class found
            hasChildNodesWithClass = true;
            break;
        }
    }
    return hasChildNodesWithClass;
}