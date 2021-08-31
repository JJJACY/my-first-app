const PREFIX = `http://localhost:3000/api`

export default {
  user:(id: number) => `${PREFIX}/userlist/${id}`,
}