# Codigo Code Test
React Native

### Installing

1.install node_modules

```
npm i or yarn install
```

2. Create local.properties (./android/local.properties) and Add this code

```
 sdk.dir=/Users/naingmahar/Library/Android/sdk
```

3. install ios lib

```
cd ios
pod install
cd ..
```

### App Run

1. Android Run

```
 npx react-native run-android OR npm run android
```

2. Android Run

```
 npx react-native run-ios OR npm run ios
```

### Clear Cache
```
watchman watch-del-al
npm start --reset-cache
```

### React Native Debug apk
```
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

cd android

./gradlew assembleDebug
```
