import "dotenv/config"
import app from "./src/app.js";

app.listen(9000, () => {
    console.log("Server running")
})
