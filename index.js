const express = require('express');
const app = express();
const port = 3000;

const users = [
	{ id: 1, firstName: 'John', lastName: 'Doe', role: 'admin' },
	{ id: 2, firstName: 'Jane', lastName: 'Smith', role: 'user' },
	{ id: 3, firstName: 'Alice', lastName: 'Johnson', role: 'moderator' },
	{ id: 4, firstName: 'Bob', lastName: 'Brown', role: 'user' },
	{ id: 5, firstName: 'Charlie', lastName: 'Davis', role: 'admin' }
];

app.use(express.json());

app.get("/", (req, res) => {
    res.json(users)
})

app.post("/", (req, res) => {
	
	const { firstName, lastName } = req.body

	
	const lastId = users[users.length - 1].id
	const newId = lastId + 1

	const newUser = {
		firstName,
		lastName,
		id: newId,
	}

	users.push(newUser)
	res.status(201).json(newUser)
})


app.put("/",(req,res)=> {
    res.json({
        msg: "hello rest api ici le PUT",
    })
})

app.delete("/",(req, res) => {
    res.json({
        msg: "hello rest api ici le DELETE",
    })
})

app.listen(port, () => {
	console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});