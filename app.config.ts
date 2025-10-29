import {ExpoConfig} from "expo/config";

export const expoConfig: ExpoConfig = {
  "name": "BI HUB",
  "slug": "bi-onboarding",
  "version": "1.0.0",
  "orientation": "portrait",
  "scheme": "bionboarding",
  "userInterfaceStyle": "automatic",
  "newArchEnabled": true,
  "splash": {
    "image": "./assets/images/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#002341"
  },
  "ios": {
    "icon": './assets/icon.icon',
    "supportsTablet": true,
    "bundleIdentifier": "com.antonkatyrenchuk.bi-onboarding"
  },
  "android": {
    "adaptiveIcon": {
      "foregroundImage": "./assets/images/icon.png",
      "backgroundColor": "#002341"
    },
    "edgeToEdgeEnabled": true,
    "predictiveBackGestureEnabled": false,
    "package": "com.antonkatyrenchuk.bionboarding"
  },
  "plugins": [
    "expo-router",
    [
      "expo-asset",
      {
        "assets": [
          "./assets/images/floors",
          "./assets/images"
        ]
      }
    ],
  ],
  "experiments": {
    "typedRoutes": true
  }
};

export default expoConfig;