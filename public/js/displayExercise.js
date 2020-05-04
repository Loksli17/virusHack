var id = 0;
window.addEventListener("load", () => {
    console.log(array);
    let exercises = document.getElementsByClassName("exercise");
    for (let i = 0; i < exercises.length; i++) {
        exercises[i].addEventListener("click", () => {
            id = exercises[i].id;
            showInfo(id)
        }, false);
    }

    getFirstExerciseOfTheDay();

    function getFirstExerciseOfTheDay() {
        let date = new Date();
        let day = date.getDay();
        console.log(day);
        let days = document.getElementsByClassName("day");
        if (day != 0) {
            let currentDay = days[day - 1];
            console.log(currentDay);
            let firstExercise;
            for (let i = 0; i < currentDay.children.length; i++) {
                let exercise = currentDay.children[i];
                if (exercise.id != 0) {
                    firstExercise = exercise;
                }
            }

            let id;
            if (firstExercise) {
                id = firstExercise.id;
            }

            if (id) {
                showInfo(id);
            }
        }
    }

    function showInfo(id) {
        console.log(id);
        let wrapper = document.getElementById("wrapper");
        if (id != 0) {
            let thisExercise;
            array.forEach((e) => {
                if (e.id == id) {
                    thisExercise = e;
                }
            });
            // if (wrapper.children[1]) {
            //     wrapper.removeChild(wrapper.children[1]);
            // }
            // //блок с инфой
            // let info = document.createElement("div");
            // info.className = "info";
            // //блок с названием пары
            // let name = document.createElement("div");
            // name.className = "name";
            // //слово "пара"
            // let label = document.createElement("h5");
            // label.className = "label";
            // label.innerHTML = "пара";
            // //название пары
            // let exerciseName = document.createElement("h1");
            // exerciseName.id = "exercise-name";
            // exerciseName.className = "exercise-name";
            // exerciseName.innerHTML = thisExercise.subTitle;
            // //описание пары
            // let description = document.createElement("div");
            // description.className = "description";
            // description.innerHTML = thisExercise.description;
            // //имя преподавателя
            // let teacherName = document.createElement("div");
            // teacherName.className = "teacher-name";
            // teacherName.innerHTML = thisExercise.teacherFirstName[0] + "." + thisExercise.teacherLastName[0] + ". " + thisExercise.teacherPatronyc;
            //
            // // let input = document.
            //
            // name.appendChild(label);
            // name.appendChild(exerciseName);
            // info.appendChild(name);
            // info.appendChild(description);
            // info.appendChild(teacherName);
            // info.style.visibility = "visible";
            // wrapper.appendChild(info);
            let filesField = document.getElementById("files-field");
            filesField.innerHTML = "";
            thisExercise.filesStudent.forEach((file) => {
                let newRow = document.createElement("div");
                newRow.className = "view-row";
                let viewField = document.createElement("div");
                viewField.className = "view-field";
                viewField.innerHTML = file;
                let viewContent = document.createElement("div");
                viewContent.className = "view-content";
                let fileDel = document.createElement("a");
                fileDel.className = "file-del";
                fileDel.href = "/file/delete?filename=" + file + "&path=/student";
                fileDel.innerHTML = "Удалить";
                let fa = document.createElement("i");
                fa.className = "fa fa-spinner fa-spin";
                viewContent.appendChild(fileDel);
                viewContent.appendChild(fa);
                newRow.appendChild(viewField);
                newRow.appendChild(viewContent);
                filesField.appendChild(newRow);
            });


            let submit = document.getElementById("submit");
            submit.style.display = "none";

            let fileInput = document.getElementById("file");
            fileInput.value = "";

            let progress = document.getElementById("progress");
            progress.style.display = "none";

            let info = document.getElementsByClassName("info")[0];

            let exerciseName = document.getElementsByClassName("exercise-name")[0];
            exerciseName.innerHTML = thisExercise.subTitle;

            let description = document.getElementsByClassName("description")[0];
            description.innerHTML = thisExercise.description;

            let attachedFiles = document.getElementById("attached-files");
            attachedFiles.innerHTML = "";
            for (let i = 0; i < thisExercise.files.length; i++) {
                let file = document.createElement("div");
                file.className = "attached-file"
                file.innerHTML = thisExercise.files[i];
                attachedFiles.appendChild(file);
            }

            let teacherName = document.getElementsByClassName("teacher-name")[0];
            teacherName.innerHTML = thisExercise.teacherFirstName[0] + "." + thisExercise.teacherLastName[0] + ". " + thisExercise.teacherPatronyc;

            let link = document.getElementsByClassName("link")[0];
            link.href = thisExercise.link;

            info.style.display = "block";

        }
        if (id == 0 && wrapper.children[wrapper.children.length - 1]) {
            // wrapper.removeChild(wrapper.children[1]);
            let info = document.getElementsByClassName("info")[0];
            let filesField = document.getElementById("files-field");
            filesField.innerHTML = "";
            let exerciseName = document.getElementsByClassName("exercise-name")[0];
            exerciseName.innerHTML = "";

            let description = document.getElementsByClassName("description")[0];
            description.innerHTML = "";

            let attachedFiles = document.getElementById("attached-files");
            attachedFiles.innerHTML = "";

            let teacherName = document.getElementsByClassName("teacher-name")[0];
            teacherName.innerHTML = "";
            info.style.display = "none";
        }
    }

}, true);
