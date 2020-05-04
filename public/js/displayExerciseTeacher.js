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
        let day = date.getDate();
        let days = document.getElementsByClassName("day");
        let currentDay = days[day - 1];
        let firstExercise;
        for (let i = 0; i < currentDay.children.length; i++) {
            let exercise = currentDay.children[i];
            if (exercise.id != 0) {
                firstExercise = exercise;
                console.log(firstExercise);
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

            let info = document.getElementsByClassName("info")[0];

            let exerciseName = document.getElementsByClassName("exercise-name")[0];
            exerciseName.innerHTML = thisExercise.subTitle;

            let groupTitle = document.getElementsByClassName("group-title")[0];
            groupTitle.innerHTML = thisExercise.gtitle + " группа";

            let link = document.getElementById("link");
            link.href = thisExercise.link;

            let setup = document.getElementById("setup");
            setup.href = "/exercise/edit?id=" + id;

            let goto = document.getElementById("goto");
            goto.href = "/exercise/view?id=" + id;

            let time = document.getElementById("time");
            time.innerHTML = thisExercise.time;

            info.style.visibility = "visible";

        }
        if (id == 0 && wrapper.children[wrapper.children.length - 1]) {
            let exerciseName = document.getElementsByClassName("exercise-name")[0];
            exerciseName.innerHTML = "";

            info.style.visibility = "hidden";
        }
    }
}, true);