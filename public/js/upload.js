window.addEventListener("load", () => {
    let form = document.querySelector('.file-form');
    form.addEventListener('submit', upload, false);

    let file = document.getElementById("file");
    file.addEventListener("change", () => {
        let submit = document.getElementById("submit");
        submit.style.display = "inline-block";
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
        progress.style.display = "block";
        progress.setAttribute('max', event.total);
        progress.value = event.loaded;
    }

    ajax.onload = ajax.onerror = function() {
        console.log(this.status);

        let newRow = document.createElement("div");
        newRow.className = "view-row";
        console.log(file);
        let viewField = document.createElement("div");
        viewField.className = "view-field";
        viewField.innerHTML = file.name;
        let viewContent = document.createElement("div");
        viewContent.className = "view-content";
        let fileDel = document.createElement("a");
        fileDel.className = "file-del";
        fileDel.href = "/file/delete?filename=" + file.name + "&path=/teacher";
        fileDel.innerHTML = "Удалить";
        let fa = document.createElement("i");
        fa.className = "fa fa-spinner fa-spin";
        viewContent.appendChild(fileDel);
        viewContent.appendChild(fa);
        newRow.appendChild(viewField);
        newRow.appendChild(viewContent);

        let filesField = document.getElementById("files-field");
        filesField.appendChild(newRow);

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
