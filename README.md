# Environtment Preparation (****This Project will use Andriod)
1. MACOS BIGSUR
2. JAVA 11.0.13 
3. NODE 14.18.2
4. NPM 6.14.15
5. WATCHMAN
6. Android Studio
7. JENV (**Optional: Using for switch Java version)
8. NVM (**Optional: Using for switch NODE,NPM version)

# Configuration
1. After Install Android Studio We have to export path follow this
```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

2. Install Library react-native-vector-icons for using icon
```
npm install --save react-native-vector-icons  
```
```
react-native link react-native-vector-icons    
```

# How to setup project
1. Create Project
```
npx react-native init AwesomeProject2
```

2. Build & Run project
```
npx react-native run-android
```


