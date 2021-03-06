# HTTP5303 Web Project

The purpose of this project was for us to learn a new web technology stack and create an app. 

<!-- TABLE OF CONTENTS -->
<details open="open">
  <ol>
    <li><a href="#outline">Outline</a>
      <ul>
        <li><a href="#team">Team</a></li>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#description">Description</a></li>
        <li><a href="#technical-considerations">Technical Considerations</a></li>
      </ul>
    </li>
    <li><a href="#running-the-app">Running the App</a>
        <ul>
          <li><a href="#prerequisites">Prerequisites</li>
          <li><a href="#steps">Steps</li>
        </ul>
    </li>
    <li><a href="#about">Features</a>
      <ul>
        <li><a href="#users">Users</a></li>
        <li><a href="#roles">Roles</a></li>
        <li><a href="#listings">Listings</a></li>
        <li><a href="#images">Images</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#messages">Messages</a></li>
      </ul>
    </li>
    <li><a href="#about">Contributions</a>
      <ul>
        <li><a href="#asia">Asia</a>
          <ul>
            <li><a href="#project">Project</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#teamwork">Teamwork</a></li>
          </ul>
        </li>
        <li><a href="#danyal">Danyal</a>
          <ul>
            <li><a href="#project">Project</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#teamwork">Teamwork</a></li>
          </ul>
        </li>
        <li><a href="#jemi">Jemi</a>
          <ul>
            <li><a href="#project">Project</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#teamwork">Teamwork</a></li>
          </ul>
        </li>
        <li><a href="#journey">Journey</a>
          <ul>
            <li><a href="#project">Project</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#teamwork">Teamwork</a></li>
          </ul>
        </li>
        <li><a href="#sandra">Sandra</a>
          <ul>
            <li><a href="#project">Project</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#teamwork">Teamwork</a></li>
            <li><a href="#deployment">Deployment</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ol>
</details>

## Outline

### Team 

#### Name:

How to Get Away With Merner

#### Team Members

* Asia Gault
* Danyal Effendi
* Jemi Choi
* Journey Gault
* Sandra Kupfer

### Technologies
We chose the MERN stack, as we believe that it is currently in great demand in the web development industry. 

### Description
This project is a marketplace app, something like Facebook Marketplace but without the Facebook. We had hoped to add functionality to facilitate bartering, but that proved to be beyond the scope that we could implement in the time we had.

This app intended for anyone to use for browsing, but for interaction the user must be 18 years or older.

### Technical Considerations
We will be using MERN as the tech stack, and VS Code as the development environment, and Github for version control. Our database will be hosted on Atlas, and we will be hosting on Heroku.

This project was initially modeled on the app created doing this tutorial: https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/

It has since been significantly modified.

## Running the App

### Prerequisites
You will need to have an account with Atlas to run MongoDB. In your cluster, make sure you have a database called "test".

You will also need to have NodeJs installed.

### Steps

1. Clone the repo.

2. Go to the root directory and run ```npm i```.

3. Go to the client directory and run ```npm i``` again.

4. In the root directory create a file called '.env'.

5. In this file create a variable called 'ATLAS_URL' and set this variable to the URL of your database called "test". It should look something like this:
```ATLAS_URL=mongodb+srv://<username>:<userPassword>@<cluster>.<cluster ID>.mongodb.net/test?retryWrites=true&w=majority```

6. In the root directory run ```nodemon server```.

7. In the client directory run ```npm start```.

You're good to go!

## Features

### Users

The user model in this app is very simple, just a unique email, a password, and a postal code, although MongoDB automatically assigns a unique ID string as well. The postal code is intended to be used so that listings are displayed according to location.

### Roles

There are three main roles: browser, user, and admin. A browser has access to view all the public information on the site, but cannot CRUD listings or contact a seller. A user is able to CRU their own profile, and CRUD their own listings. An admin has access to all information, public and private.

### Listings

A listing represents an item that a user would like to sell or give away.

### Images

A listing can have multiple images. Images are uploaded for a listing and then displayed with the listing details.

### Categories

A listing may or may not have a category. In a real app, heuristics and maybe some light AI could be used to determine a category for a listing if one is not selected by the creator. Heuristics could be things like key words, and AI could be used in image recognition/classification.

### Messages

We had originally hoped to include messaging functionality whereby a buyer and seller could communicate. This proved to be beyond the scope of this project, so we opted to include a feature so that the buyer could send an email to the seller, kind of like Kijiji.

## Contributions

### Asia
#### Project
#### Features
#### Teamwork

### Danyal
#### Project
#### Features
#### Teamwork

### Jemi
#### Project
#### Features
#### Teamwork

### Journey
#### Project
* Organised group and led discussion 
* Regulairly contacted members for updates
* Team Lead
* Created initial planning docks

 
#### Features
* Created  the following listing views: Edit, (Duplicated Delete due to misscomunication )

* Created  the following user views: Edit, Details
* Created client side validation 

#### Teamwork

* regulairly asked form help when needed
* Assisted in image uploading feature with Sandra 

### Sandra

#### Project
* Initialized repo.
* Initialized project with the code produced while completing a MERN stack tutorial.
* Created, defined, and maintained readme.

#### Features
* Implemented database design agreed on by the team. I simplified a couple of things to keep the scope of the project reasonable.
* Modified the folder structure suggested by the tutorial to be more modular.
* Modified server.js to use a .env file, following the recommendations of two team members who had completed a different tutorial.
* Implemented the routes/endpoints for the back end.
* Modified App.js by taking out the nav bar and making it a component as suggested by others on the team.
* Added front and back end for Roles and UserRoles. Neither have update or details views since they are very simple models. The front end for UserRoles should be updated with dropdowns for the users (by email, not ID) and the roles (by name, not ID).
* Since we don't currently have user authentication, I changed the listing model to use user_email instead of user_id since it's easier to type, and the emails are unique.
* Added the back end for images and a bridging table for listing images. Defined the routes for listing images so that images can be found easily for each listing.

#### Teamwork

* Attended all meetings.
* Communicated with team members about progress regularly.
* Followed up regularly with team members to make sure they weren't waiting on my work to get their's done.
* Worked with Journey on the Users feature.
* Gave Journey some hints for implementing client side validation, then did a code review.
* Helped Jemi set up her DB on Atlas.
* Made sure everyone could run the app after I initialized it in the repo.
* Responded quickly to requests for help.
* Worked closely with Journey to add images functionality to the listings front end, adding the ability to add images to a listing and view the images with the listing details.

#### Deployment

This app is essentially the same as https://github.com/ntrpi/HowToGetAwayWithMerner, except that the directory structure was changed to facilitate deployment on Heroku. It turned out to be easier to restructure the project than to figure out how to get Heroku to start the back end process from a subfolder and then go back to the root to start the front end process.

This app is deployed here: https://htgawm.herokuapp.com

Note that the image uploading feature doesn't work. It seems that Heroku does not allow files to be written to the server, so to make that feature work I would have to integrate with AWS or some other file-hosting service, or perhaps integrate the Heroku extension, Cloudinary.

