# GitHub provider

Appwrite allows you to authenticate users using their GitHub account through the GitHub OAuth2 provider. OAuth authentication is a great way to reduce friction for your users and increase user conversion by simplifying the signup process. You can learn more about Appwrite's other OAuth2 providers [here](placeholder link). 

## Enabling the GitHub provider
Before you can use GitHub to authenticate users, you need to enable the provider in your Appwrite console.
1. Navigate to your Appwrite project
2. Navigate to **Auth** > **Settings**
3. Find and open the OAuth provider
4. In the **Github OAuth2 Settings** modal, use the toggle to enable the provider

Don't close this modal, we'll need to create a GitHub OAuth app to complete this form.

## Creating a GitHub OAuth app
To use GitHub OAuth with Appwrite, you need to create an OAuth app on your GitHub account or in your Github organization. You can do this by following the [Creating an OAuth App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) guide from GitHub. When prompted to provide a **Authorization callback URL**, provide the **URI** found in the **Github OAuth2 Settings** modal from your Appwrite console.

After you've created your GitHub OAuth app, you can head back to your Appwrite console to complete the form in the **Github OAuth2 Settings** modal.
- Find the **Client ID** in your GitHub OAuth app and provide this in the **App ID** field in the **Github OAuth2 Settings** modal from the Appwrite console.
- Navigate to the **Client secrets** section in your Github OAuth app and click **Generate a new client secret**.
- Copy your new client secret and provide this in the **App Secret** field in the **Github OAuth2 Settings** modal from the Appwrite console.

## Authenticating
You can use any of the Appwrite Client SDKs to authenticate users with their GitHub account.

