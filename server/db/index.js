import * as mysql from 'mysql';
import config from '../config';

import blogsDB from './db/blogsDB';

export const Connection = mysql.createConnection(config.mysql);

Connection.connect(err=> {
    if(err) console.log(err)
});

