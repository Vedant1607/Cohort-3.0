// Callback

/*function walkDog(callback) {

    setTimeout(() => {
        console.log("You walk the dog.");
        callback();
    },1500);
}

function cleanKitchen(callback) {
    
    setTimeout(() => {
        console.log("You clean the kitchen.");
        callback();
    }, 2500);
}

function takeOutTrash(callback) {

    setTimeout(() => {
        console.log("You take out the trash");
        callback();
    }, 500);
}

walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => {
            console.log("You finished all the chores!");
        });
    });
});*/


// Promises
function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog.");
            }
            else {
                reject("You didn't walk the dog");
            }
        },1500);
    });
}

function cleanKitchen() {
    
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You clean the kitchen.");
            }
            else {
                reject("You didn't clean the kitchen.");
            }
        }, 2500);
    });
}

function takeOutTrash() {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const trashTakenOut = true;

            if(trashTakenOut){
                resolve("You take out the trash");
            }
            else {
                reject("You didn't take out the trash");
            }
        }, 500);
    });
}

function printValue(value){
    console.log(value);
    return cleanKitchen();
}

walkDog().then(printValue)
        .then(value => {console.log(value); return takeOutTrash()})
        .then(value => {console.log(value); console.log("You finished all the chores")})
        .catch(error => console.error(error));