import http  from 'node:http'

// GET => Buscar uma informação (Listar)
// POST => Criar uma informação (Cadastrar)
// PUT => Atualizar uma informação (Atualizar)
// DELETE => Remover uma informação (Deletar)
// PATCH => Atualizar uma informação específica (Atualizar)

// GET /users => Listar usuários
// POST /users => Cadastrar um usuário

 const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/users') {
        return res.end('Listagem de usuários')
    }

    if (method === 'POST' && url === '/users') {
        return res.end('Cadastro de usuários')
    }

    console.log(method, url)

    return res.end('Hello World')
})
server.listen(3333)
//CommonJS => require
//ESModule => import/export