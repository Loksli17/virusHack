window.addEventListener("load", () => {

    let aArr = document.querySelectorAll('.presence');
    for(let i = 0; i < aArr.length; i++){
<<<<<<< HEAD:public/js/persence.js
        aArr[i].addEventListener('click', persence, false);
=======
        // console.log(aArr[i]);
        aArr[i].addEventListener('click', server, false);
>>>>>>> f168a0597b0b3b0a5d3bec5cb25e6b44b57c5e04:public/js/presence.js
    }
}, true);

function persence(e){
    console.log('persence');
    e.stopPropagation();
    e.preventDefault();

    let element = this;
    console.log(element);

    let
        formData = new FormData(),
        ajax = new XMLHttpRequest();

    ajax.onload = ajax.onerror = function() {
        console.log(this.status);

        if (element.className = "no-student") {
            element.className = "yes-student"
        } else if (element.className = "yes-student") {
            element.className = "no-student"
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
