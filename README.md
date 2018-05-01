# Initial set up

## Intro
* These instructions were compiled on Ubuntu 16.04. YMMV.
* Instead of checking this project out you might want to just download this as a tarball and unpack it in order to keep your gt repo clean.
* Google Cloud Functions, at the time of writing, only support node version v6.11.5, so that's what's used here. Instructions for installing this with nvm not currenty included. 

## Install Yarn and build
* curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
* echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
* sudo apt-get update
* sudo apt-get install yarn
* yarn install
* yarn build


## Set up Jest and linting 
* yarn add --dev jest ts-jest @types/jest tslint
* yarn tslint --init

# Set up Google Cloud SDK
* See: https://cloud.google.com/sdk/docs/quickstart-debian-ubuntu

# Set up Cloud Functions emulator
* yarn global add @google-cloud/functions-emulator
* functions start|stop  # on some shells you may need to use the alias binary functions-emulator

# Deploy to Google
* gcloud beta functions deploy entryPointFunctionName --trigger-http
