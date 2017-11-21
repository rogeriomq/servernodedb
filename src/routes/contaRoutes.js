import db from '../services/mysql'
console.log('contas =', contas)
export default [
  {
    method: 'GET',
    path: '/contas/all',
    handler: async (request, reply) => {
      console.log('db', db)
      let x = await db.contas().all()
      console.log('x=', x)
      reply(x)
    }
  }
]
