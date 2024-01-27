const dotenv = require("dotenv")
const express = require("express")
const cors = require("cors")
const path = require("path")

const IndexRoute = require("./Routers/index")
const connectDatabase = require("./Helpers/Database/connnectDatabase")

dotenv.config({
    path:  '../Backend/.env'
})

const app = express() ;
connectDatabase();
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname , "public") ))
app.use("/",IndexRoute)


const PORT = process.env.PORT || 5000 ;
const server = app.listen(PORT,()=>{

    console.log(`Server running on port  ${PORT}`);

})


