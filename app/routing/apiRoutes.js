var friendsData = require('../data/friends.js')

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friendsData)
  })

  app.post('/api/friends', function (req, res) {
    
    // console.log(
    //   '\nNew Friend',
    //   '\n==================================\n',
    //   'Name: ' + req.body.name + '\n',
    //   'Photo: ' + req.body.photo + '\n',
    //   'Scores: ' + req.body.scores,
    //   '\n==================================\n')

    // console.log(
    //   '\nExisting Friends',
    //   '\n==================================\n')

    for (let i = 0; i < friendsData.length; i++) {
      // console.log(
      //   'Name: ' + friendsData[i].name,
      //   '\nPhoto: ' + friendsData[i].photo,
      //   '\nScores: ' + friendsData[i].scores,
      //   '\n==================================\n')

      var currentFriend = friendsData[i],
          newFriendScore = req.body.scores,
          score = 0,
          bestScore = 99,
          bestMatch

      for (let j = 0; j < currentFriend.scores.length; j++) {
        var diffScore = Math.abs(parseInt(currentFriend.scores[j]) - parseInt(newFriendScore[j]))
        score += diffScore  
        // console.log(score)
      }
      if (score < bestScore) {
        bestScore = score
        bestMatch = currentFriend
      }
    }

    // console.log(
    //   '\nBest Match Name: ' + bestMatch.name,
    //   '\nBest Match Photo: ' + bestMatch.photo,
    //   '\nBest Match Score: ' + bestMatch.scores)

    res.send(bestMatch)

    friendsData.push(req.body)

  })
}

