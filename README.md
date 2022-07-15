# Documentation Guidelines

## 🚀 Contributing

## Before Proposing Additions

## Style Guidelines

### Code Examples

### Notices

### Screenshots

### Terminology
Appwrite has many services and features with many ways to express the same concepts. To avoid confusion, this section suggests a standard set of terms used across Appwrite documentation to describe features and concepts.
#### General
| **Term**      | **Suggested Usage.**                                                                                                                                                                                              |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Appwrite      | Written as "Appwrite" not "AppWrite" or "appwrite".                      |
| Projects      | Each Appwrite instance can have many Appwrite Projects. Use "Appwrite Projects" as a proper noun when referring to the concept, use project or projects when referring to specific projects.                      |
| Console       | Refers to the the GUI. Can also be referred to as the "Appwrite Console" to distinguish from a Mac, Linux, or Windows machine's console.                                                                          |
| Console Users | Refers to users that are registered to have access to the Appwrite Console. Not a proper noun, use as "a console user" or "the console user". Differenciate this clearly from users created through a Client SDK. |
| Client SDK    | Refers to SDKs used by Web, Flutter, Android, and Apple applications. Use as a proper noun, use "a Client SDK" or "the Client SDKs", not client-side SDKs.                                                        |
| Server SDK    | Refers to SDKs used by backend languages like Java, Node.js, or PHP. Use as a proper noun, use "a Server SDK" or "the Server SDKs", not server-side SDKs.                                                         |
| Adaptor       | Refers to interfaces used to connect Appwrite with third party technologies. Adaptors are found for OAuth, Databases, Storage, and error logging. When referring to adaptors, use specific adaptor names, such as "an OAuth adaptor" or "a Storage adaptor" to avoid confusion.|
| Developer     | Refers to Appwrite developers that use Appwrite to create applications.                                                                                                                                           |
| End User      | Refers to end users of applications with an Appwrite backend. This doesn't refer to developers that interact with Appwrite directly.   |
| Appwrite Cluster | Refers to a single, self-hosted deployment of Appwrite. Use as "an Appwrite Cluster" or "Appwrite Clusters".|
| Application   | Refers to the application built by the Appwrite developer. Can be referred to as web app, mobile app, flutter app, etc. |
| Method                | Refers to SDK methods like the method `account.get()`. This helps differentiate SDK methods and Appwite Functions in written language.                                                                                                                             |
| Parameters            | Refers to parameters in an SDK method or API definition. Use in cases where we speak about needs, such as "takes parameters x, y, and z" or "requires parameters x and y".                                                                                         |
| Arguments             | Refers to arguments passed to CLI, SDK method, or REST API. Use when the argument has a concrete value and when we refer to invoking a method, such as "pass in arguments x and y, or "call account.create() with the argument "unique()" to generate a random id. |

#### Authentication
| **Term**               | **Suggested Usage.**                                                                                                                                                                                                                                          |
|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authentication Service | The Authentication service encompases the Account API, Users API, and Teams API.                                                                                                                                                                              |
| Account API            | The Account API is an API under the Authentication service that is used by Client SDKs. Avoid "Account service" to avoid confusing developers that it is different from the "Users API" because it might imply they are separate services.                    |
| Users API              | The User API is an API under the Authentication service that is used by Server SDKs. Avoid "Users service" to avoid confusing developers that it is accessing users different from the "Account API" because it might imply they are separate services.       |
| Teams API              | The Teams API is an API under the Authentication service that is used to organize created accounts. Avoid "Teams service", because it is not a stand alone service.                                                                                           |
| Authentication Method  | An authentication method refers to ways to authenticate a user like email, phone, and JWT. Not a proper noun, avoid terms like auth method or login method.                                                                                                   |
| OAuth2 Providers       | An OAuth2 provider refers to ways to authenticate users using accounts from service providers like AWS, Facebook, or Microsoft. Avoid using simplified terms like OAuth provider and provider to avoid confusion (there are multiple types of providers now). |
| Sign In/Log In      | Verb form of creating a user session. Use "create session" where relevant, and use sign in/log in to refer to actions on a frontend application.                            |
| Sign Out/Log Out    | Verb form of deleting a user session.  Use "delete session" where relevant, and use sign out/log out to refer to actions on a frontend application.                         |
| Login/Signin        | Noun form referring to the information used to sign in/log in. For example, "to log in, provide valid login information".                                                   |
| Register            | Use "create account" where relevant, and use register/sign up to refer to actions on a frontend application.                                                                |
 


#### Database

| **Term**          | **Suggested Usage.**                                                                                                                                                                                  |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Databases Service | Write as the "Database service" (as a proper noun). The Databases service is referred to as "Databases service", not "Database service".                                                              |
| Database          | As of 0.15, the Databases service allows you to create multiple, individual databases. Use "a database" or "databases" as uncapitalized nouns, which differentiates them from the "Database service". |
| Collection        | Use "collection" as a noun (no capitalization), use as "a collection" or "collections".  Avoid using similar terms like "table".                                                                      |
| Document          | Use "document" as a noun (no capitalization), use as "a document" or "documents".  Avoid using similar terms like "entry" or "row".                                                                   |
| Attribute         | Use "attribute" as a noun (no capitalization), use as "a attribute" or "attributes".  Avoid using similar terms like "column" or "key/value".                                                         |
| Index             | Use "index" as a noun (no capitalization), use as "a index" or "indexes". Use "indexes" instead of indices in a DB related context.                                                                   |

#### Storage

| **Term**        | **Suggested Usage.**                                                                                                                          |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Storage Service | Write as the "Storage service" (as a proper noun).                                                                                            |
| Bucket          | Write as "a bucket" or "buckets", not a proper noun.                                                                                          |
| File            | Write as "a file" or "files", not a proper noun.                                                                                              |

#### Functions
| **Term**              | **Suggested Usage.**                                                                                                                                                        |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Functions Service     | Write as the "Functions service"(as a proper noun). Not "Function service" or "Cloud Functions".                                                                            |
| Function (individual) | When we mention a specific function and not the service as a whole, use "a function" or "functions". Not "a cloud function" or "a Function".                                |
| Create                | When we "create" a function, it refers to the process of using "Add Function" in console or using `functions.create()` method. No code is uploaded.                         |
| Deploy/Deployment     | When we say we "deploy" a function or create a new deployment, this is when we upload code through the Create Deployment button or endpoint.                                |
| Activate Deployment   | When we enable a particular version of a function, we say we "activate" the deployment.                                                                                     |
| Runtimes              | When we refer to a runtime like `node.js 15.5`, call it a "Node.js runtime" or "function runtime". Avoid similar terms like "runtime environment" or "function environment" |
| Execution            | When a function is run, triggered by an event, or triggerd by a CRON job, an "execution" is created. In documentation, refer to "running" a function as "creating an execution".|
### Spell Checking
