import express, {Request, Response} from "express"

const router = express.Router()

router.get("/", (req, res) =>{
    res.json({
        message: "API IS ROCKING",
    });
});

router.post("/", (req, res) =>{
    const {name, email} = req.body;
    console.log(name);
    console.log(email);
    res.json({
        message: {
            name, email
        },
    });
});

router.get("/about", (req, res) =>{
    res.json({
        message: "This is about page",
    });
});

router.get("/profile", (req, res) =>{
    res.json({
        message: "This is profile page",
    });
});

export { router };