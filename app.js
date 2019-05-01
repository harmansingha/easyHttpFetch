const http = new EasyHttp();
const url = 'https://jsonplaceholder.typicode.com/users';


http.getUsers(url)
  .then(data => console.log(data))
  .catch(err => console.log(err));

const userData = {
  name: "Harman Kumar",
  username: 'harry'
};

http.createUser(url, userData)
  .then(data => console.log(data))
  .catch(err => console.log(err));

http.updateUser(url + '/2', userData)
  .then(data => console.log(data))
  .catch(err => console.log(err));

http.deleteUser(url + '/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));