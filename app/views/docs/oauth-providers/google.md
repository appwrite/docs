# Google provider

Appwrite allows you to authenticate users using their Google account through the Google OAuth2 provider. OAuth authentication is a great way to reduce friction for your users and increase user conversion by simplifying the signup process. You can learn more about Appwrite's other OAuth2 providers [here](https://appwrite.io/docs/client/account?sdk=web-default#accountCreateOAuth2Session).

## Enabling the Google provider

Before you can use Google to authenticate users, you need to enable the provider in your Appwrite console.

1. Navigate to your Appwrite project
2. Navigate to **Auth** > **Settings**
3. Find and open the OAuth provider
4. In the **Google OAuth2 Settings** modal, use the toggle to enable the provider

Don't close this modal, we'll need an OAuth client ID to complete this form.

## Creating a Google OAuth2.0 client

To use Google OAuth with Appwrite, you need to create an OAuth 2.0 client from your Google Cloud console. You can do this by following the [Setting up OAuth 2.0](https://support.google.com/googleapi/answer/6158849) guide from Google.

- When prompted to provide an **Application type**, select **web application**, irrespective of your target platform. This is because the communication occurs between Appwrite (a web app) and the OAuth2 provider on behalf of your web or mobile app.
- When prompted to provide a **Authorized redirect URIs** field, provide the **URI** found in the **Google OAuth2 Settings** modal from your Appwrite console.

After you've created the OAuth client, you can head back to your Appwrite console to complete the form in the **Google OAuth2 Settings** modal.

- Find the **Client ID** in OAuth 2.0 Client IDs and provide this in the **App ID** field in the **Google OAuth2 Settings** modal from the Appwrite console.
- Navigate to the **Client secrets** section in the newly created client, copy the Client secret and provide this in the **App Secret** field in the **Google OAuth2 Settings** modal from the Appwrite console.

## Authenticating

You can use any of the Appwrite Client SDKs to authenticate users with their Google account.

### Web

When a user calls the [Create OAuth2 Session](https://appwrite.io/docs/client/account#accountCreateOAuth2Session) endpoint in your web app, they will be taken to Google's OAuth page to complete their login.

After authenticating, they'll be redirected back to your app using either the `success` or `failure` URLs provided. To provide the best experience to your users, make sure to **implement and provide both routes** to prompt the user about successful and failed authentication attempts.

```js
import { Client, Account } from "appwrite";

const client = new Client();

const account = new Account(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("[PROJECT_ID]");                 // Your project ID

// Go to OAuth provider login page
account.createOAuth2Session("google", "[LINK_ON_SUCCESS]", "[LINK_ON_FAILURE]");
```

### Flutter

You can use OAuth in your Flutter application, but some platforms like Android and Apple requires additional configuration to enable the OAuth callback, so the your users can be redirected back to your app.

#### Android OAuth callback

In order to capture the Appwrite OAuth callback url, the following activity needs to be added inside the `<application>` tag, along side the existing `<activity>` tags in your `AndroidManifest.xml`. Be sure to replace the `[PROJECT_ID]` string with your actual Appwrite project ID. You can find your Appwrite project ID in the project settings screen in your Appwrite console.

```xml
<manifest ...>
  ...
  <application ...>
    ...
    <!-- Add this inside the `<application>` tag, along side the existing `<activity>` tags -->
    <activity android:name="io.appwrite.views.CallbackActivity" android:exported="true">
      <intent-filter android:label="android_web_auth">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="appwrite-callback-[PROJECT_ID]" />
      </intent-filter>
    </activity>
  </application>
</manifest>
```

#### Apple

In order to capture the Appwrite OAuth callback url, the following URL scheme needs to added to your `Info.plist` .Be sure to replace the `[PROJECT_ID]` string with your actual Appwrite project ID. You can find your Appwrite project ID in your project settings screen in your Appwrite console.

```xml
<key>CFBundleURLTypes</key>
<array>
<dict>
    <key>CFBundleTypeRole</key>
    <string>Editor</string>
    <key>CFBundleURLName</key>
    <string>io.appwrite</string>
    <key>CFBundleURLSchemes</key>
    <array>
        <string>appwrite-callback-[PROJECT_ID]</string>
    </array>
</dict>
</array>
```

To authenticate a user in your Flutter application, use the [Create OAuth2 Session](https://appwrite.io/docs/client/account?sdk=flutter-default#accountCreateOAuth2Session) endpoint.

```dart
import 'package:appwrite/appwrite.dart';
void main() async {
    final client = new Client();
    final account = new Account(client);
    client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('[PROJECT_ID]')                  // Your project ID
    ;
    // OAuth Login, for simplest implementation you can leave both success and
    // failure link empty so that Appwrite handles everything.
    await account.createOAuth2Session(provider: 'google');
}
```

### Android (Kotlin)

Before you can add OAuth to your Android app, you need to setup a callback for your OAuth flow.

In order to capture the Appwrite OAuth callback url, the following activity needs to be added inside the `<application>` tag, along side the existing `<activity>` tags in your `AndroidManifest.xml`. Be sure to replace the `[PROJECT_ID]` string with your actual Appwrite project ID. You can find your Appwrite project ID in your project settings screen in your Appwrite console.

```xml
<manifest ...>
  ...
  <application ...>
    ...
    <!-- Add this inside the `<application>` tag, along side the existing `<activity>` tags -->
    <activity android:name="io.appwrite.views.CallbackActivity" android:exported="true">
      <intent-filter android:label="android_web_auth">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="appwrite-callback-[PROJECT_ID]" />
      </intent-filter>
    </activity>
  </application>
</manifest>
```

To authenticate a user in your Android application, use the [Create OAuth2 Session](https://appwrite.io/docs/client/account?sdk=android-kotlin#accountCreateOAuth2Session) endpoint.

```kotlin
import io.appwrite.Client
import io.appwrite.services.Account

val client = Client(context)
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("[PROJECT_ID]")                  // Your project ID

val account = Account(client)

account.createOAuth2Session(provider = "google")
```

### Android (Java)

Before you can add OAuth to your Android app, you need to setup a callback for your OAuth flow.

In order to capture the Appwrite OAuth callback url, the following activity needs to be added inside the `<application>` tag, along side the existing `<activity>` tags in your `AndroidManifest.xml`. Be sure to replace the `[PROJECT_ID]` string with your actual Appwrite project ID. You can find your Appwrite project ID in your project settings screen in your Appwrite console.

```xml
<manifest ...>
  ...
  <application ...>
    ...
    <!-- Add this inside the `<application>` tag, along side the existing `<activity>` tags -->
    <activity android:name="io.appwrite.views.CallbackActivity" android:exported="true">
      <intent-filter android:label="android_web_auth">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="appwrite-callback-[PROJECT_ID]" />
      </intent-filter>
    </activity>
  </application>
</manifest>
```

To authenticate a user in your Android application, use the [Create OAuth2 Session](https://appwrite.io/docs/client/account?sdk=android-java#accountCreateOAuth2Session) endpoint.

```java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Account;

Client client = new Client(context)
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("[PROJECT_ID]");                 // Your project ID

Account account = new Account(client);

account.createOAuth2Session(
    "google",
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Appwrite", result.toString());
    })
);
```

### iOS (Swift)

In order to capture the Appwrite OAuth callback url, the following URL scheme needs to added to your `Info.plist`. Be sure to replace the [PROJECT_ID] string with your actual Appwrite project ID. You can find your Appwrite project ID in your project settings screen in your Appwrite console.

```xml
<key>CFBundleURLTypes</key>
<array>
<dict>
    <key>CFBundleTypeRole</key>
    <string>Editor</string>
    <key>CFBundleURLName</key>
    <string>io.appwrite</string>
    <key>CFBundleURLSchemes</key>
    <array>
        <string>appwrite-callback-[PROJECT_ID]</string>
    </array>
</dict>
</array>
```

If you're using UIKit, you'll also need to add a hook to your `SceneDelegate.swift` file to ensure cookies work correctly.

```swift
func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
    guard let url = URLContexts.first?.url,
        url.absoluteString.contains("appwrite-callback") else {
        return
    }
    WebAuthComponent.handleIncomingCookie(from: url)
}
```

To authenticate a user in your Android application, use the [Create OAuth2 Session](https://appwrite.io/docs/client/account?sdk=apple-default#accountCreateOAuth2Session) endpoint.

```swift
import Appwrite

let client = Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("[PROJECT_ID]")                  // Your project ID
let account = Account(client)

let success = try await account.createOAuth2Session(provider: "google")

```

## Refreshing the OAuth2 session

OAuth2 sessions expire to protect from security risks. This means, OAuth2 sessions should be refreshed to keep the user authenticated. You can do this by calling the [Update OAuth Session](https://appwrite.io/docs/client/account#accountUpdateSession) endpoint when ever your user visits your app.

### Web

```js
import { Client, Account } from "appwrite";

const client = new Client();

const account = new Account(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("[PROJECT_ID]");                 // Your project ID

// Updates current session
const promise = account.updateSession("current");

promise.then(
  function (response) {
    console.log(response); // Success
  },
  function (error) {
    console.log(error); // Failure
  }
);
```

### Flutter

```dart
import 'package:appwrite/appwrite.dart';
void main() async {
    final client = new Client();
    final account = new Account(client);
    client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('[PROJECT_ID]')                  // Your project ID
    ;
    // OAuth Login, for simplest implementation you can leave both success and
    // failure link empty so that Appwrite handles everything.
    try {
      final future = await account.updateSession(sessionId: 'current');
      print(future.toMap()); // Success
    } on AppwriteException catch(e){
      print(e.message);      // Failure
    }
}
```

### Android (Kotlin)

```kotlin
import io.appwrite.Client
import io.appwrite.services.Account

val client = Client(context)
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("[PROJECT_ID]")                  // Your project ID

val account = Account(client)

val response = account.updateSession(sessionId = "current")
```

### Android (Java)

```java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Account;

Client client = new Client(context)
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("[PROJECT_ID]");                 // Your project ID

Account account = new Account(client);

account.updateSession(
    "current"
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Appwrite", result.toString());
    })
);
```

### iOS (Swift)

```swift
import Appwrite

let client = Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("[PROJECT_ID]")                  // Your project ID
let account = Account(client)

let session = try await account.updateSession(sessionId: "current")
```
