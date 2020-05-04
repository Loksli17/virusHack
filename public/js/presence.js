window.addEventListener("load", () => {

    let aArr = document.querySelectorAll('.presence');
    for(let i = 0; i < aArr.length; i++){
        aArr[i].addEventListener('click', presence, false);
    }
}, true);

function presence(e){
    console.log('presence');
    e.stopPropagation();
    e.preventDefault();

    let presence = this.children[0];
    console.log(presence);

    let
        formData = new FormData(),
        ajax = new XMLHttpRequest();

    ajax.onload = ajax.onerror = function() {
        console.log(this.status);

        if (presence.className == "presence-yes") {
            presence.className = "presence-no";
        } else if (presence.className == "presence-no") {
            presence.className = "presence-yes";
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
