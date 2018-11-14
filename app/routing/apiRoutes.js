var friendsData = require('../data/friends.js')

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friendsData)
  })

  app.post('/api/friends', function (req, res) {
    res.send(true)

    console.log('\n==================================\n',
                'New Friend\n',
                req.body.name + '\n',
                req.body.photo + '\n',
                req.body.scores + '\n',
                '\n==================================')

    console.log('Existing Friends')

    for (let i = 0; i < friendsData.length; i++) {
      console.log(
      'Name: ' + friendsData[i].name,
      '\nPhoto: ' + friendsData[i].photo,
      '\nScores: ' + friendsData[i].scores,
      '\n==================================')

      var newFriendScore = req.body.scores,
      diffScore = []

      // ** A forEach method to loop through the existing friends to get to their scores.    
      friendsData.forEach(function (data) {
        var eachFriendsScore = data.scores
        // console.log("***** " + eachFriendsScore + " *****")

        // ** For loop to compare the newFriends Score to the Existing Friends Score.  
          for (let i = 0; i < eachFriendsScore.length; i++) {
         
            // **Function to sum the difference
            function scoreTotal(total, num) {
              return total + num
            }

            console.log(scoreTotal(eachFriendsScore[i]))
            // var absoluteScore = Math.abs(newFriendScore[i] - eachFriendsScore[i])

            // diffScore = absoluteScore.reduce(scoreTotal)

            // console.log(scoreTotal)
          };          
      }) 
      // console.log(diffScore);
    }    

    friendsData.push(req.body)

  })
}

