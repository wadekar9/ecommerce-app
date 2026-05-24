# E-Commerce App

A cross-platform E-Commerce application built with React Native.

## 🛠 Tech Stack

- **Core**: React Native (0.85), React (19), TypeScript
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Navigation**: [React Navigation v7](https://reactnavigation.org/)
- **Networking**: [Axios](https://axios-http.com/)
- **Local Storage**: [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- **UI & Assets**:
  - React Native Fast Image (Optimized image loading)
  - React Native SVG (Scalable vector graphics)
  - React Native Bootsplash (Splash screens)
  - React Native Flash Message (Toasts/Notifications)
  - React Native Star Rating Widget

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 22.11.0)
- React Native development environment set up (Android Studio / Xcode). For full setup, refer to the [React Native documentation](https://reactnative.dev/docs/environment-setup).

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd ECommerceApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **iOS specific setup** (CocoaPods):
   ```bash
   cd ios
   pod install
   cd ..
   ```

## 📱 Running the App

### Start Metro Bundler
First, start Metro (the JavaScript bundler for React Native):
```bash
npm start
```

### Run on Android
Open a new terminal window and run:
```bash
npm run android
```

### Run on iOS
Open a new terminal window and run:
```bash
npm run ios
```

## 📦 Building for Production

### Android

1. **Generate a keystore** (if you haven't already):
   ```bash
   npm run android:keystore
   ```
2. **Build the Release APK**:
   ```bash
   npm run android:apk
   ```
   The APK will be generated inside `android/app/build/outputs/apk/release/`.

## 🧹 Maintenance

- **Clean Android Build**:
  ```bash
  npm run android:clean
  ```
- **Lint Code**:
  ```bash
  npm run lint
  ```
