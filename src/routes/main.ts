import { Router } from 'express';
import { createUser, createUsers } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
    const user = await createUser(
        {
            name: 'cicrano',
            email: 'cicrano@gmail.com'
        }
    );
    if (user) {

        res.status(201).json({ user },);
    } else {
        res.status(500).json({ error: 'Ocorreu um erro' });
    }
})

mainRouter.post('/users', async (req, res) => {
    const result = await createUsers([
        { name: 'João', email: 'joão@hotmail.com' },
        { name: 'João 2', email: 'joão@hotmail.com' },
        { name: 'Fulano', email: 'fulano@hotmail.com' },
        { name: 'Ciclano', email: 'ciclano@hotmail.com' }
    ]);
    res.json({ result });
})
