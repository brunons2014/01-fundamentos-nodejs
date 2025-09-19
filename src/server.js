import http  from 'node:http'
import { json } from './middlewares/json.js'
import { Database } from './database.js'

// GET => Buscar uma informação (Listar)
// POST => Criar uma informação (Cadastrar)
// PUT => Atualizar uma informação (Atualizar)
// DELETE => Remover uma informação (Deletar)
// PATCH => Atualizar uma informação específica (Atualizar)

// GET /users => Listar usuários
// POST /users => Cadastrar um usuário

// Stateful - Stateless
// Stateful => O servidor guarda alguma informação do cliente (Sessão, Cookies)
// Stateless => A cada requisição o cliente precisa mandar todas as informações para o servidor (Autenticação, Token, JWT)

// Cabeçalhos (Requisição e Resposta) => Metadados (Informações sobre a requisição ou resposta)
const database = new Database()
 
const server = http.createServer(async (req, res) => {
    const { method, url } = req

    await json(req, res)


    if (method === 'GET' && url === '/users') {
        const users = database.select('users')

        return res.end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        const { name, email } = req.body

        const user ={
            id: 1,
            name,
            email,
        }

        database.insert('users', user)

        return res.writeHead(201).end()
    }

    console.log(method, url)

    return res.writeHead(404).end('Not found')
})
server.listen(3333)
//CommonJS => require
//ESModule => import/export