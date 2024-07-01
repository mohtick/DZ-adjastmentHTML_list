const name = document.querySelector('.name');
const btn = document.querySelector('.btn');
const clearBtn = document.querySelector('.clearBtn');
const out = document.querySelector('.out');
const warning = document.querySelector('.warning');
const warngMsg = 'Error! Enter your name!';






let add = (event) => {
    event.preventDefault();
    let nameVal = name.value.trim();
    if (nameVal === '') {
        warning.innerHTML = warngMsg;
        return;
    }
    warning.innerHTML = '';
    out.insertAdjacentHTML("beforeend", `${nameVal}<br>`);
    name.value = '';
}

btn.addEventListener("click", add);



clearBtn.addEventListener("click", () => out.innerHTML = '');



