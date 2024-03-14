HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values.

### Color Names

In HTML, a color can be specified by using a color name:
HTML supports 140 standard color names.

### Background Color

You can set the background color for HTML elements:

### Example

```
<h1 style="background-color:DodgerBlue;">Hello World</h1>
<p style="background-color:Tomato;">Lorem ipsum...</p>
```

![colors](\img\colors.PNG)

### Text Color

You can set the color of text:
Example

```
<h1 style="color:Tomato;">Hello World</h1>
<p style="color:DodgerBlue;">Lorem ipsum...</p>
<p style="color:MediumSeaGreen;">Ut wisi enim...</p>
```

![text-colors](\img\text-colors.PNG)

### Border Color

You can set the color of borders:

```
<h1 style="border:2px solid Tomato;">Hello World</h1>
<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
<h1 style="border:2px solid Violet;">Hello World</h1>
```

![border-color](\img\border-color.PNG)

### Color Values

In HTML, colors can also be specified using RGB values, HEX values, HSL values, RGBA values, and HSLA values.

The following three `<div>` elements have their background color set with RGB, HEX, and HSL values:

rgb(255, 99, 71)

```
<h1 style="background-color:rgb(255, 99, 71);">...</h1>
<h1 style="background-color:#ff6347;">...</h1>
<h1 style="background-color:hsl(9, 100%, 64%);">...</h1>

<h1 style="background-color:rgba(255, 99, 71, 0.5);">...</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">...</h1>
```

![background-color](\img\background-color.PNG)
The following two `<div>` elements have their background color set with RGBA and HSLA values, which add an Alpha channel to the color (here we have 50% transparency):
![background-color](\img\transparent-color .PNG)
