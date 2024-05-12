# MeLMS App

This is a mobile application for MeLMS (Mobile Learning Management System) built for Final Year Computing Individual Project  

**Name: *Hikkaduwage Mindula Silva***  
**Plymouth ID: *10820799***  
**NSBM ID: *22948***  


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- npm installed
- Expo CLI installed (`npm install -g expo-cli`)

## Setup

To set up this project, follow these steps:

1. Clone the repository (or download source code zip file):

   ```bash
   git clone https://github.com/HMJSilva/MeLMS-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd MeLMS-App
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Follow the instructions in the terminal to open the app on your device or emulator. (i.e. Expo Go, Android Studio VDM, etc.)  
6. Alternatively, download the APK file directly and then install and run it on your device.

## Versions to be used for the project Dependencies:
### Package.json:

- To ensure compatibility and avoid/minimize errors please refer to the following package version list
- Here's the `package.json` file for this project:

```json
{
  "name": "MeLMS-App",
  "version": "1.0.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "@kinde-oss/react-native-sdk-0-7x": "^1.2.2",
    "@react-navigation/bottom-tabs": "^6.5.11",
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/stack": "^6.3.20",
    "expo": "~50.0.2",
    "expo-av": "~13.10.3",
    "expo-font": "~11.10.2",
    "expo-status-bar": "~1.11.1",
    "graphql": "^15.8.0",
    "graphql-request": "^6.1.0",
    "react": "18.2.0",
    "react-native": "0.73.2",
    "react-native-gesture-handler": "^2.14.1",
    "react-native-safe-area-context": "4.8.2",
    "react-native-screens": "~3.29.0"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0"
  },
  "private": true
}
```


## Building the App

To build the app for production, run:

```bash
eas build --platform android
```

or

```bash
eas build --platform ios
```

Follow the instructions provided by Expo documentations to build the app for the desired platform.

## Contact
For any clarifications or assistance, reach out to the email below:


```bash
hmjsilva@students.nsbm.ac.lk
```

or

```bash
10820799@students.plymouth.ac.uk
```


