# Documentation Guidelines

## 🚀 Contributing

## Before Proposing Additions

## Style Guidelines

### Code Examples

### Notices

### Screenshots

### Terminology
Appwrite has many services and features. To avoid confusion, this section suggests a standard set of terms used across Appwrite documentation to describe features and concepts.
#### General
| **Term**      | **Suggested Usage.**                                                                                                                                                                                              |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Projects      | Each Appwrite instance can have many Appwrite Projects. Use "Appwrite Projects" as a proper noun when referring to the concept, use project or projects when referring to specific projects.                      |
| Console       | Refers to the the GUI. Can also be referred to as the "Appwrite Console" to distinguish from a Mac, Linux, or Windows machine's console.                                                                          |
| Console Users | Refers to users that are registered to have access to the Appwrite Console. Not a proper noun, use as "a console user" or "the console user". Differenciate this clearly from users created through a Client SDK. |
| Client SDK    | Refers to SDKs used by Web, Flutter, Android, and Apple applications. Use as a proper noun, use "a Client SDK" or "the Client SDKs", not client-side SDKs.                                                        |
| Server SDK    | Refers to SDKs used by backend languages like Java, Node.js, or PHP. Use as a proper noun, use "a Server SDK" or "the Server SDKs", not server-side SDKs.                                                         |
| Developer     | Refers to Appwrite developers that use Appwrite to create applications.                                                                                                                                           |
| End User      | Refers to end users of applications with an Appwrite backend. This doesn't refer to developers that interact with Appwrite directly.   |
| Appwrite Instance | Refers to a single, self-hosted deployment of Appwrite   |
| Application   | Refers to the application built by the Appwrite developer. Can be referred to as web app, mobile app, flutter app, etc. |
#### Authentication
| **Term**               | **Suggested Usage.**                                                                                                                                                                                                                                          |
|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authentication Service | The Authentication service encompases the Account API, Users API, and Teams API.                                                                                                                                                                              |
| Account API            | The Account API is an API under the Authentication service that is used by Client SDKs. Avoid "Account service" to avoid confusing developers that it is different from the "Users API" because it might imply they are separate services.                    |
| Users API              | The User API is an API under the Authentication service that is used by Server SDKs. Avoid "Users service" to avoid confusing developers that it is accessing users different from the "Account API" because it might imply they are separate services.       |
| Teams API              | The Teams API is an API under the Authentication service that is used to organize created accounts. Avoid "Teams service", because it is not a stand alone service.                                                                                           |
| Authentication Method  | An authentication method refers to ways to authenticate a user like email, phone, and JWT. Not a proper noun, avoid terms like auth method or login method.                                                                                                   |
| OAuth2 Providers       | An OAuth2 provider refers to ways to authenticate users using accounts from service providers like AWS, Facebook, or Microsoft. Avoid using simplified terms like OAuth provider and provider to avoid confusion (there are multiple types of providers now). |

#### Database

### Spell Checking
