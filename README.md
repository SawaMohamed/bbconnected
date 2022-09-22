# bconnected - `README.md`

# final project

#application for finiding matches

# About Us: bconnected is an innovative platform that makes business contact easier. With a user friendly interface,

# you can easily find potential business partners, hire new employees, find a job or simply discover an environment for networking.

# Quick Compo

<img src="/bbconnected\allproject\client\src\images\BConnected-logo.png" alt="minilogo" style="zoom:75%;" />

## Description

**_Hosting_** Where our Users image are stored [] ()

**_dataBASE_** has been developed as a part of the final project in [Ironhack](http://localhost:8000/users/).

## User Stories

- **Signup:** As a user I want to be able to create an account and sign in to the app.
- **Login:** As a user I can login to the platform so that I can log my exit points
- **Logout/Signout:** As a user I can logout from the platform so no one else can use it
- **Add Exit Points** As a user I can add an exit point
- **Edit Exit Points** As a user I can edit an exit point
- **Add Update** As a user I can add profile info
- **Edit PreOpp Checklist** As a user I can edit a player profile to fit into the tournament view
- **View Tournament Table** As a user I want to see the tournament table
- **Edit Profile** As a user I can edit my profile, add or remove details
- **Add Preferences** As a user I want to be able to set up my account according to my preferences (specify what am i looking for, my location, my interests and so on).
- **Add Favourites** As a user I want to have displayed a list of people that can be potential business partners according to my preferences (location, domain, job/hiring).
- **Add Filter** As a user i want to be able to filter the results that are shown (age, location, domain, working hours).
- **Match Users** As a user I want to have the opportunity to initiate contact with another user with whom I matched via messages.
- **Favourites** As a user I want to be able to save the information of other users in my account for the possibility of a later contact without notifying them in any way (adding them to favourites and from there think whether I want to delete them or establish a connection).
- **Chat Functionality** As a user I want to have a profile page with my account details, a favourites page with the accounts I saved for a later decision, a message page to communicate and a browsing page to navigate through the accounts.
- **Premium Package** As a user I want to know which are my benefits for upgrading to premium.

## Backlog

User profile:

- Video chat for Interview
- Calender
- Add other platforms
- add geolocation
-
-
-

# Client / Frontend

## React Router Routes (React App)

| Path             | Component            | Permissions                | Behavior                                                      |
| ---------------- | -------------------- | -------------------------- | ------------------------------------------------------------- |
| `/`              | SplashPage           | public `<Route>`           | Home page                                                     |
| `/signup`        | SignupPage           | anon only `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`         | LoginPage            | anon only `<AnonRoute>`    | Login form, link to signup, navigate to homepage after login  |
| `/exitpoint`     | TournamentListPage   | user only `<PrivateRoute>` | Shows all exit points in a list                               |
| `/exitpoint/add` | TournamentListPage   | user only `<PrivateRoute>` | Edits a exit points                                           |
| `/exitpoint/:id` | TournamentDetailPage | user only `<PrivateRoute>` | Details of a exit points to edit                              |
| `/exitpoint/:id` | n/a                  | user only `<PrivateRoute>` | Delete exit points                                            |
|                  |                      |                            |                                                               |
|                  |                      |                            |                                                               |
|                  |                      |                            |                                                               |
|                  |                      |                            |                                                               |
|                  |                      |                            |                                                               |
|                  |                      |                            |                                                               |
|                  |                      |                            |                                                               |

## Components

- Auth Service
- AuthModel
- Carousel
- Chat
- ChatContainer
- ChatDisplay
- ChatHeader
- ChatInput
- FavUsers
- Logout
- MatchesDisplay
- Nav
- NavHome
- Test

## Helpers

CarouselData

## Pages

- DashBoard
- Home
- OnBoarding

# Server / Backend

## Server (Controllers)

- AddFavControllers
- InterestUsersControllers
- MatchesController
- MessageControllers
- UserControllers

## Models

- MessageModel

## Routes

- AddFavRouter
- InterestUserRoute
- LoginRoutes
- MatchesRouter
- MessageRoute
- UserRouter

```
 {
    from_userId: {
      type: String,
    },
    to_userId: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)
```

- User model

```
 {
    user_id: {
      type: String,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    url: {
      type: String,
    },
    profession: {
      type: String,
    },
    interest: {
      type: String,
    },
    about: {
      type: String,
    },
    dob: {
      type: String,
    },
    show_dob: {
      type: Boolean,
    },
    gender_identity: {
      type: String,
    },
    show_gender: {
      type: Boolean,
    },
    link_linkedin: {
      type: String,
    },
    link_portfolio: {
      type: String,
    },
    link_github: {
      type: String,
    },
    matches: {
      type: Array,
    },
    favUsers: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
```

## Backend routes

| HTTP Method | URL            | Request Body                                                                                                                                                    | Success status | Error Status | Description                                                                                                                     |
| ----------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| GET         | `/auth/me`     |                                                                                                                                                                 | 200            | 404          | Check if user is logged in and return profile page                                                                              |
| GET         | `/auth/signup` | {name, email, password}                                                                                                                                         | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| GET         | `/auth/login`  | {username, password}                                                                                                                                            | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session              |
| GET         | `/auth/logout` | (empty)                                                                                                                                                         | 204            | 400          | Logs out the user                                                                                                               |
| GET         | /api/exit      | {name, img, aproachLat, aproachLong, aproachDescription, exitLat, exitLong, exitDescription, landingZoneLat, landingZoneLong, landingZoneDescription, altitude} |                |              | Used to create one exit point document, using current logged in user id as a creator.                                           |
| GET         | /api/exit/:id  | {name, img, aproachLat, aproachLong, aproachDescription, exitLat, exitLong, exitDescription, landingZoneLat, landingZoneLong, landingZoneDescription, altitude} |                |              | Used to update one exit point document by id                                                                                    |
| PUT         | /api/exit/:id  |                                                                                                                                                                 |                |              | Used to get one exit point document by id                                                                                       |
| PUT         | /api/exit/:id  |                                                                                                                                                                 |                |              | Used to delete one exit point document by id                                                                                    |
| PUT         | /api/user      |                                                                                                                                                                 |                |              | Used to get current user's profile. Id of the user is coming form the req.session.currentUser                                   |
| POST        | /api/user      | {username, email, password}                                                                                                                                     |
| POST        |                |
| DELETE      |                |

router.put('/', updateMatches)
router.get('/', getFav)  
router.get('/',interestUsers);
router.post('/',login);
router.get('/', getMatches)
router.get('/', getMessages)
router.post('/', sendMessage)
router.get('/', getAllusers)
router.get('/:userId', getSingleUser)
router.post('/', creatUser)
router.put('/:userId', updateUser)
router.put('/', updateMatches)
router.delete('/:userId', deleteUser) | | | Used to update current user's profile. Id of the user is coming form the req.session.currentUser |

## Links

### Trello/Bconnected

[Link to your trello board](https://trello.com/b/x4IuGEHf/final-project) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/SawaMohamed/bbconnected)

[Server repository Link](https://github.com/SawaMohamed/bbconnected)

[Deployed App Link](http://heroku.com/)

### Slides

The url to your presentation slides

[Slides Link](https://slides.com/eunnylans/bold/edit)

Wireframe

The url to your presentation slides

[Figma Link](https://www.figma.com/file/hwdXxLxrDd8IaWpfyS8hLg/B-Connected-Wireframe?node-id=1%3A901)

https://www.figma.com/file/hwdXxLxrDd8IaWpfyS8hLg/B-Connected-Wireframe?node-id=1%3A901

# bbconnected
# bbconnected
