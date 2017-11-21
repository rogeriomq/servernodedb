const dbconta = (deps) => {
  return {
    all: () => {
      const {connection, errorHandler} = deps
      return new Promise((resolve, reject) => {
        resolve('SELECT e retorna as contas do banco')
      })
    },
    saveOrUpdate: () => {},
    dell: () => {}
  }
}

export default dbconta
