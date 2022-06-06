# The Appwrite Docs 📝

The official https://appwrite.io/docs documentation source code.
## 🚀 Contributing
1. Clone the repository
2. Update, add, or fix current docs
3. Once content is ready, raise a PR

### Before Proposing Additions
Documentation is an integral part of Appwrite and follows the same philosophy of quick to get started, easy to grow. Before proposing additions to Appwrite's documentation, think about where these additions fit best.
- The **Getting Started** section helps a developer create their first Appwrite project and make their first requests so they can begin exploring Appwrite. Avoid adding unnecessary information to this section so a developer's first-impressions remains quick and smooth.
- The **Guides** section helps a developer get comfortable with individual Appwrite services. Guides are structured to walk a developer through features of an Appwrite service. The topics should be ordered by level of complexity, where complex topics are positioned later into a guide.
- The **REST API** section helps a developer understand details of individual endpoints. Additions to REST API documentation should remain focused on the API endpoint itself. Avoid adding information about related endpoints and services that are not integral to undestanding documented endpoint. Code example changes should be submitted to the [SDK Generator repo](https://github.com/appwrite/sdk-generator).
- The **Advanced** section helps a developer learn more complicated concepts like pagination or using permissions. If your proposed addition are not a core component of using a service or requires lengthy explanation, consider adding them to **Advanced**.
- **External Content** like blog posts and videos are used for documenting examples or integrating Appwrite with third party services. If your proposed addition involves content that are not focused on specific ways of using Appwrite, create a piece of external content. Add the content to the [Awesome Appwrite](https://github.com/appwrite/awesome-appwrite) catalog. The Appwrite team will also be glad to share the external content on Discord and on Appwrite's social accounts.

As a general note, if a behavior is excessively difficult to explain or feels awkwardly complex to document, there is a chance that it is also a design/product issue or bug. Consult Appwrite maintainers and open an issue.

### Content Guidelines
- Use proper title hierarchy (h1-h6) and valid HTML.
- All titles must follow the [Chicago style of headline capitalization](https://capitalizemytitle.com/style/Chicago/).
- External links (not https://appwrite.io) should be opened in a new tab (`target="_blank"`).
- External links should have an HTML attribute of `rel="noopener"`.
- All filenames should be dash-based and nested in a way that makes sense.
- Use proper punctuation. Sentences should be written in present tense with directive where possible. For example, use "click the cancel button to close the window" instead of "if you need to close the window, click the cancel button."
- Images should adhere to specifications indicated in the [Images](#images) section of this document.
- When creating new content or adjusting docs hierarchy, please consult the Appwrite team by opening a Github Issue in this repository.

#### Code Examples
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

#### Notes

Use the following HTML structure to add important notes inside your docs:

```html
<div class="notice">
  <h2>Important Message</h2>
  <p>Message content here.</p>
</div>
```

#### Images

Use the following HTML structure to add images. You can also add support for dark and light mode versions (recommended!). If no dark mode is provided, light mode will be the fallback. Don't forget to provide alternative text for user accessibility and a description for each image.

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

All screenshots should be in PNG format and taken from a 1290x848px viewport. Appwrite console screenshots should display the account name `Walter O'brian` with a profile image of WO. Do not include any sensitive data in images. All screenshot of the Appwrite dashboard should support light and dark mode.

## 🤘 Support 
At any point, if you are stuck, feel free to hop on our [Discord server](https://appwrite.io/discord) to ask questions, provide feedback, or seek collaboration!

## Follow Us
Join our growing community around the world! See our official [Blog](https://medium.com/appwrite-io). Follow us on [Twitter](https://twitter.com/appwrite), [Facebook Page](https://www.facebook.com/appwrite.io), [Facebook Group](https://www.facebook.com/groups/appwrite.developers/) , [DEV Community](https://dev.to/appwrite) or join our live [Discord server](https://discord.gg/GSeTUeA) for more help, ideas, and discussions.

