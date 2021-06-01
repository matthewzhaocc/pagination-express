import express from 'express';
import Api from '../api/api'
const app = express()

app.use('/api/v1/', Api())

app.listen(process.env.PORT || 8080, () => {
    console.log(`application started listening on port ${process.env.PORT || 8080}`)
})