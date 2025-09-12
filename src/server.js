import http  from 'node:http'

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

const users = []
 
const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/users') {
        return res
        .setHeader('Content-Type', 'application/json')
        .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com'
        })
        return res.writeHead(201).end()
    }

    console.log(method, url)

    return res.writeHead(404).end('Not found')
})
server.listen(3333)
//CommonJS => require
//ESModule => import/export