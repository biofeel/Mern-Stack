const express = require('express');
const cors = require('cors');
const app = express();

require('./server/config/mongoose.config')
const routes = require('./server/routes/product_manager.routes')

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))


routes(app);
app.listen(8000, () => console.log(`Listening on port: 8000`) );
