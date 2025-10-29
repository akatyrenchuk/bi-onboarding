import {ExpoConfig} from "expo/config";

export const expoConfig: ExpoConfig = {
  "name": "bi-onboarding",
  "slug": "bi-onboarding",
  "version": "1.0.0",
  "orientation": "portrait",
  "icon": "./assets/images/icon.png",
  "scheme": "bionboarding",
  "userInterfaceStyle": "automatic",
  "newArchEnabled": true,
  "splash": {
    "image": "./assets/images/splash-icon.png",
    "resizeMode": "contain",
    "backgroundColor": "#ffffff"
  },
  "ios": {
    "supportsTablet": true,
    "bundleIdentifier": "com.antonkatyrenchuk.bi-onboarding"
  },
  "android": {
    "adaptiveIcon": {
      "foregroundImage": "./assets/images/adaptive-icon.png",
      "backgroundColor": "#ffffff"
    },
    "edgeToEdgeEnabled": true,
    "predictiveBackGestureEnabled": false,
    "package": "com.antonkatyrenchuk.bionboarding"
  },
  "plugins": [
    "expo-router"
  ],
  "experiments": {
    "typedRoutes": true
  }
};

export default expoConfig;