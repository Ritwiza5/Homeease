# Homeease-  ![4890230](https://github.com/Ritwiza5/Homeease/assets/106557993/7d948d22-c4f8-4d85-92f0-e90db6dab401)
⭐Homeease is a complete webapp used for online shopping.From ordering products to make payments online,it makes every thing available at just one click.Super easy and user-friendly.<br>
## <br>⭐<b>Tech stack used</b>: <br>
<br>⭐<b>Frontend</b>:<br>
-React<br>
-Redux<br>
⭐<b>Backend<b>:<br>
-Nodejs<br>
-Mongodb<br>
-Express<br>







## <br>⭐<b>User side functionalities:</b><br>
 <br>    ⭐<b>Login/Register</b>:User can login/Register.Passwords are secured in the database as password is hashed using bcrypt before saving it into database.<br>
     ![Screenshot (353)](https://github.com/Ritwiza5/Homeease/assets/106557993/740670d5-0392-4526-87ad-ad92a8c2956a)<br>
 <br> ⭐<b>Forget password</b>:User can reset password by clicking on forgot password which will send a password recovery mail to your logged in mail using nodemailer<br>
     ![Screenshot (354)](https://github.com/Ritwiza5/Homeease/assets/106557993/781a03b4-4dfc-40db-8526-d3c4050dea17)<br>
    <br> ⭐<b>Add to cart</b>:User can add items in cart as per their demand.User can add multiple items at the same time also.<br>
    ![Screenshot (357)](https://github.com/Ritwiza5/Homeease/assets/106557993/9a40d76e-aa83-4ab2-8543-efb9d0a939ab)<br>
    <br> ⭐<b>Add review</b>:User can add review and if the user had already reviewed the product then he can add updated review and can give rating alongwith it. </br>
    ![Screenshot (358)](https://github.com/Ritwiza5/Homeease/assets/106557993/eabcd81a-a555-49eb-80c2-c74db1654729)<br>

<br> ⭐<b>View products<b>:User can view featured products or all the products along with filters and pagination.<br>
![Screenshot (356)](https://github.com/Ritwiza5/Homeease/assets/106557993/f22c49ef-ca9e-45e7-ad80-ca46487c783c)<br>
    <br> ⭐<b>Make payments</b>:User can make online payments using stripe which is currently a testing gateway.<br>
   ![Screenshot (360)](https://github.com/Ritwiza5/Homeease/assets/106557993/93cf2bc7-d64f-4585-bdd0-88414fe56abf)<br>

![Screenshot (363)](https://github.com/Ritwiza5/Homeease/assets/106557993/7665f182-3c11-49df-92fd-ccb222890c7c)<br>

   ![Screenshot (362)](https://github.com/Ritwiza5/Homeease/assets/106557993/3a04d5cd-7b1c-42bc-8b8a-5d7acfde8703)<br>
     <br> ⭐<b>Search</b>:User can search for specific category of products using some keywords.<br>
      ![Screenshot (355)](https://github.com/Ritwiza5/Homeease/assets/106557993/de724e90-33a7-490c-a010-f5898b6b5659)<br>
    <br> ⭐<b>Edit profile</b>:User can update his/her profile as well as password.<br>
  ![Screenshot (359)](https://github.com/Ritwiza5/Homeease/assets/106557993/baca421e-ce3d-432c-b000-c8836a6c358a)<br>
<br>
    
## ⭐<b>Site owner functionalities</b>:<br>
<br>⭐<b>Add products</b>:The admin can add new products on the website.<br>
<br>⭐<b>Delete reviews</b>:The admin can delete one or more reviews from the website.<br>
<br>⭐<b>Delete products</b>:The admin can delete one or more products from the website.<br>
<br>⭐<b>Transaction details</b>:The admin can update the transaction state from processing to delivered<br>





## <br>⭐<b>How to run the project?</b><br>

<br>⭐Clone the project first using the following link:https://github.com/Ritwiza5/Homeease.git<br>
⭐Create the `.env` file in the config folder using the following template(Example):<br>
```properties
PORT=4000

DB_URI=mongodb+srv://password@homeease.kakxxne.mongodb.net/?retryWrites=true&w=majority

FRONTEND_URL="https://homeease-56gr.onrender.com/"

STRIPE_API_KEY=pk_test_51N7Dg6SBvIQu1hmuq4EgYBnNtihJJA1Xe4wUPiw5V81p04Q2O3UIz3GCB0avVcgdn78fgedFaDt424tev1QnzEAj00jBQVqfXv

STRIPE_SECRET_KEY=sk_test_51N7Dg6SBvIQu1hmuX6WqfZmvLD2arQ6Tmao9K02igMscz8SRSBGQqAe7leavTmoa6gtsgv8qMgtokZT9LPOZsLTv00PZUBElvp

JWT_SECRET=EDGFHJKHJBGVFCDXZASWDNU,JWECKOCNYSDFGHJK

JWT_EXPIRE=5d

COOKIE_EXPIRE=5

SMTP_SERVICE="gmail"

SMTP_MAIL="admin@gmail.com"

SMTP_PASSWORD="ypzwpthguytbmzso"

SMTP_HOST="smtp.gmail.com"

CLOUDINARY_NAME=dgerb3ctb

CLOUDINARY_API_KEY=296485345628764

CLOUDINARY_API_SECRET=QgYDkTOeiyAbn8yGB8RlFXOkrM4
```


⭐To run the project in development mode,run the command:`npm run start`<br>
⭐To run the project in local system,firstly delete the build folder and then run the following commands:<br>
⭐Add the proxy in the package.json file to run the frontend on the local server<br>
⭐For frontend:`npm run`<br>
⭐For backend:`npm run dev`<br>

## ⭐Project Structure
```bash
  .
  ├── BACKEND 
    ├── config                     #For storing environment variables and other connection data  
    ├── controllers                # Application Controllers              
    ├── middleware                 # Application middleware (Checking if user is authenticated (DeserializeUser), etc.)
    ├── models                     # Application models
    ├── routes                     # Application routes
    ├── utils                      # Application utilities (for sending emails, generating tokens, etc.)
    ├── app.js                     # entry point to the application
    ├── utils                      # Connecting Cloudinary etc
    
  ├── FRONTEND                   
    ├── actions                    #Project actions
    ├── components                 #Components used in project
    ├── constants                  #Project constants
    ├── reducers                   #Project reducers
    ├── App.css                    #Application styles
    ├── App.js                     #Group all routes
    ├── index.js                   #Entry point
    ├── store.js                   #common database for redux library
    
   ```

## <br>⭐<b>Useful links</b>:<br>
<br>⭐<b>Project demo</b>:https://sendgb.com/ymC6iN1TxsH<br>
⭐<b>Project link</b>:https://project-vcv0.onrender.com/<br>
⭐[Backend Repository](https://github.com/Ritwiza5/Homeease)<br>
⭐[Frontend Repository](https://github.com/Ritwiza5/Homeease/tree/master/frontend)<br>



