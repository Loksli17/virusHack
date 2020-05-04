window.addEventListener("load", () => {

    let aArr = document.querySelectorAll('.presence');
    for(let i = 0; i < aArr.length; i++){
        aArr[i].addEventListener('click', persence, false);
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
