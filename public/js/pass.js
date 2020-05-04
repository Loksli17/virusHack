window.addEventListener("load", () => {

    let aArr = document.querySelectorAll('.pass');
    for(let i = 0; i < aArr.length; i++){
<<<<<<< HEAD
        aArr[i].addEventListener('click', pass, false);
=======
        console.log(aArr[i]);
        aArr[i].addEventListener('click', server, false);
>>>>>>> f168a0597b0b3b0a5d3bec5cb25e6b44b57c5e04
    }
}, true);

function pass(e){
    console.log('pass');
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
