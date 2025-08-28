
# Adding CSS

Click the link below to toggle the CSS on and off:
appbrewery.github.io/just-add-css/

How to add CSS:

a) Inline:
- The CSS goes in the opening tag.
```HTML
<html style="background: blue"> nononononono nonononono nonnono </html>
```

b) Internal: 
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
c) External:
- External CSS is the most common and recommended method for styling websites. It involves creating a separate file with a .css extension and then linking that file to your HTML document.
```HTML
<head>
<link rel="stylesheet" href = "./styles.css" />
</head>
```
- rel="stylesheet": This attribute tells the browser that the linked file is a stylesheet.

- href="./styles.css": This attribute specifies the path to your CSS file. The ./ indicates that the file (styles.css in your example) is in the same directory as the HTML file.