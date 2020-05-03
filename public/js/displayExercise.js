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
            let info = document.getElementsByClassName("info")[0];
            let exerciseName = document.getElementsByClassName("exercise-name")[0];
            exerciseName.innerHTML = thisExercise.subTitle;
            let description = document.getElementsByClassName("description")[0];
            description.innerHTML = thisExercise.description;
            let teacherName = document.getElementsByClassName("teacher-name")[0];
            teacherName.innerHTML = thisExercise.teacherFirstName[0] + "." + thisExercise.teacherLastName[0] + ". " + thisExercise.teacherPatronyc;
            wrapper.children[wrapper.children.length - 1].style.visibility = "visible";

        }
        if (id == 0 && wrapper.children[wrapper.children.length - 1]) {
            // wrapper.removeChild(wrapper.children[1]);
            wrapper.children[wrapper.children.length - 1].style.visibility = "hidden";
        }
    }

}, true);