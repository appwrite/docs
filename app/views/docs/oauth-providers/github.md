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

For Flutter make sure to follow [getting started for Flutter](https://appwrite.io/docs/getting-started-for-flutter) and setup configuration required for each platform to successfully authenticate user with OAuth2 providers.

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
    account.createOAuth2Session('github');
        
}
```

### Android (Kotlin)

### Android (Java)

### iOS (Swift)

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

### Android (Kotlin)

### Android (Java)

### iOS (Swift)
