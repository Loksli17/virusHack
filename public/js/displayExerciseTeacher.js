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
        let wrapper = document.getElementsByClassName("wrapper")[0];
        if (id != 0) {
            let thisExercise;
            array.forEach((e) => {
                if (e.id == id) {
                    thisExercise = e;
                }
            });

            let info = document.getElementsByClassName("info")[0];

            let exerciseName = document.getElementsByClassName("exercise-name")[0];
            exerciseName.textContent = thisExercise.subTitle;

            let groupTitle = document.getElementsByClassName("group-title")[0];
            groupTitle.textContent = thisExercise.gtitle + " группа";

            let link = document.getElementById("link");
            link.href = thisExercise.link;

            let setup = document.getElementById("setup");
            setup.href = "/exercise/edit?id=" + id;

            let goto = document.getElementById("goto");
            goto.href = "/exercise/view?id=" + id;

            let time = document.getElementById("time");
            time.textContent = thisExercise.time;

            let description = document.getElementsByClassName("lessonDescription")[0];
            console.log(thisExercise.description);
            description.textContent = thisExercise.description;

            info.style.display = "block";

        }
        if (id == 0 && wrapper.lastElementChild) {
            let info = document.getElementsByClassName("info")[0];
            let exerciseName = document.getElementsByClassName("exercise-name")[0];
            exerciseName.textContent = "";

            info.style.display = "none";
        }
    }
}, true);
