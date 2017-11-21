import hapi from 'hapi'
import hapi_router from 'hapi-router'
import blipp from 'blipp'

console.log(process.env.SERVER_PORT)
const server = new hapi.Server()
server.connection({
  port: process.env.SERVER_PORT || 3000
})

server.register(
  [
    {
      register: hapi_router,
      options: {
        routes: 'src/routes/**/*Routes.js'
      }
    },
    {
      register: blipp,
      options: {
        showAuth: true
      }
    }
  ],
  (error) => {
    if (error) throw error
  }
)
server.start( (error) => {
  if (error) {
    console.log('ERROR:::', error)
    throw error
  }
  let url = 'http://'+server.info.address + ':'+server.info.port
  console.log('WS rodando em:', url)
})
