import express from 'express';
import mongoose from 'mongoose';
import  router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';

const app = express();
app.use(express.json());

app.use('/api/users/', router)
app.use('/api/blog/', blogRouter)

mongoose.connect('connect to mongo here').then(()=>app.listen(5000)).then(()=>console.log('Connected to first cluster and listening on port 5000')).catch((err) => console.log(err));
