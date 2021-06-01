import { Router } from 'express';
import { db } from '../lib/db';

export default () => {
    const router = Router()
    
    router.get("/person", async(req, res) => {
        let paginator: number = 0;
        if (req.query.paginator) {
            paginator = parseInt(req.query.paginator as string, 10)
        }
        const dbConn = new db()
        const results = await dbConn.getPerson(paginator)
        res.json(results)
    })

    return router
}