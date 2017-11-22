const dbconta = (connection) => (errorHandler) => {
  // const {connection, errorHandler} = obj
  return {
    all: () => {
      return new Promise( (resolve, reject) => {
        let sql = 'select * from conta order by conta'
        connection.query(sql, (error, results) => {
          if (error) {
            errorHandler(error, 'FALHA AO LISTAR CONTAS.', reject)
            return false
          }
          resolve(results)
        })
      })
    },
    // let sql = 'insert into conta set id = ?, conta = ?, deleted = ? ON DUPLICATE KEY UPDATE conta = ?, deleted = ?'
        // let params = [conta.id, conta.conta, conta.deleted, conta.conta, conta.deleted]
        // connection.query(sql, params, (error, results) => {
        //   if (error) {
        //     errorHandler(error, 'FALHA AO INSERIR/ATUALIZAR CONTA.', reject)
        //     return false
        //   }
        //   resolve(results)
    saveOrUpdate: (conta) => {
      return new Promise((resolve, reject) => {
        let sql = 'insert into conta set ? ON DUPLICATE KEY UPDATE ?'
        let params = [conta, conta]
        connection.query(sql, params, (error, results) => {
          if (error) {
            errorHandler(error, 'FALHA AO INSERIR/ATUALIZAR CONTA.', reject)
            return false
          }
          resolve(results)
        })
      })
    },
    dell: (pk) => {
      return new Promise((resolve, reject) => {
        let sql = 'delete from conta where id = ?'
        connection.query(sql, pk, (error, results) => {
          if (error) {
            errorHandler(error, 'FALHA AO REMOVER CONTA.', reject)
            return false
          }
          resolve(results)
        })
      })
    }
  }
}

export default dbconta
