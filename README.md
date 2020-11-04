install torus-direct-react-native-sdk:

npm install torus-direct-react-native-sdk --save
android:

open MainApplication.java and add =>
import org.torusresearch.rntorusdirect.RNTorusDirectSdkPackage;
packages.add(new RNTorusDirectSdkPackage());

open android/app/build.gradle and add =>
android {
    compileSdkVersion 26
    buildToolsVersion '29.0.2'
    ...
}

defaultConfig {
    manifestPlaceholders = [
            'torusRedirectScheme': 'torusapp',
            'torusRedirectHost': 'org.torusresearch.torusdirectexample',
            'torusRedirectPathPrefix': '/redirect'
    ]
    ...
}

dependencies {
    implementation project(':torus-direct-react-native-sdk')
}

open settings.gradle and add =>
include ':torus-direct-react-native-sdk'
project(':torus-direct-react-native-sdk').projectDir = new File(rootProject.projectDir, '../node_modules/torus-direct-react-native-sdk/android')

open android/build.gradle and add =>
ext {
    buildToolsVersion = "29.0.2"
    minSdkVersion = 26
    compileSdkVersion = 29
    targetSdkVersion = 29
}
dependencies {
    classpath("com.android.tools.build:gradle:3.5.3")




