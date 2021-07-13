# Mid-America Fire and Safety Fire Truck Builder Beta 
Purpose: Select factory-offered specifications for fire apparatus build-out and submit them as an electronic order request. 

# Source repo of this Project (will be set to private access post-Beta):

# Deployed live via Heroku:
////////////////  https://firetruckbuilderclient.herokuapp.com/  ///////////////////////////

Server: https://github.com/mtk007/redbadgeserver
        Heroku git: https://git.heroku.com/firetruckbuilder.git


Client: https://github.com/mtk007/redbadgeclient
        Heroku git:  https://git.heroku.com/firetruckbuilderclient.git

# Framework
This project initially utilizes (07/nn/21) PostgreSQL, @Material-UI and Typescript bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
                In the project directory, you can run:

### `npm start`
                Runs the app in the development mode.\
                Open [http://localhost:911](http://localhost:911) to view it in the browser.
                The page will reload if you make edits.\
                You will also see any lint errors in the console.
### `npx nodemon`
                Starts local server from Apple OS. 
### `rs`
                Restarts the local server.

# Project helpful hints
Auth Register
- Auth.tsx

Admin 
- ChiefsOfficeAdmin.tsx

Login/Register general user
- Login.tsx   
- Register.tsx

addtl CRUD
- TruckData.tsx  (truckbasicscontroller.js, trucksbasicsmodel.js)
- PumpData.tsx   (pumpfeaturescontroller.js, pumpfeaturesmodel.js)