### Web
When a user calls the [Create OAuth2 Session](https://appwrite.io/docs/client/account#accountCreateOAuth2Session) endpoint in your web app, they will be taken to GitHub's OAuth page to complete their login. 

After authenticating, they'll be redirected back to your app using either the `success` or `failure` URLs provided. To provide the best experience to your users, make sure to **implement and provide both routes** to prompt the user about successful and failed authentication attempts.

```js
import { Client, Account } from "appwrite";

const client = new Client();

const account = new Account(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('[PROJECT_ID]') // Your project ID
;

// Go to OAuth provider login page
account.createOAuth2Session('github', '[LINK_ON_SUCCESS]', '[LINK_ON_FAILURE]');
```

### Flutter
You can use OAuth in your Flutter application, but some platforms like Android and Apple requires additional configuration to enable the OAuth callback, so the your users can be redirected back to your app..

#### Android OAuth callback

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

#### Apple
In order to capture the Appwrite OAuth callback url, the following URL scheme needs to added to your `Info.plist`
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
        .setEndpoint('https://cloud.appwrite.io/v1') // YOUR API Endpoint
        .setProject('[PROJECT_ID]') // YOUR PROJECT ID
    ;
    
    // OAuth Login, for simplest implementation you can leave both success and
    // failure link empty so that Appwrite handles everything.
    await account.createOAuth2Session(
    provider: "github"
    );
        
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
    .setProject("[PROJECT_ID]") // Your project ID

val account = Account(client)

account.createOAuth2Session(
    provider = "github",
)
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
    .setProject("[PROJECT_ID]"); // Your project ID

Account account = new Account(client);

account.createOAuth2Session(
    "github",
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

In order to capture the Appwrite OAuth callback url, the following URL scheme needs to added to your `Info.plist`
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

To authenticate a user in your Apple application, use the [Create OAuth2 Session](https://appwrite.io/docs/client/account?sdk=apple-default#accountCreateOAuth2Session) endpoint.

```swift
import Appwrite

let client = Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("[PROJECT_ID]") // Your project ID

let account = Account(client)

let success = try await account.createOAuth2Session(
    provider: "github"
)

```

## Refreshing the OAuth2 session
OAuth2 sessions expire to protect from security risks. This means, OAuth2 sessions should be refreshed to keep the user authenticated. You can do this by calling the [Update OAuth Session](https://appwrite.io/docs/client/account#accountUpdateSession) endpoint when ever your user visits your app.

### Web
```js
import { Client, Account } from "appwrite";

const client = new Client();

const account = new Account(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('[PROJECT_ID]') // Your project ID
;

// Updates current session
const promise = account.updateSession('current');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
```

### Flutter

```dart
import 'package:appwrite/appwrite.dart';

void main() async {
    final client = new Client();
    final account = new Account(client);
    
    client
        .setEndpoint('https://cloud.appwrite.io/v1') // YOUR API Endpoint
        .setProject('[PROJECT_ID]') // YOUR PROJECT ID
    ;
    
    // OAuth Login, for simplest implementation you can leave both success and
    // failure link empty so that Appwrite handles everything.
    final future = account.updateSession('current');
    future.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    }); 
}
```

### Android (Kotlin)
```kotlin
import io.appwrite.Client
import io.appwrite.services.Account

val client = Client(context)
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("[PROJECT_ID]") // Your project ID

val account = Account(client)

val response = account.updateSession(
    sessionId = "current"
)
```
### Android (Java)
```java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Account;

Client client = new Client(context)
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("[PROJECT_ID]"); // Your project ID

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
``` swift
import Appwrite

let client = Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("[PROJECT_ID]") // Your project ID

let account = Account(client)

let session = try await account.updateSession(
    sessionId: "current"
)
```
## Provider Access Token

Provider access token is an authentication credential issued by GitHub once the user is successfully authenticated with GitHub. This access token allows you to make requests to the [GitHub API](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#3-use-the-access-token-to-access-the-api) on behalf of the user.

You can easily retrieve the provider access token of the authenticated user, by accessing the `providerAccessToken` property within the [session object](https://appwrite.io/docs/models/session).

### Web
To get this access token in your web application, use the [`account.getSession()`](https://appwrite.io/docs/client/account?sdk=web-default#accountGetSession) endpoint.
```javascript
import { Client, Account } from "appwrite";

const client = new Client();

const account = new Account(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your API endpoint
  .setProject("[PROJECT_ID]"); // Replace with your project ID

const promise = account.getSession("current");

promise.then(
  function (response) {
    // Get the provider access token
    const providerAccessToken = response.providerAccessToken;

    // Example Request to GitHub API
    fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${providerAccessToken}`,
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);  // GitHub API response data
      })
      .catch(function (error) {
        console.error(error);  // Error occurred while calling GitHub API
      });
  }
);
```
### Flutter (Dart)
To get this access token in your Flutter application, use the [`account.getSession()`](https://appwrite.io/docs/client/account?sdk=flutter-default#accountGetSession) endpoint.
```dart
import 'package:appwrite/appwrite.dart';
import 'package:http/http.dart' as http;

void main() async {
  var client = Client();
  var account = Account(client);

  client
      .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your API endpoint
      .setProject('[PROJECT_ID]') // Replace with your project ID
  ;

  Future result = account.getSession(
    sessionId: 'current',
  );

  result.then((response) {
    // Get the provider access token
    var providerAccessToken = response.providerAccessToken;

    // Example Request to GitHub API
    http.get(Uri.parse('https://api.github.com/user'), headers: {
      'Authorization': 'Bearer $providerAccessToken',
    }).then((response) {
      print(response.body); // GitHub API response data
    }).catchError((error) {
      print(error); // Error occurred while calling GitHub API
    });
  });
}
```

### Android (Kotlin)

If you are using `OkHttp` library for making HTTP requests,  you need to add the necessary dependencies in your project's `build.gradle` file. Here's an example of how to add the `OkHttp` dependency:

```groovy
dependencies {
    implementation 'com.squareup.okhttp3:okhttp:4.9.3'
}
```
To get this access token in your Android application, use the [`account.getSession()`](https://appwrite.io/docs/client/account?sdk=android-kotlin#accountGetSession) endpoint.

```kotlin
import android.os.Bundle
import androidx.activity.ComponentActivity
import io.appwrite.Client
import io.appwrite.services.Account
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import okhttp3.OkHttpClient
import okhttp3.Request
import java.io.IOException

class MainActivity : ComponentActivity() {
    private lateinit var client: Client

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        client = Client(applicationContext)
            .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your API endpoint
            .setProject("[PROJECT_ID]") // Replace with your project ID
        val account = Account(client)

        val myScope = CoroutineScope(Dispatchers.Main)

        myScope.launch {
            val response = account.getSession("current")
            // Get the provider access token
            val providerAccessToken = response.providerAccessToken

            val httpClient = OkHttpClient()
            val request = Request.Builder()
                .url("https://api.github.com/user") // GitHub API endpoint
                .header("Authorization", "Bearer $providerAccessToken")
                .build()

            httpClient.newCall(request).execute().use {
                if (!it.isSuccessful) {
                    throw IOException("Unexpected code $it") //Error occurred while calling GitHub API
                }
                println(it.body?.string()) // GitHub API response data
            }
        }
    }
}
```

### Android (Java)

If you are using `OkHttp` library for making HTTP requests,  you need to add the necessary dependencies in your project's `build.gradle` file. Here's an example of how to add the `OkHttp` dependency:

```groovy
dependencies {
    implementation 'com.squareup.okhttp3:okhttp:4.9.3'
}
```
To get this access token in your Android application, use the [`account.getSession()`](https://appwrite.io/docs/client/account?sdk=android-java#accountGetSession) endpoint.

```java
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import io.appwrite.Client;
import io.appwrite.services.Account;
import io.appwrite.exceptions.AppwriteException;
import io.appwrite.models.Session;
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import java.io.IOException;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Client client = new Client(getApplicationContext())
                .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your API endpoint
                .setProject("[PROJECT_ID]"); // Replace with your project ID

        Account account = new Account(client);

        account.getSession(new CoroutineCallback<>(new CoroutineCallback.Callback<Session>() {
            @Override
            public void onFailure(AppwriteException e) {
                e.printStackTrace();
            }

            @Override
            public void onCompleted(Session result) {
                // Get the provider access token
                String providerAccessToken = result.getProviderAccessToken();

                // Example Request to GitHub API
                OkHttpClient httpClient = new OkHttpClient();
                Request request = new Request.Builder()
                        .url("https://api.github.com/user")
                        .header("Authorization", "Bearer " + providerAccessToken)
                        .build();

                httpClient.newCall(request).enqueue(new Callback() {
                    @Override
                    public void onResponse(Call call, Response response) throws IOException {
                        String responseBody = response.body().string();
                        Log.d("Appwrite", responseBody); // GitHub API response data
                    }

                    @Override
                    public void onFailure(Call call, IOException e) {
                        e.printStackTrace();
                    }
                });
            }
        }));
    }
}
```


### iOS (Swift)
To get this access token in your Apple application, use the [`account.getSession()`](https://appwrite.io/docs/client/account?sdk=apple-default#accountGetSession) endpoint.
```swift
import Appwrite
import Foundation

func main() async throws {
    let client = Client()
        .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your API endpoint
        .setProject("[PROJECT_ID]") // Replace with your project ID

    let account = Account(client)

    let session = try await account.getSession(sessionId: "current")
    // Get the provider access token
    let providerAccessToken = session.providerAccessToken

    // Example Request to GitHub API
    let url = URL(string: "https://api.github.com/user")!
    var request = URLRequest(url: url)
    request.setValue("Bearer \(providerAccessToken)", forHTTPHeaderField: "Authorization")

    let (data, _) = try await URLSession.shared.data(for: request)

    if let json = try JSONSerialization.jsonObject(with: data, options: []) as? [String: Any] {
        print(json) // GitHub API response data
    }
}
```
