export function getUserList() {
    return fetch('http://localhost:3333/user')
      .then(data => data.json())
  }