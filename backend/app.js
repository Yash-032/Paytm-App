const express = require("express")
const router = require('./routes/index')
const cors = require("cors")

const app = express()
app.use(express.json());
app.use(cors())
app.use('/api/v1', router)

const PORT = 3000

app.get('/', (req,res)=>{
    res.json({
        msg:"Server is now Running"
    })
})

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`)
})