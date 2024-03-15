---
sidebar_position: 1
---

# HTML Introduction

In this documentation I will be talking about html, a standard markup language for creating web pages.

## What is HTML?

HTML stands for Hypertext Markup Language

HTML is the standard markup language for creating Web pages

HTML describes the structure of a Web page

HTML consists of a series of elements

HTML elements tell the browser how to display the content

HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.

## A Simple HTML Document

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```

Example explained

The `<!DOCTYPE html>` declaration defines that this document is an HTML5 document

The `<html>` element is the root element of an HTML page

The `<head>` element contains meta information about the HTML page

The `<title>` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)

The `<body>` element defines the main part of the document. It holds all the things you can see, like headings, paragraphs, images, links, tables, and lists.

The `<h1>` element defines a large heading

The `<p>` element defines a paragraph

you will see a preview on browser when open with browser of your choice. which will be talk about in the editor to use [Editor to use](/docs/tutorial-basics/Editors-to-use) page.

![First Heading](\img\class-attri.PNG)

<!-- ![vscode screenshot](/static/img/first-heading.PNG) -->

## What is an HTML Element?

An HTML element is defined by a start tag, some content, and an end tag:

```bash
<tagname> Content goes here... </tagname>
The HTML element is everything from the start tag to the end tag:

<h1>My First Heading</h1>
<p>My first paragraph.</p>
```

| start tag | Element content  | End tag   |
| --------- | ---------------- | --------- |
| `<h1>  `  | My first heading | `</h1>  ` |
| `<p>  `   | Title            | `<p>  `   |
| `<br>  `  | Title            | none      |

#### Note:

Some HTML elements have no content (like the `<br>  ` element). These elements are termed as empty elements. They lack an end tag!

<!-- 02866657 -->
