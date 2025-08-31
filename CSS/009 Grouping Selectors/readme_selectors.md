# Grouping Selectors

Grouping selectors is useful when you want to apply the same styles to multiple different elements. It's done by separating each selector with a comma (,). The rule h1, h2 { color: blueviolet; } will change the text color of all h1 and h2 elements to blueviolet. This method is a great way to save time and reduce redundant code in your CSS file.

For example, to make all h1 and h2 headings on a page the same color, you would use:

```CSS
/* CSS */
h1, h2 {
  color: blueviolet;
}
```

## Descendant Selector
The descendant selector targets an element that is a descendant of another element. The two selectors are separated by a single space. This rule applies the style to the descendant element as long as it is nested anywhere inside the ancestor element. This means it can be a child, a grandchild, or even deeper.

A typical descendant selector looks like this:

```CSS
/* CSS */
ancestor descendant {
  property: value;
}
```

For instance, the rule .box li { color: blue; } will find all li elements that are inside an element with the class box and change their color to blue, regardless of how many levels deep they are.

```CSS
/* CSS */
.box li {
  color: blue;
}
```



## Child Selector
The child selector is more specific than the descendant selector because it only targets elements that are direct children of another element. The selectors are separated by a right angle bracket (>). The first selector is the parent, and the second is the direct child.

```CSS
/* CSS */
parent > child {
  property: value;
}
```

For example, to specifically target a paragraph element that is a direct child of a div with the class box, you would use .box > p { color: firebrick; } This rule won't affect any other p tags on the page.

```CSS
/* CSS */
.box > p {
  color: firebrick;
}
```






## Chaining Selectors

Chaining selectors applies a style to an element only when all of the chained selectors are true for that single element. There are no spaces between chained selectors. This method is used to create highly specific rules.

Chaining selectors can include element selectors, class selectors, and ID selectors. For example, to style an h1 element that also has a class of big and an ID of title, you would chain them like so: 

```CSS
/* CSS */
h1.big#title {
  /* Your styles here */
}
```

When chaining, the element selector (like h1) should always come first to avoid confusion with class or ID names.

## Combining Combinators

You can also combine different combinators to create even more complex and specific rules. This allows you to select elements based on a combination of ancestor-descendant relationships and specific element properties.

For example, to style a paragraph p with the class done that is located inside an unordered list (ul), you can write a selector that combines a descendant selector with a chained selector. This rule below specifies a ul (an unordered list) as an ancestor and then looks for any descendant p element that has the class done.

```CSS
/* CSS */
/* Example of ancestor-descendent with chained 
   selectors to style paragraph p   */
ul p.done {
  font-size: 0.5rem;
}
``` 
