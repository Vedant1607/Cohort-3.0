const axios = require("axios");

async function main() {
    /*
    const response = await axios.get(
        "https://httpdump.app/dumps/5ca2abc7-235a-4d0f-b9ae-ab4c4f1eb845/?a=b", {
            username:"legion",
            password:123456789,
        },
        {
            headers: {
                Authorization: "Bearer 123"
            }
        }
    )*/

        const response = await axios({
            url:"https://httpdump.app/dumps/5ca2abc7-235a-4d0f-b9ae-ab4c4f1eb845",
            method: "PUT",
            headers: {
                Authorization: "Bearer 123"
            },
            data: {
                username: "legion"
            }
        });
    console.log(response.data);
}

main();