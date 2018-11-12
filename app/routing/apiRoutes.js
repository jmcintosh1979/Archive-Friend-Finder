var friendsData = require('../data/friends.js')

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friendsData)
  })

  app.post('/api/friends', function (req, res) {
    friendsData.push(req.body)
    res.send(true)

    console.log('\n==================================\n',
                'New Friend',
                req.body.name + '\n',
                req.body.photo + '\n',
                req.body.scores + '\n',
                '\n==================================')

    console.log('\n==================================\n',
                'Existing Friends',
                friendsData[0].name + '\n',
                friendsData[0].photo + '\n',
                friendsData[0].scores + '\n',
                '\n==================================')

    var newFriendScore = req.body.scores,
        existingFriendScore = friendsData[0].scores,
        diffScore = []

    // ** A forEach method to loop through the existing friends to get to their scores.    
    friendsData.forEach(function (data) {
      var eachFriendsScore = data.scores
      console.log(eachFriendsScore)
    });


    // ** For loop to compare the newFriends Score to the Existing Friends Score.  
    // !! HOW TO DO THIS WHEN THERE ARE MULTIPLE FRIENDS??????????

    for (let i = 0; i < newFriendScore.length; i++) {
      diffScore.push(Math.abs(newFriendScore[i] - existingFriendScore[i]))
    };

    console.log(diffScore);


  })
}

