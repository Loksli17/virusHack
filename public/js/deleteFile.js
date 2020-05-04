window.addEventListener("load", () => {
    let aArr = document.querySelectorAll('.file-del');

    for (let i = 0; i < aArr.length; i++) {
        console.log(aArr[i]);
        aArr[i].addEventListener('click', deleteFile, false);
    }

}, true);


function deleteFile(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log(this.href);
    let element = this;
    console.log(element);

    let
        formData = new FormData(),
        ajax = new XMLHttpRequest();

    ajax.upload.onprogress = (e) => {
        // здесь активировать тег i
        let parent = element.parentNode;
        console.log(element);
        let i = parent.lastElementChild;
        console.log(i);
        // i.setAttribute('aria-hidden', 'false');
        i.style.display = "inherit";
        console.log("1");
    }

    ajax.onload = ajax.onerror = function() {
        //здесь закрыть тег i
        let parent = element.parentNode;
        let i = parent.lastElementChild;
        console.log(2);
        // i.style.display = "none";
        let row = parent.parentNode;
        row.remove();
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
