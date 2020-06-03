import express from 'express';

const routes = express.Router()

routes.get('/users', (req, res) => {
    console.log('listagem de usuarios')
})

export default routes;
