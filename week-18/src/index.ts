import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

async function main() {
  const allUsers = await client.user.findMany()
  console.log(allUsers)
}

async function createUser() {
  await client.user.create({
    data:{
      username:"Vedant",
      password:"123123",
      age:20,
      city:"Delhi"
    }
  })
}

async function updateUser(){
  const user = await client.user.findFirst({
    where:{
      id:1
    }
  })

  console.log(user);
}

async function getTodos() {
  const user = await client.user.findFirst({
    where:{
      id:1
    },
    include:{
      todos: true
    }
  })
  console.log(user);
}

main()
  .then(async () => {
    await getTodos()
    await client.$disconnect()
  })
  .catch(async (e) => {
    console.error(e) 
    await client.$disconnect()
  })