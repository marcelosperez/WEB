
# The CSS Cascade

The CSS Cascade is a set of rules that determines which CSS styles get applied when multiple conflicting rules target the same HTML element. The term "cascade" refers to the browser "cascading" down a hierarchy of importance to decide which style ultimately wins.

The cascade's order of importance is based on four main factors, from most to least important:

- Importance (with !important)

- Type (Inline, Internal, External)

- Specificity (ID, Class, Element)

- Position (order in the stylesheet)


# 1 Importance (!important)

The !important rule is the most powerful tool in the cascade. When you add the !important keyword to a property, it overrides all other styles, regardless of their specificity, type, or position.

This is a last-resort tool and should be used sparingly because it can make your code difficult to debug and maintain.

Example

In this example, the !important keyword ensures the list item's text will always be red, even though another rule sets it to blue.

```CSS
/* CSS */
li {
  color: red !important;
  color: blue;
}
```


# 2 Type

The type of stylesheet determines its importance.  Styles defined closer to the element are more important. The hierarchy is:

- Inline Styles: These are the most important. They are defined directly on an HTML element using the style attribute.

- Internal Styles: These come next. They are defined in a `<style>` tag within the `<head>` section of an HTML document.

- External Styles: These are the least important. They are defined in a separate .css file and linked to the HTML using the `<link>` tag.

Example


```HTML
<!-- HTML -->
<link rel="stylesheet" href="./style.css" />

<head>
  <style>
    h1 {
      color: green;
    }
  </style>
</head>

<body>
  <h1 style="color: blue">Hello World</h1>
</body>
```

In this example, even if the external stylesheet sets the h1 color to red and the internal stylesheet sets it to green, the inline style will take precedence, making the text blue.

# 3 Specificity

Specificity is a measure of how precise a CSS selector is. A more specific selector will always override a less specific one. 

The order of specificity is:

- ID Selector (#): The most specific, as an ID should be unique to a single element on a page.

- Class Selector (.): More specific than an element selector, as a class can be applied to multiple elements.

- Attribute Selector ( [ ] ): Generally has the same specificity as a class selector.

- Element Selector: The least specific, as it targets all elements of a certain type (e.g., li or div).

Example

All four of these CSS rules will target the same list item, but due to specificity, the ID selector's color (orange) will be applied.

```HTML
<!-- HTML -->
<li id="first-id" class="first-class" draggable="true">List Item</li>
```

```CSS
/* CSS */

/* Less specific */
li {
  color: blue;
}

/* More specific than element */
.first-class {
  color: red;
}

/* More specific than class/attribute */
li[ draggable ] {
  color: purple;
}

/* Most specific */
#first-id {
  color: orange;
}

```


# 4 Position

Position is the final tiebreaker when all other factors are equal. The rule that appears last in the stylesheet will be applied. The browser reads the CSS from top to bottom, applying styles in that order. If a later rule conflicts with an earlier one, the later one wins.

This is true for both internal and external stylesheets.

Example


```CSS
/* CSS */
li {
  color: red;
  color: blue;
}
```

But remember, one rule can break this order The !important rule. When you add the !important keyword to a property, it overrides all other styles, regardless of their specificity, type, or position.