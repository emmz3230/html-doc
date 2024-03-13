In this page we will show some basic HTML examples.

Don't worry if I use tags you have not learned about yet.

### HTML Documents

All HTML documents must start with a document type declaration: `<!DOCTYPE html>.`

The HTML document itself begins with `<html>.` and ends with `</html>.`.

The visible part of the HTML document is between `</body>.` and `</body>.`

```
<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
```

### The `<!DOCTYPE html>.` Declaration

The `<!DOCTYPE html>.` declaration represents the document type, and helps browsers to display web pages correctly.

It must only appear once, at the top of the page (before any HTML tags).

The `<!DOCTYPE html>.` declaration is not case sensitive.

The `<!DOCTYPE html>.` declaration for HTML5 is:

```
<!DOCTYPE html>.
```

### HTML Headings

HTML headings are defined with the `<h1>` to `<h6>` tags.

`<h1>` defines the most important heading. `<h6>` defines the least important heading:

Example

```
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>
```

![heading](\img\heading.PNG)

### HTML Paragraphs

HTML paragraphs are defined with the `<p>` tag:

```
<p>This is another paragraph.</p>
```

![paragraph](\img\paragraph.PNG)

### HTML Links

HTML links are defined with the `<a>` tag:

```
<a href="https://www.github.com">This is a link</a>
```

![link](\img\link.PNG)

The link's destination is specified in the href attribute.

Attributes are used to provide additional information about HTML elements.

You will learn more about attributes in a later chapter.

### HTML Images

HTML images are defined with the `<img>` tag.

The source file (src), alternative text (alt), width, and height are provided as attributes:

Example

```
<img src="htmlstatic\img\HTML-Full-Form-1.jpg" alt="html-full-form.com" width="104" height="142">
```

![image](\img\image.PNG)

### How to View HTML Source

Have you ever seen a Web page and wondered "Hey! How did they do that?"

#### View HTML Source Code:

Click CTRL + U in an HTML page, or right-click on the page and select "View Page Source". This will open a new tab containing the HTML source code of the page.

#### Inspect an HTML Element:

Right-click on an element (or a blank area), and choose "Inspect" to see what elements are made up of (you will see both the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens.
