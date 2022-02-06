
# Vrana Web App 
 
This is the unofficial Vrana Construction Web App (built as a demo to present to them). It holds all of the current websites content, but also let's the admin update/edit/delete News Articles, Projects, Equipment Sales, and Job Postings without any coding experience. Essentially this is a full CRUD app for the Admin, while being a beautiful site for the visitors. This Web App can be found at: https://vrana-website-demo.herokuapp.com/. It was deployed with Heroku and was developed with React, Ruby on Rails, React Redux, Google's Material-UI Framework, AWS S3 storage, and more. It is also worth noting, that this web app is responsive on most phones, tablets, and computers.

Enjoy!


### Features
- React Redux
- Google's Material-UI Framework
- React Hooks
- Functional Components set up, no classes
- Full BCrypt Authentication that goes through Rails, also utilizes JWT Tokens for authenticating requests
- Loading Spinner added to pages that need to fetch data
- Rails String IDs customization - Creates unique string ID for each item in each table instead of using default integer ID
- Image Uploading process -> Frontend uploads to Rails Backend which uploads the image to an S3 bucket, and then generates an object url for the image
- PostgreSQL Database in the Backend
- SMTP Gmail Server set up in order for the Contact Us page to send email to website email

### Before You Start Using (if you are not visiting site on Heroku link)

Navigate to the Backend folder and run the following commands in order:<br />
- `bundle-install`
- `rails db:create`
- `rails db:migrate`
- `rails db:seed` - dummy dataset seeded

### Starting the Frontend and Backend Locally

To start the servers you will need to:<br />
- Backend:
    - Go into the Backend folder and run the following command: `rails s -p 4000`<br />
- Frontend:
    - Go into the Frontend folder and run the following command: `npm start`

### Navigating to the Application

Visit `http://localhost:3000/`

### Pages (Non-Admin)

- Home
- About
- Safety
- Contact Us
- Services
- Our Work
- Equipment
- News
- Careers
- Admin: Login

### Admin Pages

- Add Project
- Edit Project
- Delete Project
- Add News
- Edit News
- Delete News
- Add Equipment
- Edit Equipment
- Delete Equipment
- Add Career
- Edit Career
- Delete Career

### Video Demo

[![Vrana Website Walkthrough](https://img.youtube.com/vi/oTsT9zg0lbA/0.jpg)](https://www.youtube.com/watch?v=oTsT9zg0lbA)

### Authors

* **Jack Perry**  - [Jack Perry's Github](https://github.com/japerry911)
