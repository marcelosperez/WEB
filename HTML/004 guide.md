
# Adding CSS

Click the link below to toggle the CSS on and off:
appbrewery.github.io/just-add-css/

How to add CSS:

## Inline:
- The CSS goes in the opening tag.
```HTML
<html style="background: blue"> nononononono nonononono nonnono </html>
```

## Internal: 
- Internal CSS is a method where you embed your CSS rules directly within the `<head>` section of an HTML file using the `<style>` tag. It's a great choice for applying styles that are unique to a single web page.
```HTML
<html> 
     <head>
<style>
              html {
               background: red;
               }
          </style>
```
## External:
- External CSS is the most common and recommended method for styling websites. It involves creating a separate file with a .css extension and then linking that file to your HTML document.
```HTML
<head>
<link rel="stylesheet" href = "./styles.css" />
</head>
```
- rel="stylesheet": This attribute tells the browser that the linked file is a stylesheet.

- href="./styles.css": This attribute specifies the path to your CSS file. The ./ indicates that the file (styles.css in your example) is in the same directory as the HTML file.


# CSS selectors

A CSS selector is the first part of a CSS rule that selects the HTML element(s) you want to style. It tells the browser what to apply the styling rules to.

## Element Selector (p, h1, div, etc)

The element selector is the simplest type. It selects all HTML elements with a specific tag name.

- Syntax: Just use the tag name directly.

- Example: `h1 { color: blue; }`

- How it Works: This will find every `<h1>` tag on the page and make the text color blue. If you have three `<h2>` tags and you use h2 { color: red; }, all three will turn red.

## Class Selector (.)

The class selector is used to select elements based on their class attribute. Classes are the most common way to style groups of elements.

- Syntax: Use a period (.) followed by the class name.

- HTML: `<h2 class="red-text">I'm a heading</h2>`

- CSS: `.red-text { color: red; }`

- How it Works: The selector .red-text will find any HTML element that has class="red-text" and apply the styles. Unlike element selectors, classes allow you to style elements of different types (e.g., a `<p>` and an `<h2>`) with the same rule.


## ID Selector (#)

The ID selector is used to select a single, unique element. An ID should only be used once per HTML page.

- Syntax: Use a pound sign (#) followed by the ID name.

- HTML: `<h2 id="main-title">Main Heading</h2>`

- CSS: `#main-title { color: red; }`

- How it Works: The selector #main-title will find the one and only element with id="main-title" and apply the styles. The key difference between an ID and a class is that an ID is for a unique element, while a class can be reused on many elements.

## id vs class selector

- id is applied to one unique element
- class can be applied to many

## Universal Selector (*)

The universal selector is used to select every single HTML element on the page.

- Syntax: Use an asterisk (*).

- Example: * { text-align: center; }

- How it Works: This will apply the rule to all elements, including headings, paragraphs, lists, and images. It's often used for setting a universal style, like a font family or text alignment for the entire page.

## Attribute Selector

The attribute selector targets elements that have a specific attribute, or an attribute with a specific value.

- Syntax: Use square brackets [ ]. Inside the brackets, you can use just the attribute name, or the attribute name followed by an equal sign and the value in quotes.

- Example 1 (by attribute): p[ draggable ] { color: red; }

```HTML
<p draggable="true"> Drag me </p>
<p> don't drag </p>
<p> don't drag </p>
```

- Example 2 (by attribute and value): 
```HTML
a[ href="https://google.com" ] { color: blue; }
```
- How it Works: The first example selects all paragraph tags that have the draggable attribute, regardless of its value. The second example is more specific, selecting only `<a>` tags where the href attribute is exactly "https://google.com".

