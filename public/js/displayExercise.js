window.addEventListener("load", () => {
    console.log(array);
    let exercises = document.getElementsByClassName("exercise");
    for (let i = 0; i < exercises.length; i++) {
        exercises[i].addEventListener("click", () => {
            let id = exercises[i].id;
            showInfo(id)
        }, false);
    }

    function showInfo(id) {
        console.log(id);
        let thisExercise;
        array.forEach((e) => {
            if (e.id == id) {
                thisExercise = e;
            }
        });

        let wrapper = document.getElementById("wrapper");
        if (wrapper.children[1]) {
            console.log("fuck");
            wrapper.removeChild(wrapper.children[1]);
        } else {
            let info = document.createElement("div");
            info.className = "info";
            let name = document.createElement("div");
            name.className = "name";
            let label = document.createElement("h5");
            label.className = "label";
            label.innerHTML = "пара";
            let exerciseName = document.createElement("h1");
            exerciseName.id = "exercise-name";
            exerciseName.className = "exercise-name";
            exerciseName.innerHTML = thisExercise.subTitle;
            let teacherName = document.createElement("div");
            teacherName.className = "teacher-name";
            teacherName.innerHTML = thisExercise.teacherFirstName + " " + thisExercise.teacherLastName + " " + thisExercise.teacherPatronyc;
            name.appendChild(label);
            name.appendChild(exerciseName);
            info.appendChild(name);
            info.appendChild(teacherName);
            wrapper.appendChild(info);
        }

    }
}, true);