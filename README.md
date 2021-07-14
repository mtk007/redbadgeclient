# Mid-America Fire and Safety Fire Truck Builder Beta 
Purpose: Select factory-offered specifications for fire apparatus build-out and submit them as an electronic order request. 
                The app is designed for consistent B2B service to occur on the backend with minimal ability for a casual user to make permanent alterations to the data table structure other than their own requests. 

# EFA staff test admin account: efa85@email.com pw: efa85  
                (necessary to see some limited pathway views live in Heroku)
                   LOOK FOR 'CHIEF OFFICE ADMIN' LINK TO APPEAR AFTER LOGIN

# Deployed live via Heroku:
////////////////  https://firetruckbuilderclient.herokuapp.com/  ///////////////////////////

Server: https://github.com/mtk007/redbadgeserver
        Heroku git: https://git.heroku.com/firetruckbuilder.git


Client: https://github.com/mtk007/redbadgeclient
        Heroku git:  https://git.heroku.com/firetruckbuilderclient.git

# Framework
This project initially utilizes (07/nn/21) PostgreSQL, @Material-UI and Typescript bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Where I'm currently likely stuck on project deadline:

index.js:1 Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node

"magically" started on 7/13/21 PM.   


# Project helpful hints
Admin 
- ChiefsOfficeAdmin.tsx

Login/Register general user
- Login.tsx   
- Register.tsx

addtl CRUD
- TruckData.tsx  (truckbasicscontroller.js, trucksbasicsmodel.js)
- PumpData.tsx   (pumpfeaturescontroller.js, pumpfeaturesmodel.js)
- ViewTrucks.tsx
- ViewPumps.tsx


#environment.js is nested under "site" because VSCode refused to see it further out where it normally might be nested.

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


