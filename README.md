# The Appwrite Docs 📝

The official https://appwrite.io/docs documentation source code.

## 🚀 Contributing
1. Clone the repository
2. Update, add, or fix current docs
3. Once content is ready, raise a PR
   
## Before Proposing Additions
Documentation is an integral part of Appwrite and follows the same philosophy of quick to get started, easy to grow. Before proposing additions to Appwrite's documentation, think about where these additions fit best.
- The **Getting Started** section helps a developer create their first Appwrite project and make their first requests so they can begin exploring Appwrite. Avoid adding unnecessary information to this section so a developer's first-impressions remains quick and smooth.
- The **Guides** section helps a developer get comfortable with individual Appwrite services. Guides are structured to walk a developer through features of an Appwrite service. The topics should be ordered by level of complexity, where complex topics are positioned later into a guide.
- The **REST API** section helps a developer understand details of individual endpoints. Additions to REST API documentation should remain focused on the API endpoint itself. Avoid adding information about related endpoints and services that are not integral to undestanding documented endpoint. Code example changes should be submitted to the [SDK Generator repo](https://github.com/appwrite/sdk-generator).
- The **Advanced** section helps a developer learn more complicated concepts like pagination or using permissions. If your proposed addition are not a core component of using a service or requires lengthy explanation, consider adding them to **Advanced**.
- **External Content** like blog posts and videos are used for documenting examples or integrating Appwrite with third party services. If your proposed addition involves content that are not focused on specific ways of using Appwrite, create a piece of external content. Add the content to the [Awesome Appwrite](https://github.com/appwrite/awesome-appwrite) catalog. The Appwrite team will also be glad to share the external content on Discord and on Appwrite's social accounts.

As a general note, if a behavior is excessively difficult to explain or feels awkwardly complex to document, there is a chance that it is also a design/product issue or bug. Consult Appwrite maintainers and open an issue.

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
### Referencing UI Elements
When referencing buttons, tabs, and other interactive UI elements, use the full text found on the UI element in bold. For example **Create Project** or **Add Platform**.

When referencing example copy text that appears or could appear on a piece of UI, use double quotes. For example, for each function listed in the **Functions** tab, you will see the runtime used by that function, such as "Dart 2.16" or "Node.js 16.0".

### Referencing File Paths, URLs, and IDs
When referencing file paths, URLs, IDs, or any text appropriate for monospace representation, use a span element with `class=tag` inline. For example, `<span class="tag">appwrite.json</span>` or `<span class="tag">https://[HOSTNAME_OR_IP]/v1</span>`.

### Code Examples

Use the following HTML structure to present code examples:

```html
<div class="ide margin-top-small" data-lang="ruby" data-lang-label="Ruby SDK">
    <pre class="line-numbers"><code class="prism language-ruby" data-prism>#ruby code here...</code></pre>
</div>
```

Code examples should require minimum modifications to be executed where possible.

As of writing this, these are the supported languages for code examples:

* Markup
* CSS
* CLike
* JavaScript
* Bash
* C#
* Dart
* Go
* GraphQL
* HTTP
* Java
* JSON
* Kotlin
* Markup-templating
* PHP
* Powershell
* Python
* Ruby
* Swift
* TypeScript
* YAML

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

> Don't forget to use proper indenting for all code examples. The indenting of the code examples should be independent from the indentation of the surrounding HTML tags.

For referencing code inline, especially when the code is a non-executable snippet, use spans with `class=tag`. For example, use the method <span class="tag">listDocuments()</span>.

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

All screenshots should be in PNG format and taken from a 1290 x 848 px viewport. Appwrite console screenshots should display the account name `Walter O'Brian` with a profile image of WO. Do not include any sensitive data in images. All screenshots of the Appwrite dashboard should support light and dark mode.

Do not include any sensitive data in images. All screenshot of the Appwrite dashboard should support light and dark mode.
### Terminology

### Grammar and Spell Checking
Run edited pieces of writing through a spell and grammar checking service like Grammarly before contributing changes. Appwrite's documentation follows the [Associated Press (AP) Stylebook](https://www.apstylebook.com/) for grammar and punctuation related guidelines. Appwrite follows American spelling, refer to [Mariam-Webster](https://www.merriam-webster.com/) when unsure of the correct spelling.

We suggest the following free software resources to assist your writing process:
- [The Hemingway App](https://hemingwayapp.com/)
- [Grammarly](https://www.grammarly.com/)
- [AP style of headline capitalization](https://capitalizemytitle.com/style/AP/)