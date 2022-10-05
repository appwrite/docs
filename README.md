# Documentation Guidelines
The official https://appwrite.io/docs documentation source code.

## 🚀 Contributing
1. Clone the repository
2. Update, add, or fix current docs
3. Once content is ready, raise a PR

## Before Proposing Additions
Documentation is an integral part of Appwrite and follows the same philosophy of quick to get started, easy to grow. Before proposing additions to Appwrite's documentation, think about where these additions fit best.
- The **Getting Started** section helps a developer create their first Appwrite project and make their first requests so they can begin exploring Appwrite. Avoid adding unnecessary information to this section so a developer's first-impressions remains quick and smooth.
- The **Guides** section helps a developer get comfortable with individual Appwrite services. Guides are structured to walk a developer through features of an Appwrite service. The topics should be ordered by level of complexity, where complex topics are positioned later into a guide. 
- The **REST API** section helps a developer understand details of individual endpoints. Additions to REST API documentation should remain focused on the API endpoint itself. Avoid adding information about related endpoints and services that are not integral to undestanding documented endpoint. Code example changes should be submitted to the [SDK Generator repo](https://github.com/appwrite/sdk-generator) and endpoint descriptions can be found in the [Appwrite repo](https://github.com/appwrite/appwrite).
- The **Advanced** section helps a developer learn more complicated concepts like pagination or using permissions. If your proposed addition are not a core component of using a service or requires lengthy explanation, consider adding them to **Advanced**.
- **External Content** like blog posts and videos are used for documenting examples or integrating Appwrite with third party services. If your proposed addition involves content that is not focused on specific ways of using Appwrite, create a piece of external content and add the content to the [Awesome Appwrite](https://github.com/appwrite/awesome-appwrite) catalog. The Appwrite team will also be glad to share the external content on Discord and Appwrite's social accounts.

As a general note, if a behavior is excessively difficult to explain or feels awkwardly complex to document, there is a chance that it is also a design/product issue or bug. If that's the case, consult Appwrite maintainers and [open an issue](https://github.com/appwrite/appwrite/issues/new/choose).

## Style Guidelines
When contributing to Appwrite's documentation, use these guidelines to format your contributions.
### Page Hierarchy
Titles and subtitles should follow a logical hierarchy (h1-h6) using the [AP style of headline capitalization](https://capitalizemytitle.com/style/AP/). Page headings and subheadings should be hyperlinked for ease of reference and have an appropriate ID. For examples:
```html
<h2><a href="/docs/command-line#installation" id="installation">Installation</a></h2>
```

### Naming Files
File names should reflect it's content. In general, use dash separated file names that reference the title of the page. For example "Documentation Guidelines" could be "documentation-guidelines".

### Internal and External Links
Internal links that direct to any link under [https://appwrite.io](/docs/command-line#installation) should be relative and precise. For example, when referencing the Appwrite Documentation page, use the `<a href="/docs">Documentation</a>`. When referencing a specific section of a page, link to the section heading where possible. For example `<a href="/docs/databases#databases">Create Your Databases</a>`.

External links (not https://appwrite.io) should be opened in a new tab (`target="_blank"`) and have an HTML attribute of `rel="noopener"`.

Links that are not inline:

```html
<p>
<a href="/docs/environment-variables"><i class="icon-angle-circled-right"></i>Learn more about environment variables</a>
</p>
```

### Referencing UI Elements
When referencing buttons, tabs, and other interactive UI elements, use the full text found on the UI element in bold. For example **Create Project** or **Add Platform**.

When referencing example copy text that appears or could appear on a piece of UI, use double quotes. For example, for each function listed in the **Functions** tab, you will see the runtime used by that function, such as "Dart 2.16" or "Node.js 16.0".

### Verbatim References Inline
Monospace font inline through the use of `<code></code>` should be used as a visual hint when something is referenced verbatim (literal quote). Anything that can be copied or searched for in code in the exact form presented should be monospace. Common examples are file names, urls, numbers, ids, code, and emails.

When using generic strings, use double quotes `"`. Double quotes express a string in **all** languages, but single quotes `'` in some languages like Java and C++ represent a **char**. This makes them difficult to copy and paste.

### Procedural Instructions
When describing steps to do something, especially UI workflows, use an ordered list. For example:

```html
<ol class="margin-top margin-bottom-large text-size-normal">
    <li>Create a script to backups and restore your MariaDB Appwrite schema. Note that trying to backup MariaDB using a docker volume backup can result in a corrupted copy of your data. It is recommended to use MariaDB or MySQL built-in tools for this.</li>
    <li>Create a script to backups and restore your InfluxDB stats. If you don’t care much about your server stats, you can skip this.</li>
    <li>Create a script to backup Appwrite storage volume. There are many online resources explaining different ways to backup a docker volume. When running on multiple servers, it is very recommended to use an attachable storage point. Some cloud providers offer integrated backups to such attachable mount like GCP, AWS, DigitalOcean, and the list continues.</li>
</ol>
```

### Tables
Consider using a table instead of a list when listing SDK methods, integrations, SDKs, etc. Tables have a stronger visual representation and are easier to read than an unordered list. 

Here's an example of a table:
``` html
<table cellspacing="0" cellpadding="0" border="0" class="full margin-bottom-large text-size-small vertical">
    <thead>
        <tr>
            <th style="width: 80px"></th>
            <th style="width: 180px">Provider</th>
            <th style="width: 120px"></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <img src="/images-ee/one-click/digitalocean.svg" alt="Logo" height="30" class="force-light sdk-logo margin-start margin-end" />
                <img src="/images-ee/one-click/dark/digitalocean.svg" alt="Logo" height="30" class="force-dark sdk-logo margin-start margin-end" />
            </td>
            <td>
                DigitalOcean
            </td>
            <td>
                <a href="https://marketplace.digitalocean.com/apps/appwrite" target="_blank" rel="noopener">Click to Install</a>
            </td>
        </tr>        
        <tr>
            <td>
                <img src="/images-ee/one-click/gitpod.svg" alt="Logo" height="30" class="force-light sdk-logo margin-start margin-end" />
                <img src="/images-ee/one-click/dark/gitpod.svg" alt="Logo" height="30" class="force-dark sdk-logo margin-start margin-end" />
            </td>
            <td>
                Gitpod
            </td>
            <td>
                <a href="https://gitpod.io/#https://github.com/appwrite/integration-for-gitpod" target="_blank" rel="noopener">Click to Install</a>
            </td>
        </tr>
    </tbody>
</table>
```

### Code Examples

Use the following HTML structure to present code examples:

```html
<div class="ide margin-top-small" data-lang="ruby" data-lang-label="Ruby SDK">
    <pre class="line-numbers"><code class="prism language-ruby" data-prism>#ruby code here...</code></pre>
</div>
```

Code examples should require minimum modifications to be executed where possible (working and self-contained).

The `data-lang` attribute changes the top right label pill's color. The `data-lang-label` attribute changes the top right label pill's text.

The supported `data-lang` attribute values can be found in the `ide.less` [style file](https://github.com/appwrite/appwrite/blob/1a0f740459fde58dc41112861f47bc06d1ae5c4c/public/styles/ide.less#L30).

Appwrite uses Prism to highlight code examples. The `class` attribute of the `code` html tag changes how Prism highlights code, The format is `language-<alias>`.

As of writing this, these are the supported languages and their Prism alias for code examples:

|Language           |Prism Alias                                      |
|-------------------|-------------------------------------------------|
| Markup            | markup, html, xml, svg, mathml, ssml, atom, rss |
| CSS               | css                                             |
| CLike             | clike                                           |
| JavaScript        | javascript, js                                  |
| Bash              | bash, shell                                     |
| C#                | csharp, cs, dotnet                              |
| Dart              | dart                                            |
| Go                | go                                              |
| GraphQL           | graphql                                         |
| HTTP              | http                                            |
| Java              | java                                            |
| JSON              | json                                            |
| Kotlin            | kotlin, kt, kts                                 |
| Markup-templating | markup-templating                               |
| PHP               | php                                             |
| Powershell        | powershell                                      |
| Python            | python, py                                      |
| Ruby              | ruby                                            |
| Swift             | swift                                           |
| TypeScript        | typescript, ts                                  |


For showing examples in multiple languages use the list structure:

```html
<ul class="phases clear" data-ui-phases>
    <li>
        <h3>Node.js</h3>
        <div class="ide margin-top-small" data-lang="nodejs" data-lang-label="Node.js SDK">
            <pre class="line-numbers"><code class="prism language-javascript" data-prism>// node code here...</code></pre>
        </div>
    </li>
    <li>
        <h3>PHP</h3>

        <div class="ide margin-top-small" data-lang="php" data-lang-label="PHP SDK">
            <pre class="line-numbers"><code class="prism language-php" data-prism>//php code here..</code></pre>
        </div>
    </li>
</ul>
```

For multi-line code examples, the code must be pasted in verbatim between the `<code>` tags.

The following will render correctly:
```html
<div class="ide">
    <pre class="line-numbers"><code class="prism language-http" data-prism>HTTP/1.1 429
Date: Tue, 20 Aug 2013 14:50:41 GMT
Status: 429
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1377013266
{
    "message": "Too many requests",
    "code": 429
}</code></pre>
</div>
```

The following will have unnecessary line-breaks and indentations. 
```html
<div class="ide">
    <pre class="line-numbers"><code class="prism language-http" data-prism>
        HTTP/1.1 429
        Date: Tue, 20 Aug 2013 14:50:41 GMT
        Status: 429
        X-RateLimit-Limit: 60
        X-RateLimit-Remaining: 0
        X-RateLimit-Reset: 1377013266
        {
            "message": "Too many requests",
            "code": 429
        }
    </code></pre>
</div>
```

> Don't forget to use proper indenting for all code examples. The indenting of the code examples should be independent from the indentation of the surrounding HTML tags.

For referencing code inline, especially when the code is a non-executable snippet, use spans with `class=tag`. For example, use the method <span class="tag">listDocuments()</span>.

#### Escaping >, <, and &
Some characters are reserved in HTML and PTHML files, such as `>`, `<`, and `&`. These can be expressed using the following:

- `&` becomes `&amp;`
- `<` becomes `&lt;`
- `>` becomes `&gt;`

#### Placeholder Values
- Be consistent with placeholder values for name type fields across languages. For example, all examples for the Databases query guide should use the database `catalogue` and collection `movies`.
- Where applicable, use `"unique()"` for ids that can be auto-generated.
- Use a concise value like `"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ..."` for hash values like long IDs and API keys.
- Use a placeholder for hostnames like `"https://[HOSTNAME_OR_IP]/v1"` in code examples, but be consistent.
- Use a known generic name as a place holder like `"John Doe"`, avoid real name and celeberty names.
- Use generic email passwords as placeholders like `"email@example.com", "password"`.
- Use a relative file name that is context appropriate like `"img/file.png"`.
- Where possible, use names for teams, collections, databases, buckets, and other resources that are contextually appropriate and hint at the resource type. This is especially true for code examples in guides like `const result = storage.getFilePreview('image_bucket', 'smiling_penguin.png', '240px', '180px');`, where the parameters passed in are not described.
- Use sensible variable names :)

### Notices
Use notices to point out important information, especially those relevant for first time readers. 

Use the following HTML structure to add important notes inside your docs:

```html
<div class="notice">
  <h2>Important Message</h2>
  <p>Message content here.</p>
</div>
```

### Screenshots
Use the following HTML structure to add images. You can also add support for dark and light mode versions. If no dark mode is provided, light mode will be the fallback. Don't forget to provide alternative text for user accessibility and a description for each image.

```php
<?php
$image = new View(__DIR__.'/../general/image.phtml');
    echo $image
        ->setParam('srcLight', '/images-ee/docs/functions-light.png')
        ->setParam('srcDark', '/images-ee/docs/functions-dark.png')
        ->setParam('alt', 'Function settings page.')
        ->setParam('description', 'Function settings page.')
        ->render();
?>
```

All screenshots should be in PNG format and taken from a 1290 x 848 px viewport. Appwrite dashboard screenshots should display the account name `Walter O'Brian` with a profile image of WO. Do not include any sensitive data in images. Do not include any sensitive data in images.

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
| Client Integration    | Refers to Appwrite integrations in Web, Flutter, Android, and Apple applications using session authentication.                           |
| Server Integration    | Refers to Appwrite integrations on the backend using API authentication. Avoid the phrasing "Admin Mode" and focus on the difference of session vs API based authentication.                                                         |
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

#### Databases

| **Term**          | **Suggested Usage**                                                                                                                                                                                  |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Databases Service | Write as the "Database Service" (as a proper noun). The Databases Service is referred to as "Databases Service" rather than "Database Service".                                                              |
| Database          | As of 0.15, the Databases Service allows you to create multiple, individual databases. Use "a database" or "databases" as uncapitalized nouns, which differentiates them from the "Database Service". |
| Collection        | Use "collection" as a noun (no capitalization), use as "a collection" or "collections".  Avoid using similar terms like "table".                                                                      |
| Document          | Use "document" as a noun (no capitalization), use as "a document" or "documents".  Avoid using similar terms like "entry" or "row".                                                                   |
| Attribute         | Use "attribute" as a noun (no capitalization), use as "a attribute" or "attributes".  Avoid using similar terms like "column" or "key/value".                                                         |
| Index             | Use "index" as a noun (no capitalization), use as "a index" or "indexes". Use "indexes" instead of indices in a DB related context.                                                                   |
| Query Methods            | These are the different methods provided by Appwrite SDKs to compose queries. For example `Query.lessThanEqual("score", 10)` or `Query.orderDesc("attribute")` are query methods.|

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

#### Permissions
| **Term**              | **Suggested Usage**                                                                                                                                                        |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Appwrite Resource       | An Appwrite resource can be a database, collection, document, bucket, or file. Each resource has its own set of permissions to define who can interact with it.  |
| Permissions       | Use "Permissions" to describe granted access to a resource in session based authentication. This encapsulates permission level, role, and type. For example: `Permission.update(Role.team("writers"))`. |
| Permission Level             | Use "Permission Level" to describe the scope of defined permissions. Permission can be defined per resource (for each file) or per group of resource (for each file in a bucket).|
| Permission Types            | Use "permission types" to describes how a resource can be accessed(read, create, update, delete, etc).|
| Permission Roles            | Use "role" to describe to describe who can access a resource (anyone, a registered user, a team, etc).|
| Membership            | Use "Membership" to express the relationship where a account belongs to a group or a team. Each memebership entity has defined team roles|
| Team Role                | Use "team role" to describe the arbitrary roles defined in each team memebership entity.|
| Scope                | Use "Scope" to describe which resources can be accessed. This is mainly used to describe concepts in API authentication. |
| API Key                | Used for authentication in Server Integrations. API keys ignore permission roles and types defined, but are restricted by scope when the keys are created. |


### Grammar and Spell Checking
Run edited pieces of writing through a spell and grammar checking service like Grammarly before contributing changes. Appwrite's documentation follows the [Associated Press (AP) Stylebook](https://www.apstylebook.com/) for grammar and punctuation related guidelines. Appwrite follows American spelling, refer to [Mariam-Webster](https://www.merriam-webster.com/) when unsure of the correct spelling.

We suggest the following free software resources to assist your writing process:
- [The Hemingway App](https://hemingwayapp.com/)
- [Grammarly](https://www.grammarly.com/)
- [AP style of headline capitalization](https://capitalizemytitle.com/style/AP/)
