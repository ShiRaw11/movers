const app = require("express")()
const bodyParser = require("body-parser")
const cors = require("cors")
const port = 5000

app.use(cors())
app.use(bodyParser.json())

app.listen(port,()=>console.log(`server is running on port ${port}`))