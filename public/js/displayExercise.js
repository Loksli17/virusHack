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
        let days = document.getElementsByClassName("day");
        let currentDay = days[day - 1].lastElementChild;
        let firstExercise;
        for (let i = 0; i < currentDay.children.length; i++) {
            let exercise = currentDay.children[i];
            if (exercise.id) {
                firstExercise = exercise;
            }
        }

        if (!firstExercise) {
            for (let i = 0; i < days.length; i++) {
                let currentDay = days[i].lastElementChild;
                for (let i = 0; i < currentDay.children.length; i++) {
                    let exercise = currentDay.children[i];
                    if(exercise.id) {
                        firstExercise = exercise;
                    }
                }
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

            let filesField = document.getElementById("files-field");
            filesField.innerHTML = "";
            thisExercise.filesStudent.forEach((file) => {
                let newRow = document.createElement("div");
                newRow.className = "view-row";
                let viewField = document.createElement("div");
                viewField.className = "view-field";
                viewField.textContent = file;
                let viewContent = document.createElement("div");
                viewContent.className = "view-content";
                let fileDel = document.createElement("a");
                fileDel.className = "file-del";
                fileDel.href = "/file/delete?filename=" + file + "&path=/student";
                viewContent.appendChild(fileDel);
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
            exerciseName.textContent = thisExercise.subTitle;

            let description = document.getElementsByClassName("description")[0];
            description.textContent = thisExercise.description;

            let attachedFiles = document.getElementById("attached-files");
            attachedFiles.innerHTML = "";
            for (let i = 0; i < thisExercise.files.length; i++) {
                let file = document.createElement("a");
                file.className = "attachment";
                file.textContent = thisExercise.files[i];
                file.href = "/file/student/" + thisExercise.files[i];
                attachedFiles.appendChild(file);
            }

            let teacherName = document.getElementsByClassName("teacher-name")[0];
            teacherName.textContent = thisExercise.teacherFirstName[0] + "." + thisExercise.teacherPatronyc[0] + ". " + thisExercise.teacherLastName;

            let link = document.getElementsByClassName("link")[0];
            link.href = thisExercise.link;

            let time = document.getElementsByClassName("time")[0];
            console.log(time);
            time.textContent = thisExercise.time;

            info.style.display = "flex";

        }
        if (id == 0 && wrapper.children[wrapper.children.length - 1]) {
            // wrapper.removeChild(wrapper.children[1]);
            let info = document.getElementsByClassName("info")[0];
            let filesField = document.getElementById("files-field");
            filesField.innerHTML = "";
            let exerciseName = document.getElementsByClassName("exercise-name")[0];
            exerciseName.textContent = "";

            let description = document.getElementsByClassName("description")[0];
            description.textContent = "";

            let attachedFiles = document.getElementById("attached-files");
            attachedFiles.innerHTML = "";

            let teacherName = document.getElementsByClassName("teacher-name")[0];
            teacherName.textContent = "";

            let time = document.getElementsByClassName("time")[0];
            time.textContent = "";

            info.style.display = "none";
        }
    }

}, true);
