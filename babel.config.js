module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['.'],
        alias: {
          "$assets": "./app/assets",
          "$components": "./app/components",
          "$constants": "./app/constants",
          "$context": "./app/context",
          "$hooks": "./app/hooks",
          "$navigation": "./app/navigation",
          "$screens": "./app/screens",
          "$store": "./app/store",
          "$types": "./app/types",
          "$utils": "./app/utils",
        }
      }
    ]
  ]
};
