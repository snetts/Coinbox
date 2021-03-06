# Coinbox - A bitcoin wallet

#### Updates

From now onwards, I will be adding a GIF that show the development of the app.

##### App Screenshot

![App Screenshot](https://media.giphy.com/media/Q30kFTewPGXSw/giphy.gif)

### Getting started

The app is divided into two distinct parts. The `app` folder represents the frontend code written in React whereas the `server` folder represents a thin wrapper over [bitcore-wallet-client](https://github.com/bitpay/bitcore-wallet-client) with user authentication and additional functionalities.

To get started, clone the app:
```
git clone https://github.com/itsyogesh/Coinbox
cd Coinbox
```

Next, install the required dependencies for both frontend and backend.

To make things easier I've added an `install.sh` file that installs the required dependencies.
```
chmod 700 install.sh
./install.sh
```

You can also install everything manually. If you don't have yarn, you can add it with the command `npm install -g yarn`
```
cd app && yarn install
cd ..
cd server && npm install
```

### Progress

You can follow the progress of the app here.

#### Frontend

- [x] Landing page
- [x] Navbar - not authenticated
- [x] Fetch fiat rates from backend.
- [ ] Showing intial bitcoin value based on user ip
- [x] User signup
- [x] User login
- [x] Automatic Login if token
- [ ] Forgot Password
- [x] Dashboard - Home
- [x] Navbar - authenticated
- [x] Fetch navbar details from store
- [x] Dashboard - Sidebar
- [x] Dashboard - Send Bitcoin
- [ ] Dashboard - Receive Bitcoin
- [x] Dashboard - Wallet
- [x] Fetch wallet details from backend
- [ ] Connect wallet UI with data.
- [ ] Dashboard - Settings

#### Backend

- [x] API - User signup
- [x] API - User login
- [x] API - Create Wallet
- [x] Queue - Create default wallet on signup
- [x] Queue - Create default address on wallet creation ( Still needs some rethinking)
- [x] Queue - Confirmation email
- [ ] Queue - Forgot Password email
- [ ] API - Forgot Password
- [x] API - Fetch User
- [x] API - Fetch user wallet details
- [x] API - Get fiat rates
- [x] API - Send fiat rates based on ip country currency

I will keep on updating the tasks as I come across any challenges or if the above ones need further breaking down.