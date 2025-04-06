

const express = require( "express")
const uploadRouter = require('./routes/fileupload.routes')
const dotenv = require("dotenv")
const cors =  require("cors")
const kafkaPublisherRouter = require("./routes/kafkapublish.routes")
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;


app.use(cors({
   allowedHeaders: ["*"],
   origin: "*"
}));
app.use(express.json());
app.use('/upload', uploadRouter);

app.use('/publish', kafkaPublisherRouter);


app.get('/', (req, res) => {
   res.send('HHLD YouTube')
})


app.listen(port, () => {
   console.log(`Server is listening at http://localhost:${port}`);
})
