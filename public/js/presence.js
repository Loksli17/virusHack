window.addEventListener("load", () => {
    let aArr = document.querySelectorAll('.presence');
    for(let i = 0; i < aArr.length; i++){
        // console.log(aArr[i]);
        aArr[i].addEventListener('click', server, false);
    }
}, true);

function server(e){
    e.stopPropagation();
    e.preventDefault();

    let element = this;
    console.log(element);

    let
        formData = new FormData(),
        ajax = new XMLHttpRequest();

    ajax.onload = ajax.onerror = function() {
        console.log(this.status);

        if (element.className = "presence-no") {
            element.className = "presence-yes"
        } else if (element.className = "presence-yes") {
            element.className = "presence-no"
        }

        if (this.status == 200) {

        } else {

        }
    }

    ajax.open("POST", this.href);
    ajax.setRequestHeader('Accept', 'application/json, text/javascript, */*, q=0.01');
    ajax.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    ajax.send();
}
