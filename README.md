# SPACEBOX
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/tsgoswami)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/tsgoswami) 
[![Made With Love](https://img.shields.io/badge/Made%20With-Love-blue.svg)](https://github.com/tsgoswami)


<p align="center">
  <img src="https://res.cloudinary.com/dui3gfpuj/image/upload/v1632059351/LOGO_euivcl.png" />
</p>

<p align="center">
Spacebox is the ultimate social hiring platform for developers and recruiters that eliminates the classic resume based shortlisting process. This allows developers to share their projects from github and showcase it in their spacebox profile as their portfolio making it easy for recruiters to select the candidate based on potential skills and ability. Spacebox also provide feeds thats let you share lastest stuffs among developers and recruiters.
</p>


[![Production Link](https://img.shields.io/badge/Production%20-Link-success?style=for-the-badge&logo=appveyor)](https://spacebox-ts.netlify.app/)
[![API Documentation](https://img.shields.io/badge/API%20-Documentation-informational?style=for-the-badge&logo=appveyor)](https://documenter.getpostman.com/view/11794310/UUxtDVoj)  


## Features
- User can sign up as a developer (github username is compulsary) or as a recruiter.
- User can sign in using email and password once verified.
- Both developer and recruiter can post stuffs on the feed.
- Both can view and edit their own profile
- Both can visit other users profile.
- Developer profile contains projects fetched from github and content respective developer posted.
- Recruiter profile contains jobs and content posted by respective recruiter. 
- Recruiter can add, edit and delete jobs
- Developers can only view jobs.
<br>
<p>
<img src="https://res.cloudinary.com/dui3gfpuj/image/upload/v1632065769/Screenshot_2021-09-19_205733_nes0r7.jpg">
</p>
<br>

## Demo
### Feed Page 
 - Contains contents posted by developers and recruiters.
 - Logged in user can visit profile of a user by clicking on the name or avatar on the post.
 <p>
  <img src="https://res.cloudinary.com/dui3gfpuj/image/upload/v1632074783/Feed_oy004c.jpg"/>
 </p>
 
### Developer Profile
 - Contains unforked projects from github repository.
 - Also contains posts posted by developer in the activity section.
 - User can edit and update name, bio, email, github, profile picture and techstack by clicking on edit button.
 <p>
 <img src="https://res.cloudinary.com/dui3gfpuj/image/upload/v1632074783/Profile_section_uo2sej.jpg"/> 
 </p>
 
### Recruiter Profile
- Contains jobs posted by recruiter.
- Jobs can be edited or deleted by clicking on edit and delete button.
- Also contains posts posted by recruiter in the activity section.
<p>
  <img src="https://res.cloudinary.com/dui3gfpuj/image/upload/v1632075395/developer_profile_tr9dgl.jpg"/>
</p>

### Developer Job View
- Shows jobs posted by recruiters.
- Clicking on each job, description is shown in the right panel.
- Recruiter profile can be visted by clicking on the name or avatar of the recruiter.
<p>
  <img src="https://res.cloudinary.com/dui3gfpuj/image/upload/v1632074783/Developer_Job_view_seezif.jpg"/>
</p>

### Recruiter Job View
- Contains form for posting new job.
- Job listing in the middle
- Job description will appear on clicking specific job.
<p>
  <img src="https://res.cloudinary.com/dui3gfpuj/image/upload/v1632074783/Recruiter_Job_view_yxn7li.jpg"/>
</p>

## Technology Stack
<b>Frontned</b> : React.js
<br>
<b>Additional Libraries</b>
 - Redux
 - Material UI
 - Axios
 - React Router DOM
 - React Toastify
 - React Quill
 -  JSON Web Token
<br>

<b>Backend</b> : Node.js
<br>
<b>Additional Libraries</b>
  - Axios
  - Bcrypt JS
  - Body Parser
  - CORS
  - Express
  - Express Validator
  - Google APIs
  - Mongoose
  - Morgan
  - Multer
  - Nodemailer
<br>
<br>
<b>Language<b>: TypeScript
<br>
<b>Database: MongoDB</b>
<br>  
<b>Authentication and Authorization<b> : Basic Auth, JWT and  Google Auth2.0
<br>
<b>Deployement</b> : Netlify and Heroku
<br>




## Setup
##### Environmental Variables for Backend
```
BASE_URL = Set your frontend URL e.g - localhost:3000 for development
PIN_API = https://api.postalpincode.in/pincode
SECRET = eg. eyJhbGciOiJIUzI1NiIsInR ... for generating JWT Tokens
MONGODB_URI_PROD = URI for connecting to MongoDB Database.
MONGODB_POOLSIZE = 10 or you can set to your custom
MAIL_SERVER_HOST = eg. smtp.gmail.com - Set it to yours.
MAIL_USER = eg. youremail@gmail.com 
SUPER_ADMIN_NAME = eg. SUPER ADMIN or Set it as per your choice.
SUPER_ADMIN_EMAIL = eg. admin@gmail.com 
SUPER_ADMIN_PHONE = eg. 8981430145
SUPER_ADMIN_PASSWORD = eg. PassDum@123 or Set Default Password for Admin
PORT = 8080 or Set Default Port
CLIENT_ID = Client ID generated by Google Cloud Console for Oauth2.0
CLIENT_SECRET = Client Secret generated
REFRESH_TOKEN = Refresh token generated
REDIRECT_URL = eg https://developers.google.com/oauthplayground 
```
For seting up Oauth2.0 on GCC. Refer here - [Sending Email with Gmail and Oauth2.0]

Backend
```
cd backend
npm install
npm run local -- for development or npm start -- for production
```
Frontend
```
cd frontend
npm install
npm start
```
  
 ***Glad to see you here! Show some love by [starring](https://github.com/tsgoswami/Wincorona) this repo.***

[![Facebook](https://img.shields.io/static/v1.svg?label=follow&message=@tsgoswami&color=black&logo=facebook&style=flat&logoColor=white&colorA=blue)](https://www.facebook.com/trishnangshu.goswami/)  
[![Instagram](https://img.shields.io/static/v1.svg?label=follow&message=@tsgoswami&color=black&logo=instagram&style=flat&logoColor=white&colorA=blue)](https://www.instagram.com/letstalkcs/) 
[![LinkedIn](https://img.shields.io/static/v1.svg?label=connect&message=@tsgoswami&color=black&logo=linkedin&style=flat&logoColor=white&colorA=blue)](https://www.linkedin.com/in/trishnangshugoswami/) 
[![Twitter](https://img.shields.io/static/v1.svg?label=connect&message=@tsgoswami&color=black&logo=twitter&style=flat&logoColor=white&colorA=blue)](https://twitter.com/ts_goswami)

> Made with 🖤 by Trishnangshu Goswami

[Sending Email with Gmail and Oauth2.0]: https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1

[API Documentation]: https://documenter.getpostman.com/view/11794310/UUxtDVoj
[Live URL]: https://heuristic-hugle-cf67ea.netlify.app/#/