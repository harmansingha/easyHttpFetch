//Classes, fetchAPI, promise and arrow function

class EasyHttp {
  //Make get request for top 10 users
  getUsers(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET'
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    });
  }

  //Create User
  createUser(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  //Update user
  updateUser(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    });
  }

  //Delete User
  deleteUser(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' }
      })
        .then(res => res.json())
        .then(data => resolve('User deleted')) //Empty string comes so sending static data
        .catch(err => reject(err))
    });
  }
}