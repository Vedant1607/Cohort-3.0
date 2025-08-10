const axios = require("axios");

// Fetch
/* 
function main() {
    fetch("")
    .then(async response => {
        const json = await response.json();
    })
}*/

// GET
/*
async function main() {
    const response = await fetch("https://www.postb.in/1744977871486-2795575640629");
    const json = await response.text();
    console.log(json);
}*/

// POST
/*
async function main() {
    const response = await fetch("https://www.postb.in/1744977871486-2795575640629", {
        method: "POST"
    });
    const json = await response.json();
    console.log(json.length);
}

// Axios
async function main() {
    const response = await axios.get("");
    // response.data
    console.log(response.data.length);
}*/

// POST
async function main() {
    const response = await axios.post("https://www.postb.in/1744977871486-2795575640629",{
        body:"legion"
    });
    // response.data
    console.log(response.data);
}


main();