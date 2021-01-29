"use strict"

function EaseOutQuint (x) {
    return 1 - ((1 - x)**5)
}

function EaseInQuint (x) {
    return x ** 5
}

let inputs = document.getElementsByClassName('inputs');
for (let inp of inputs) {
    inp.addEventListener('focus', (e) => {
        let txt = e.path[0].parentElement.children[1].children[0]
        console.log(txt)
        let inp = e.path[0].value;
        if (inp === '') {
            let x = 0;
            let up = 0;
            let id = setInterval(() => {
                if (up >= 15) {
                    clearInterval(id)
                } else {
                    up = EaseOutQuint(x) * 15;
                    x += 0.01;
                    txt.style.transform = `translate(0, -${up}px)`
                }
            }, 1)
            txt.style.background = `linear-gradient(var(--paste) 0% 50%, white 50% 100%)`
        }
    })

    inp.addEventListener('focusout', (e) => {
        let txt = e.path[0].parentElement.children[1].children[0]
        let inp = e.path[0].value;
        if (inp === '') {
            let up = 15;
            let x  = 1;
            let id = setInterval(() => {
                if (up <= 0) {
                    clearInterval(id)
                } else {
                    up = EaseInQuint(x) * 15;
                    x -= 0.01;
                    txt.style.transform = `translate(0, -${up}px)`
                }
            }, 1)
            txt.style.background = `white`
        }
    })
}

const MALE = document.getElementById('imgMale');
const FEMALE = document.getElementById('imgFemale');
const OTHER = document.getElementById('imgOther');

for (let elem of document.getElementsByName('gender')) {
    elem.addEventListener('click', (e) => {
        switch (e.path[0].id) {
            case "male":
                MALE.style.display = 'block';
                FEMALE.style.display = 'none';
                OTHER.style.display = 'none';
                break;
            case "female":
                MALE.style.display = 'none';
                FEMALE.style.display = 'block';
                OTHER.style.display = 'none';
                break;
            case "other":
                MALE.style.display = 'none';
                FEMALE.style.display = 'none';
                OTHER.style.display = 'block';
                break;
        }
    })
}

const FNAME_INPUT = document.getElementById("fname")
const LNAME_INPUT = document.getElementById("lname")
const FNAME = document.getElementById("pi-graphic-fname");
const LNAME = document.getElementById("pi-graphic-lname");

FNAME_INPUT.addEventListener("blur", () => {
    FNAME.innerText = FNAME_INPUT.value
})
LNAME_INPUT.addEventListener("blur", () => {
    LNAME.innerText = LNAME_INPUT.value
})


