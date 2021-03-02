import * as express from 'express';

import blogsDB from './db/blogsDB';

import DB from './db';

const router = express.Router();

router.get('/api/blogs', async(req, res) => {
    let blogs = await DB.Blogs.all
})

export default router;