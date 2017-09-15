var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Julia'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(42, (userObject) => {
  console.log(userObject);
});
