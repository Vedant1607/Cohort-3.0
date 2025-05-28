function addTodo(){
    const inputEl = document.querySelector('input');
    const value = inputEl.value;
    console.log(value);
}

let ctr = 0;
function callback() {
    const el = document.querySelectorAll("h2")[1];
    el.textContent = ctr;
    ctr = ctr + 1;
}

// setInterval(callback, 1000);