import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(
    bodyParser.json({
        type(req) {
            return true;
        },
    })
);
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    next();
});

const notes = [{
    "id": 0,
    "content": "То, что было введено в поле ввода"
}, {
    "id": 1,
    "content": "То, что было введено в поле вводаТо, что было введено в поле ввода"
}];

let nextId = 1;

app.get("/notes", (req, res) => {
    res.send(JSON.stringify(notes));
});

app.post("/notes", (req, res) => {
    notes.push({ ...req.body, id: nextId++ });
    res.status(204);
    res.end();
});

app.delete("/notes/:id", (req, res) => {
    const noteId = Number(req.params.id);
    const index = notes.findIndex((o) => o.id === noteId);
    if (index !== -1) {
        notes.splice(index, 1);
    }
    res.status(204);
    res.end();
});

const port = process.env.PORT || 7070;
app.listen(port, () => console.log(`The server is running on http://localhost:${port}`));