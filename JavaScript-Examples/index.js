// Promise examples
// Get user and comment in a website

var users = [
  {
    id: 1,
    userName: "Quan Nguyen",
  },
  {
    id: 2,
    userName: "An Nguyen",
  },
  {
    id: 3,
    userName: "Vu Nguyen",
  },
];

var comments = [
  {
    userId: 1,
    content: "Hello baby",
  },
  {
    userId: 2,
    content: "Bai bai guys",
  },
];

// 1. Get the comments
// 2. Take the userId
// 3. From the userId -> get the corresponding id

function getComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(comments);
    }, 500);
  });
}

function getUsersByIds(userIds) {
  return new Promise((resolve) => {
    var usersByIds = users.filter((user) => {
      return userIds.includes(user.id);
    });
    resolve(usersByIds);
  });
}

getComments()
  .then((comments) => {
    var userIds = comments.map((comment) => {
      return comment.userId; // get the userId from comments and return them as an array named userId
    });
    getUsersByIds(userIds)
      .then((x) => {
        console.log(x);
      })
  });

