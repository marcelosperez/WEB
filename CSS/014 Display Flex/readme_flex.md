
## CSS Flexbox

We’ll explore what Flexbox is, why it was created, and how to use it to build modern, flexible, and responsive layouts.

## A Quick History of Web Layouts

### 1. Tables for Layout (Old & Wrong)

In the early days, developers used the `<table>` element to create multi-column layouts.

```HTML
<!-- HTML -->
<table>
  <tr>
    <td>Column 1</td>
    <td>Column 2</td>
    <td>Column 3</td>
  </tr>
</table>

```

Tables are still useful — but only for real tabular data (e.g., sales reports, schedules). Using tables for general page layout is outdated and should be avoided.

### 2. Inline-Block Layouts

Later, developers used display: inline-block to place elements side by side:


```HTML
<!-- HTML -->
<div class="box">Box 1</div>
<div class="box">Box 2</div>
<div class="box">Box 3</div>

<style>
  .box {
    display: inline-block;
    width: 30%;
    border: 1px solid #333;
  }
</style>

```
Easier than tables. Still difficult to align properly and not very responsive.


### 3. Absolute Positioning

Another trick was position: absolute, which takes elements out of the normal flow:

```CSS
/* CSS */
.box {
  position: absolute;
  left: 100px;
  top: 50px;
}
```
Very inflexible — breaks easily when you add more content.

### 4. Floats (Useful, But Not for Layout)

Originally intended for floating images:

```CSS
/* CSS */
img {
  float: left;
  margin-right: 10px;
}
```

But developers misused float for entire page layouts, which led to endless hacks like the clearfix hack.

Still good for wrapping text around images. Not recommended for full layouts anymore.


### Enter Flexbox

Flexbox was created to solve these layout problems in a clean and intuitive way. With just a few lines of CSS, you can achieve layouts that used to require hacks.

Example: Simple Flexbox Layout

```HTML
<!-- HTML -->
<div class="container">
  <div class="item">Box 1</div>
  <div class="item">Box 2</div>
  <div class="item">Box 3</div>
</div>

<style>
  .container {
    display: flex;   /* Activate Flexbox */
    gap: 1rem;       /* Add space between items */
  }
  .item {
    background: lightblue;
    padding: 20px;
    text-align: center;
  }
</style>
```
Items line up neatly in a row. Easy to add spacing with gap.
Responsive by default.

### Key Flexbox Concepts

- Flex Container → The parent element (where you apply display: flex).

- Flex Items → The children inside the container (automatically follow Flexbox rules).

- Main Axis & Cross Axis → Flexbox layouts are controlled by direction (we’ll cover this in depth later).

- Inline Flex → Use display: inline-flex if you want the container itself to behave like an inline element.


### Flexbox Challenge: Build a Navigation Bar

Starter HTML

```HTML
<!-- HTML -->
<div class="container">
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
  </ul>
</div>
```

Your Task
- Turn the list into a horizontal navigation bar using Flexbox.
- Add spacing between items.
- Hint: Apply display: flex to the container that holds the `<li>` elements.


### Solution

```CSS
/* CSS */
.container ul {
  display: flex;
  list-style: none;  /* Remove bullets */
  gap: 1rem;         /* Add spacing */
  padding: 0;
}
```

