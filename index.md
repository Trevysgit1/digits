##digits application

<img src="doc/homepage.png">

Digits is an application that allows users to:
- Register an account
- Create and manage a set of contacts
- Add a set of timestamped notes regarding their interactions with each contact

##Installation
First, install packages
````
$ npm install
````
Create the database
````
$ createdb <digits-db-name>
````
Seed the database
````
$ npx prisma seed db
````
This is the output of adding to the database
````
Loaded Prisma config from prisma.config.ts.

Running seed command `tsx prisma/seed.ts` ...
Seeding the database
  Creating user: admin@foo.com with role: ADMIN
  Creating user: john@foo.com with role: USER
  Adding contact: Philip Johnson
  Adding contact: Henri Casanova
  Adding contact: Kim Binsted

The seed command has been executed.
````
To access the application run
````
$ npm run dev
````
This will allow you to access the app at http://localhost:3000

You can also run ESLint with
````
$ npm run lint
````

## User Interface Walkthrough
Landing Page
When you first bring up the application, you will see the landing pages that provides a brief introduction to the capabilities of Digits:
<img src="doc/homepage.png">

Register
If you do not have an account on the system, you can register by clicking on "Login", then "Sign Up":
<img src="doc/Register.png">

Sign in
Click on the Login link, then click on the Sign in link to bring up the Sign In page which allows you to login:
<img src="doc/SignIn.png">

User home page
After successfully logging in, the system takes you to your home page. It is just like the landing page, but the NavBar contains links to list contact and add new contacts:
<img src="doc/UserHomePage.png">

List Contacts
Clicking on the List Contacts link brings up a page that lists all of the contacts associated with the logged in user:
<img src="doc/ListContacts.png">

Edit Contacts
From the List Contacts page, the user can click the “Edit” link associated with any Contact to bring up a page that allows that Contact information to be edited:
<img src="doc/EditContact.png">

Admin mode
It is possible to designate one or more users as “Admins” through the settings file. When a user has the Admin role, they get access to a special NavBar link that retrieves a page listing all Contacts associated with all users:
<img src="doc/AdminMode.png">
