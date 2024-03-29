import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserModel from './model/Users.js'
const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.get("/", (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.get("/getUser/:id", (req, res) => {
    const id = req.params.id
    UserModel.findById({ _id: id })
        // UserModel.findById
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.put("/updateUser/:id", (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndUpdate({ _id: id },
        { name: req.body.name, email: req.body.email, age: req.body.age }
    )
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
})
app.listen(3000, () => {
    console.log("server yeass is running")
})
