Links are found in nearly all web pages. Links allow users to click their way from page to page.

### HTML Links - Hyperlinks

HTML links are hyperlinks.

You can click on a link and jump to another document.

When you move the mouse over a link, the mouse arrow will turn into a little hand.

#### Note:

A link does not have to be text. A link can be an image or any other HTML element!

### HTML Links - Syntax

The HTML` <a>` tag defines a hyperlink. It has the following syntax:

```
<a href="url">link text</a>
```

The most important attribute of the `<a>` element is the href attribute, which indicates the link's destination.

The link text is the part that will be visible to the reader.

Clicking on the link text, will send the reader to the specified URL address.

#### Example

This example shows how to create a link to Github.com:

```
<a href="https://www.github.com/">Visit github.com!</a>
```

![link](\img\links.PNG)

By default, links will appear as follows in all browsers:

An unvisited link is underlined and blue
A visited link is underlined and purple
An active link is underlined and red
Tip: Links can of course be styled with CSS, to get another look!

### HTML Links - The target Attribute

By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link.

The target attribute specifies where to open the linked document.

The target attribute can have one of the following values:

- \_self - Default. Opens the document in the same window/tab as it was clicked
- \_blank - Opens the document in a new window or tab
- \_parent - Opens the document in the parent frame
- \_top - Opens the document in the full body of the window
  Example
  Use target="\_blank" to open the linked document in a new browser window or tab:

```
<a href="https://www.github.com/" target="_blank">Visit github!</a>
```

![link](\img/target-attribute.PNG)

### Absolute URLs vs. Relative URLs

Both examples above are using an absolute URL (a full web address) in the href attribute.

A local link (a link to a page within the same website) is specified with a relative URL (without the "https://www" part):

Example

```
<h2>Absolute URLs</h2>
<p><a href="https://www.github.org/">github</a></p>
<p><a href="https://www.google.com/">Google</a></p>

<h2>Relative URLs</h2>
<p><a href="html_images.asp">HTML Images</a></p>
<p><a href="/css/default.asp">CSS Tutorial</a></p>
```

![link](\img/absolute-url.PNG)

### HTML Links - Use an Image as a Link

To use an image as a link, just put the `<img>` tag inside the `<a>` tag:

#### Example

```
<a href="default.asp">
<img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>
```

![link](\img/image-link.PNG)

Link to an Email Address
Use mailto: inside the href attribute to create a link that opens the user's email program (to let them send a new email):

Example

```
<a href="mailto:someone@example.com">Send email</a>
```

![link](\img/email-link.PNG)

Button as a Link
To use an HTML button as a link, you have to add some JavaScript code.

JavaScript allows you to specify what happens at certain events, such as a click of a button:

Example

```
<button onclick="document.location='default.asp'">HTML Tutorial</button>
```

![link](\img/button-links.PNG)

### Link Titles

The title attribute specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.

Example

```
<a href="https://www.github.com" title="Go to github">Visit our Repository</a>
```

![link](\img/link-titles.PNG)

Summary

- Use the `<a>` element to define a link
- Use the href attribute to define the link address
- Use the target attribute to define where to open the linked document
- Use the `<img>` element (inside `<a>`) to use an image as a link
- Use the mailto: scheme inside the href attribute to create a link that opens the user's email program
