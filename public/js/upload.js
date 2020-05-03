window.addEventListener("load", () => {
    let form = document.querySelector('.file-form');
    form.addEventListener('submit', upload, false);

    let file = document.getElementById("file");
    file.addEventListener("change", () => {
        let submit = document.getElementById("submit");
        submit.style.visibility = "visible";
        console.log("kek");
    }, true);
}, true);


function upload(e) {
    e.stopPropagation();
    e.preventDefault();

    let
        progress = document.querySelector('progress'),
        formData = new FormData(),
        file = e.target.elements[0].files[0]
    ajax = new XMLHttpRequest();

    ajax.upload.onprogress = (e) => {
        let percent = e.loaded / e.total;
        console.log(e.loaded, e.total);
        progress.setAttribute('max', event.total);
        progress.value = event.loaded;
    }

    ajax.onload = ajax.onerror = function() {
        console.log(this.status);
        if (this.status == 200) {

        } else {

        }
    }

    formData.append('file', file);
    formData.append('idExercise', id);
    ajax.open("POST", "/file");
    ajax.setRequestHeader('Accept', 'application/json, text/javascript, */*, q=0.01');
    ajax.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    ajax.send(formData);

}
