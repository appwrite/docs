# Documentation Guidelines

## 🚀 Contributing

## Before Proposing Additions

## Style Guidelines

### Code Examples

### Notices

### Screenshots

### Terminology
Appwrite has many services and features. Our word choices must be consistent across the many documentation pages to communicate clearly and precisely. 

#### General
| **Term**      | **Suggested Usage**                                                                                                                                                                                              |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Appwrite      | Written as "Appwrite" rather than "AppWrite" or "appwrite".                      |
| Projects      | Each Appwrite instance can have many Appwrite Projects. Use "Appwrite Projects" as a proper noun when referring to the concept, use project or projects when referring to specific projects.                      |
| Appwrite Dashboard | Refers to the the web GUI. Can be referred to as "dashboard" in short, when contextual confusion is not a problem. |
| Dashboard Users | Refers to users that are registered to have access to the Appwrite Dashboard. Not a proper noun, use as "a dashboard user" or "the dashboard user". Differenciate this clearly from users created through a Client SDK. |
| Client SDK    | Refers to SDKs used by Web, Flutter, Android, and Apple applications. Use as a proper noun, use "a Client SDK" or "the Client SDKs", not client-side SDKs.                                                        |
| Server SDK    | Refers to SDKs used by backend languages like Java, Node.js, or PHP. Use as a proper noun, use "a Server SDK" or "the Server SDKs", not server-side SDKs.                                                         |
| Adapter       | Refers to interfaces used to connect Appwrite with third party technologies. Adapters are found for OAuth, Databases, Storage, and error logging. When referring to adapters, use specific adapter names, such as "a Database adapter" or "a Storage adapter" to avoid confusion.|
| Developer     | Refers to Appwrite developers that use Appwrite to create applications.                                                                                                                                           |
| End User      | Refers to end users of applications with an Appwrite backend. This doesn't refer to developers that interact with Appwrite directly.   |
| Appwrite Instance | Refers to a single, self-hosted deployment of Appwrite. Use as "an Appwrite instance" or "Appwrite instances".|
| Application   | Refers to the application built by the Appwrite developer. Can be referred to as web app, mobile app, flutter app, etc. |
| Usage Stats   | Refers to the analytics collected for select services and displayed on the Appwrite Dashboard. |
| Audit Logs   | Refers to the trail of logs displayed for select services that show what changes have been made and who made them. |


#### Authentication
| **Term**               | **Suggested Usage**                                                                                                                                                                                                                                          |
|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authentication Service | The Authentication Service is composed of the Account API, Users API, and Teams API.                                                                                                                                                                              |
| Account API            | The Account API is an API under the Authentication Service that is used by Client SDKs. Avoid "Account Service" to avoid confusing developers that it is different from the "Users API" because it might imply they are separate services.                    |
| Users API              | The Users API is an API under the Authentication Service that is used by Server SDKs. Avoid "Users Service" to avoid confusing developers that it is accessing users different from the "Account API" because it might imply they are separate services.       |
| Teams API              | The Teams API is an API under the Authentication Service that is used to organize created accounts. Avoid "Teams Service", because it is not a stand alone service.                                                                                           |
| Authentication Method  | An authentication method refers to ways to authenticate a user like email, phone, and JWT. Not a proper noun, avoid terms like auth method or login method.                                                                                                   |
| OAuth2 Providers       | An OAuth2 provider refers to ways to authenticate users using accounts from service providers like GitHub or Google. Avoid using simplified terms like OAuth provider and provider to avoid confusion (there are multiple types of providers now). |
| Sign In/Log In      | Verb form of creating a user session. Use "create session" where relevant, and use sign in/log in to refer to actions on a frontend application.                            |
| Sign Out/Log Out    | Verb form of deleting a user session.  Use "delete session" where relevant, and use sign out/log out to refer to actions on a frontend application.                         |
| Login/Signin        | Noun form referring to the information used to sign in/log in. For example, "to log in, provide valid login information".                                                   |
| Register            | Use "create account" where relevant, and use register/sign up to refer to actions on a frontend application.                                                                |
| Roles            | Use "role" to describe the authentication status of a user request, such as `role:all`, `role:guest`, and `role:member`.|
| Membership            | Use "Membership" to express the relationship where a account belongs to a group or a team. Each memebership entity has defined team roles|
| Team Role                | Use "team role" to describe the arbitrary roles defined in each team memebership entity.|



#### Database

| **Term**          | **Suggested Usage**                                                                                                                                                                                  |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Databases Service | Write as the "Database Service" (as a proper noun). The Databases Service is referred to as "Databases Service" rather than "Database Service".                                                              |
| Database          | As of 0.15, the Databases Service allows you to create multiple, individual databases. Use "a database" or "databases" as uncapitalized nouns, which differentiates them from the "Database Service". |
| Collection        | Use "collection" as a noun (no capitalization), use as "a collection" or "collections".  Avoid using similar terms like "table".                                                                      |
| Document          | Use "document" as a noun (no capitalization), use as "a document" or "documents".  Avoid using similar terms like "entry" or "row".                                                                   |
| Attribute         | Use "attribute" as a noun (no capitalization), use as "a attribute" or "attributes".  Avoid using similar terms like "column" or "key/value".                                                         |
| Index             | Use "index" as a noun (no capitalization), use as "a index" or "indexes". Use "indexes" instead of indices in a DB related context.                                                                   |
| Permissions       | Use "Permissions" to describe the definition of read and write access to a resource. The definition is by User ID, Team ID, or Role. |
| Permission Level             | Use "Permission Level" to describe the scope of defined permissions. Permission can be defined per resource (for each file) or per group of resource (for each file in a bucket).|

#### Storage

| **Term**        | **Suggested Usage**                                                                                                                          |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Storage Service | Write as the "Storage Service" (as a proper noun).                                                                                            |
| Bucket          | Write as "a bucket" or "buckets", not a proper noun.                                                                                          |
| File            | Write as "a file" or "files", not a proper noun.                                                                                              |

#### Functions
| **Term**              | **Suggested Usage**                                                                                                                                                        |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Functions Service     | Write as the "Functions Service" (as a proper noun) rather than "Function Service" or "Cloud Functions".                                                                            |
| Function (individual) | When we mention a specific function and not the service as a whole, use "a function" or "functions" rather than "a cloud function" or "a Function".                                |
| Create                | When we "create" a function, it refers to the process of using "Add Function" on the dashboard or using `functions.create()` method. No code is uploaded.                         |
| Deploy/Deployment     | When we say we "deploy" a function or create a new deployment, this is when we upload code through the Create Deployment button or endpoint.                                |
| Activate Deployment   | When we enable a particular version of a function, we say we "activate" the deployment.                                                                                     |
| Runtimes              | When we refer to a runtime like `node.js 15.5`, call it a "Node.js runtime" or "function runtime". Avoid similar terms like "runtime environment" or "function environment" |
| Execution            | When a function is run, triggered by an event, or triggerd by a CRON job, an "execution" is created. In documentation, refer to "running" a function as "creating an execution".|
| Variables            | When a function is run, a set of variables are passed in through the `req` object. Some are generated by the runtime, some are defined under the settings of a function. These are referred to as "variables" rather than "environment variables".|
### Spell Checking
