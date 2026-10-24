// // // // const movie = {
// // // // id: 41,
// // // // title: "Orbit",
// // // // genre: "Sci-Fi",
// // // // rating: 8.4
// // // // };

// // // // const {title, genre, rating} = movie;
// // // // console.log(`${title}, ${genre}, ${rating}`);

// // // const user = {
// // // id: 7,
// // // My_name: "Dana Levi",
// // // email: "dana@example.com",
// // // isActive: true
// // // };
// // // const FormatUser = ({email, My_name}) => (
// // // `${email} - ${My_name}`
// // // );
// // // console.log(FormatUser(user));

// // const player = {
// // id: 1,

// // nickname: "Noni",
// // score: 1200,
// // level: 8
// // };
// // const comments = [
// // { id: 1, user: "Noa", text: "Great game!", likes: 12 },
// // { id: 2, user: "Dan", text: "Well played", likes: 7 }
// // ];
// // const newComment = {
// // id: 3,
// // user: "Maya",
// // text: "Amazing score!",
// // likes: 0
// // };


// // const updatePlayerScore = (p, newScore) => ({ ...p, score: newScore });
// // const addCommentToArr = (arr, comment) => [...arr, comment];

// // const updatedPlayer = updatePlayerScore(player, 1350);

// // const commentsAfterAdd = addCommentToArr(comments, newComment);

// const tasks = [
//   { id: 1, title: "Write tests", completed: false, priority: "high" },
//   { id: 2, title: "Update profile", completed: true, priority: "low" },
//   { id: 3, title: "Fix login", completed: false, priority: "high" }
// ];

// // א. כתיבת Arrow Function בשם removeTaskById שמקבלת tasks ו-id ומחזירה מערך חדש ללא המשימה המתאימה
// const removeTaskById = (tasksArr, targetId) => tasksArr.filter(task => task.id !== targetId);

// // ב. שמירת התוצאה של removeTaskById(tasks, 2) במשתנה tasksAfterDelete
// const tasksAfterDelete = removeTaskById(tasks, 2);