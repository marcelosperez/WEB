
# Responsive Web Design with Media Queries

When building responsive websites, media queries are one of the most powerful tools you’ll use. They let you apply different styles depending on the size (or type) of the device displaying your site.

## What is a Media Query?

A media query checks the size of the screen (or other device features) and applies CSS styles if certain conditions are met.

The syntax looks like this:

```CSS
/* CSS */
@media (condition) {
  /* CSS styles go here */
}

```

## Breakpoints

A breakpoint is the point where your layout changes to fit the screen better.
For example, you might want your text to shrink when viewed on a phone.

```CSS
/* CSS */
/* Default (desktop styles) */
h1 {
  font-size: 48px;
}

/* Apply new styles for screens 600px wide or less */
@media (max-width: 600px) {
  h1 {
    font-size: 24px;
  }
}
```

On a desktop, the heading is big. On a phone, it’s smaller.

## Max-width vs Min-width

There are two main keywords you’ll see:

- max-width → Styles apply when the screen is up to this size (smaller screens).

- min-width → Styles apply when the screen is at least this size (larger screens).

Example:

```CSS
/* CSS */
/* Smaller screens (≤ 600px) */
@media (max-width: 600px) {
  body {
    background: lightcoral;
  }
}

/* Larger screens (≥ 601px) */
@media (min-width: 601px) {
  body {
    background: lightgreen;
  }
}
```

## Combining Breakpoints

You can target a range of screen sizes by combining min-width and max-width with and.

```CSS
/* CSS */
/* Between 600px and 900px */
@media (min-width: 600px) and (max-width: 900px) {
  body {
    background: lightblue;
  }
}

```
Here is a breakdown of what each part means for a beginner:

- @media: This keyword signals the start of a media query. It tells the browser, "only apply the following CSS rules if the conditions I'm about to specify are met."

- (min-width: 600px): This is the first condition. It translates to "if the screen's width is at least 600 pixels." It sets a minimum size for the style to be applied. 

- and: The "and" means both the min-width and max-width conditions must be true for the CSS to be applied.

- (max-width: 900px): This is the second condition. It means "if the screen's width is at most 900 pixels." This sets a maximum size.

## Media Types (screen vs print)

By default, media queries apply to screens. But you can also target print:

```CSS
/* CSS */
/* Screen styles */
@media screen and (max-width: 600px) {
  body {
    background: lightgoldenrodyellow;
  }
}

/* Print styles */
@media print {
  body {
    font-size: 12pt;
    color: black;
    background: white;
  }
}
```
This way, your website looks printer-friendly when someone prints the page.

## Common Breakpoints (Device Categories)

Here are some typical screen-width ranges:

- Mobile phones → 319px – 480px

- Tablets / iPads → 481px – 1200px

- Laptops → 1201px – 1600px

- Desktops / Large screens → 1601px and up

Example:

```CSS
/* CSS */
/* Mobile */
@media (max-width: 480px) {
  body { background: salmon; }
}

/* Tablets */
@media (min-width: 481px) and (max-width: 1200px) {
  body { background: powderblue; }
}

/* Laptops */
@media (min-width: 1201px) and (max-width: 1600px) {
  body { background: limegreen; }
}

/* Desktops */
@media (min-width: 1601px) {
  body { background: seagreen; }
}
```


## How to Test Responsiveness

- Resize your browser window manually to see changes.
- Use Chrome Developer Tools:
- Right-click → Inspect → Toggle device toolbar (📱 icon).
- Choose devices like iPhone SE, iPad Air, etc.
- Or set custom screen sizes.


## Exercise

- Open your index.html.
- Set a default background color.
- Write four media queries (mobile, tablet, laptop, desktop).
- Change the background color for each screen size.

When you test, your page should display different colors depending on the screen width.


## Key Takeaways

- Media queries make your website responsive.
- Use max-width for smaller screens and min-width for larger ones.
- You can combine breakpoints for precise ranges.
- Media queries work for more than just size (e.g., orientation or print).
- Always test your site across devices.
