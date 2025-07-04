'use strict'
import jwt from "jsonwebtoken";

const JWT_SECRET = 'random101';

const value = {
    name:"Vedant",
    accountNumber:123123123,
};

const token = jwt.sign(value, JWT_SECRET);
// this token has been generated using this secret, and hence token can only be verified using this secret
console.log(token);

const newToken = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVmVkYW50IiwiYWNjb3VudE51bWJlciI6MTIzMTIzMTIzLCJpYXQiOjE3NTE2NDcwMTB9.dwWTEk5VzfXb-0fRdYCZPoni99Mt-C4NTjM5PCPIyQA',JWT_SECRET);
console.log(newToken);