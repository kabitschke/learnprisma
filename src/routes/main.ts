import { Router } from 'express';
import { createUser, createUsers, getAllUsers, getUserByEmail } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
    const user = await createUser(
        {
            name: 'cicrano2',
            email: 'cicrano2@gmail.com',
            posts: {
                create: {
                    title: 'Título do post',
                    body: 'Corpo de teste'
                }
            }
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

mainRouter.get('/users', async (req, res) => {
    const result = await getAllUsers();
    res.json({ result });
})

mainRouter.get('/user', async (req, res) => {
    const result = await getUserByEmail('joão@hotmail.com');
    res.json({ result });
})  
