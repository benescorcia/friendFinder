//  // ===============================================================================
// // LOAD DATA
// // We are linking our routes to a series of "data" sources.
// // ===============================================================================
// // let friendsData = require("../data/friends");
// ​let friendsData = [
//     {
//         name: "Ahmed",
//         photo: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
//         scores: [
//           "5",
//           "1",
//           "4",
//           "4",
//           "5",
//           "1",
//           "2",
//           "5",
//           "4",
//           "1"
//         ]
//       }
//         ];
// ​
// // ===============================================================================
// // ROUTING
// // ===============================================================================
// ​
// module.exports = function(app) {
//     // API GET Requests
//     // Below code handles when users "visit" a page.
//     // In each of the below cases when a user visits a link
//     // ---------------------------------------------------------------------------
  
// ​
//     app.get("/api/friends", (req, res) => {
//         res.json(friendsData);
//     });
// ​
// //     app.post("/api/friends", function(req, res) {
// // ​const friendsMatch = {
// //     name: "",
// //     photo: "",
// //     diference: 0
// // } 
// // const userdata = req.body
// // console.log(userdata);
        
// //     });
// ​
// };

const findFriends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(findFriends);
    })

    app.post("/api/friends", function (req, res) {
        let newFriend = req.body;
        let newMatch = newFriend.scores;
        console.log("new", newMatch);

        let userDistance = 0;
        let lowestIndex;
        let lowestDistance;
        console.log(findFriends);

        for (let i = 0; i < findFriends.length; i++) {
            let totalScore = findFriends[i].scores;

            console.log("all", totalScore);
            userDistance = 0;

            for (let j = 0; j < totalScore.length; j++) {
                let distance = Math.abs(newMatch[j] - totalScore[j]);
                userDistance += distance;
            }
            console.log(userDistance);

            if (!lowestDistance && lowestDistance !== 0) {
                lowestDistance = userDistance;
                lowestIndex = Number(i);
            }
            else if (userDistance < lowestDistance) {
                lowestDistance = userDistance;
                lowestIndex = Number(i);
            }
        }

        let closestFriend = findFriends[lowestIndex];
        findFriends.push(newFriend);
        res.json(closestFriend);
        console.log("closest match", closestFriend);



    })
}