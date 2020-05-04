window.addEventListener("load", () => {
    let groups = Array.from(document.getElementsByClassName("group")).splice(1);
    let selector = document.getElementById("selector");
    let options = Array.from(selector.options);
    let resetButton = document.getElementsByClassName("reset-filter")[0];

    selector.addEventListener("change", () => {
        let current;
        for (let i = 0; i < options.length; i++) {
            if(options[i].selected){
                current = parseInt(options[i].value);
            }
        }
        console.log(current);
        filter(current);
    }, false);

    resetButton.addEventListener("click", resetFilter, false);

    function filter(filter) {
        let displayGroup = [];
        groups.forEach((item) => {
            let id = parseInt(item.children[0].innerHTML);
            if (id == filter) {
                displayGroup.push(item);
            }
        });
        console.log(displayGroup);
        let parent = document.getElementsByClassName("group")[0].parentNode;
        while (parent.firstElementChild) {
            parent.firstElementChild.remove();
        }
        for (let i = 0; i < displayGroup.length; i++) {
            parent.appendChild(displayGroup[i]);
        }
    }

    function resetFilter() {
        let parent = document.getElementsByClassName("group")[0].parentNode;
        while (parent.firstElementChild) {
            parent.firstElementChild.remove();
        }
        for (let i = 0; i < groups.length; i++) {
            parent.appendChild(groups[i]);
        }
    }
}, true);
