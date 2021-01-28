"use strict"

let inputs = document.getElementsByClassName('inputs');
for (let inp of inputs) {
    inp.addEventListener('focus', (e) => {
        let txt = e.path[0].parentElement.children[1]
        let inp = e.path[0].value;
        if (inp === '') {
            let up = 0;
            let id = setInterval(() => {
                if (up >= 15) {
                    clearInterval(id)
                } else {
                    up += 0.5;
                    txt.style.transform = `translate(0, -${up}px)`
                }
            }, 1)
        }
    })

    inp.addEventListener('focusout', (e) => {
        let txt = e.path[0].parentElement.children[1]
        let inp = e.path[0].value;
        if (inp === '') {
            let up = 15;
            let id = setInterval(() => {
                if (up <= 0) {
                    clearInterval(id)
                } else {
                    up -= 0.5;
                    txt.style.transform = `translate(0, -${up}px)`
                }
            }, 1)
        }
    })
}

class User {
    constructor (personal) {

    }
}

console.log()