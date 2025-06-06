import express from "express";

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "Don't worry your app is perfectly running, fix bugs!",
  });
});

// Signup endpoint

app.post("/signup", (req, res) => {});

// Signin Endpoint
app.post("/signin", (req, res) => {});

// Chating endpoint to get the chat
app.post("/chat", (req, res) => {});


app.listen(8000, () => {
    console.log("Hello from backend!")
})