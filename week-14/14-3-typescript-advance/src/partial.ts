interface User {
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial <UpdateProps>

function updateUser(updatedProps:UpdatePropsOptional){
    // hit the databse to update the user
    console.log(updatedProps)
}
updateUser({ // it doesn't throw an error since all arguments are optional
    name:"yo",
})