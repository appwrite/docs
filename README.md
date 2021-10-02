# The Appwrite Docs 📝

The official https://appwrite.io/docs documentation source code.
## 🚀 Contributing
1. Clone the repository
2. Update, add, or fix current docs
3. Once content is ready, raise a PR

### Content Guidelines
- Use proper title hierarchy (h1-h6) and valid HTML
- External links (not https://appwrite.io) should be opened in a new tab (`target="_blank"`)
- External links should have an HTML attribute of `rel="noopener"`
- All filenames should be dash-based and nested in a way that makes sense
- All images should be in PNG format and 2600x1400px. Do not include any sensitive data in images. All screenshot of the Appwrite dashboard should support light and dark mode.
- When creating new content or adjusting docs hierarchy, please consult the Appwrite team by opening a Github Issue in this repository

#### Code Examples

Use the following HTML structure to present code examples:

```html
<div class="ide margin-top-small" data-lang="ruby" data-lang-label="Ruby SDK">
    <pre class="line-numbers"><code class="prism language-ruby" data-prism>#ruby code here...</code></pre>
</div>
```

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

## 🤘 Support 
At any point, if you are stuck, feel free to hop on our [Discord server](https://appwrite.io/discord) to ask questions or seek mentorship!

## Follow Us
Join our growing community around the world! See our official [Blog](https://medium.com/appwrite-io). Follow us on [Twitter](https://twitter.com/appwrite_io), [Facebook Page](https://www.facebook.com/appwrite.io), [Facebook Group](https://www.facebook.com/groups/appwrite.developers/) or join our live [Discord server](https://discord.gg/GSeTUeA) for more help, ideas, and discussions.

