import db from '../services/mysql'
console.log('contas =', db.contas)
export default [
  {
    method: 'GET',
    path: '/contas/all',
    handler: async (request, reply) => {
      let x = await db.contas().all()
      console.log('x=', x)
      reply(x)
    }
  },
  {
    method: 'POST',
    path: '/contas',
    handler: async (request, reply) => {
      let conta = request.payload
      console.log('ContaPayload = ', conta)
      let results = await db.contas().saveOrUpdate(conta)
      console.log('results', results)
      reply(results)
    }
  },
  {
    method: 'DELETE',
    path: '/contas',
    handler: async (request, reply) => {
      let conta = request.payload
      console.log('Payload = ', conta)
      let results = await db.contas().dell(conta.id)
      console.log('results', results)
      reply(results)
    }
  }
]
