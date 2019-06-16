# FootbalFrenzy
Fully customize your fantasy football league


Project Description
  A fully customizable fantasy football application, for groups that want more control over their league

  Fantasy football has become a large sensation over the last decade, and fans have found new ways to play. This application will give league owners a new level of control to define how the game is played.

  Being able to control the fantasy season length, or the format of acquiring players, will provide users with a better sense of control over their game.

  This project will start with a proof of concept, by building out the ability to simply create teams, and manage players, with future features built out as time allows.

  Possible challenges I could come accross will be, database management, and setting up the approriate relationships between tables. Managing players teams, could create issues when fetching the data, and returning the approriate players, and removing players from the pool so multiple teams cannot have the same plauyer (unless allowed by the user who created the league).

  Over the next five days, a successful MVP milestone would be a fully fleshed out database, that will allow users to maintain leagues, teams, and players.

  Post MVP would be creating a system to draft players, and a system to participate in trades.

ERD

![20190603_090136](https://user-images.githubusercontent.com/47395471/58806509-51a02c00-85e4-11e9-804c-a7e9f290de85.jpg)


API Endpoints



Sample API JSON

    {
        "id": 2,
        "name": "test team2",
        "points": 0,
        "qb": null,
        "rb1": null,
        "rb2": null,
        "te": null,
        "wr1": null,
        "wr2": null,
        "def": null,
        "k": null,
        "flex": null,
        "bn1": null,
        "bn2": null,
        "created_at": "2019-06-02T23:03:58.824Z",
        "updated_at": "2019-06-02T23:03:58.824Z",
        "league_id": null
    }

Wireframes
![20190602_132726](https://user-images.githubusercontent.com/47395471/58806500-51079580-85e4-11e9-87fb-dad78f1e1c12.jpg)
![20190602_132738](https://user-images.githubusercontent.com/47395471/58806501-51079580-85e4-11e9-880c-567e2dd70604.jpg)
![20190602_132745](https://user-images.githubusercontent.com/47395471/58806502-51a02c00-85e4-11e9-956f-293f34ff6277.jpg)
![20190602_132752](https://user-images.githubusercontent.com/47395471/58806503-51a02c00-85e4-11e9-8465-c62b5bd86df5.jpg)
![20190602_132817](https://user-images.githubusercontent.com/47395471/58806504-51a02c00-85e4-11e9-9270-26aa3ffea2c5.jpg)
![20190602_132826](https://user-images.githubusercontent.com/47395471/58806505-51a02c00-85e4-11e9-9ec9-f3caf132d982.jpg)
![20190602_132833](https://user-images.githubusercontent.com/47395471/58806507-51a02c00-85e4-11e9-81ce-f5c7454dc096.jpg)

Dependencies

    "axios": "^0.19.0",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-router-dom": "^5.0.0",
    "react-scripts": "3.0.1"
    "cors": "^2.8.5",

    gem 'bcrypt', '~> 3.1.7'
    gem 'pg', '>= 0.18', '< 2.0'
    gem 'rails', '~> 5.2.3'
    gem 'rack-cors'

Schedule

  Monday - Create Database, Controllers, and set up all routes
  Tuesday - React: Landing Page, Profile Page, League Home
  Wednesday - React: Team View Page, Add player page, Login/Sign Up Page
  Thursday - Auth Login
  
