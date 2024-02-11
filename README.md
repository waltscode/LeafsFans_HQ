# LeafsFans HQ


Welcome to LeafsFans HQ – your go-to destination for spirited discussions about the Toronto Maple Leafs! Our platform, designed to seamlessly adapt to widescreen computers and mobile devices, offers a comprehensive fan experience. The application is deployed on Heroku and features an active database, creating an engaging space for Maple Leafs enthusiasts. Explore the world of LeafsFans HQ and join the conversation today!

### Key Dependencies:
- bcrypt: ^5.1.1
- connect-session-sequelize: ^7.1.7
- dotenv: ^16.4.1
- express: ^4.18.2
- express-handlebars: ^7.1.2
- express-session: ^1.18.0
- method-override: ^3.0.0
- mysql2: ^3.9.1
- sequelize: ^6.36.0



## Acceptance Criteria

```md
GIVEN a CMS-style blog site
- WHEN I visit the site for the first time, THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

- WHEN I click on the homepage option, THEN I am taken to the homepage

- WHEN I click on any other links in the navigation, THEN I am prompted to either sign up or sign in

- WHEN I choose to sign up, THEN I am prompted to create a username and password

- WHEN I click on the sign-up button, THEN my user credentials are saved and I am logged into the site

- WHEN I revisit the site at a later time and choose to sign in, THEN I am prompted to enter my username and password

- WHEN I am signed in to the site, THEN I see navigation links for the homepage, the dashboard, and the option to log out

- WHEN I click on the homepage option in the navigation, THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

- WHEN I click on an existing blog post, THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

- WHEN I enter a comment and click on the submit button while signed in, THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

- WHEN I click on the dashboard option in the navigation, THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

- WHEN I click on the button to add a new blog post, THEN I am prompted to enter both a title and contents for my blog post

- WHEN I click on the button to create a new blog post, THEN the title and contents of my post are saved, and I am taken back to an updated dashboard with my new blog post

- WHEN I click on one of my existing posts in the dashboard, THEN I am able to delete or update my post and taken back to an updated dashboard

- WHEN I click on the logout option in the navigation, THEN I am signed out of the site

- WHEN I am idle on the site for more than a set time, THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts

```

# Screenshots: 

![Alt text](image.png)

![Alt text](image-1.png)


# Link To Heroku App:

https://leafsfanshq-ea7a8f3ce61e.herokuapp.com/ 

# Link To Github Repository

https://github.com/waltscode/LeafsFans_HQ