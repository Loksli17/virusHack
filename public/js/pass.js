window.addEventListener("load", () => {
    let aArr = document.querySelectorAll('.pass');
    for(let i = 0; i < aArr.length; i++){
        console.log(aArr[i]);
        aArr[i].addEventListener('click', server, false);
    }
}, true);

function server(e){
    e.stopPropagation();
    e.preventDefault();
    console.log(this);

    let
        formData = new FormData(),
        ajax = new XMLHttpRequest();

    ajax.onload = ajax.onerror = function() {
        console.log(this.status);
        if (this.status == 200) {

        } else {

        }
    }

    ajax.open("POST", this.href);
    ajax.setRequestHeader('Accept', 'application/json, text/javascript, */*, q=0.01');
    ajax.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    ajax.send();
}
