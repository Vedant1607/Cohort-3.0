import express from 'express';

const app = express();

let users = [
    {
        name:"John",
        kidneys:[{
            healthy:false
        },{
            healthy:true
        }]
    }
]

app.use(express.json());

// GET => User can check how many kidneys they have and their health
app.get("/",function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i=0;i<johnKidneys.length;i++){
        if (johnKidneys[i].healthy === true){
            numberOfHealthyKidneys+=1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

// POST => User can add a new kidney
app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

// PUT => User can replace a kdiney, make it healthy
app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg:"Done!"
    })
})

// DELETE => Remove all unhealthy kidney
app.delete("/",function(req,res){
    if (!isThereAtleastOneUnhealthyKidney()){
        res.status(411).json({
            msg:"You have no bad kidneys"
        })
    } else {
        const newKidneys = [];
        for(let i=0;i<users[0].kidneys.length;i++){
            if (users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg:"Done!"
        })
    }
})

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for (let i=0;i<users[0].kidneys.length;i++){
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3000);