!

html
- head
  - metadata
    - title
- body


meta - seo , browser , headers
title - 
link
script

h1 - h6

Main h1 - SEO ko lagi better

p - paragraph

attributes

absolute path / relative path

a, img - inline elements
h1, p - block elements

img, br - self closing tag

what is semantic html tags?  
-seo friendly
-better readability
-better accessibility

example- aside, artice, section, main, nav, header, footer, figure, figcaption

div - block element

linking 
- internal (id selectors - #main-heading)
- external (/about.html, google.com)

CSS
- Inline ✔️ - most priority
- Internal ✔️ 
- External  ✔️


CSS selectors
-element
- id (#) - whole document ma unique - most priority
- class (.) - Duplicate
- data-attribute ([data-title="value"])
- pseudo class (*, > , ~ , +, :root)
- pseudo element (::before, ::after, ::first-letter, ::first-line, :first-child, :last-child)


#main-heading{
  color: blue;
  font-size: 32px
}

.main-heading{
  color: blue;
  font-size: 32px
  text-align: center;
}

color{ 
  hls
  rgba
  hex
}

Properties

Typography(
  font-size: 32px, 16px, 12px (pixels)
  font-weight: bold, normal, medium, semi-bold, light, 100, 200, 300, 400, 500, 600, 700, 800, 900
  font-style: italic
  text-decoration: underline, line-through
  text-transform: uppercase, lowercase, capitalize
  letter-spacing: 1px, 2px, 3px, 0.5px
  line-height: 1.2, 1.5, 2, 3, 4, 5, 6
  color: red, blue, green, yellow, black, white
)

padding
margin
border 2px solid / dashed red

position
- relative
- static
- absolute 
- fixed
- sticky

0, 0, 0, 0 

top: 
bottom: 
left: 
right:


border-radius:
  
UNITS:
- %
- px
- rem - takes font size relative to browser set font-size
- em - takes font size relative to nearest parent font-size
- vh (viewport height)
- vw (viewport width)
- dvh (dynamic viewport height) - mobile screen
- dvw (dynamic viewport width)

box-shadow:

background-color:
background-image:
background-position:
background-size:
background-repeat:

z-index:

display:

float:
clear:

overflow:


box-sizing 
- border-box: content + padding + border
- content-box: Content

Content Box: Only the content Itself (additional Padding and Border added Will be added Outside the content)
Border Box: margin + padding + content (doesn't exceed the specified height and width)


pseudo-classes (:)
  - targets element / tags state  
  example : hover, active , focus, visited, link, visited, hover, focus, active, target, checked, disabled, enabled, selected, indeterminate, default, optional, required, invalid, in-range, out-of-range, read-only, read-write, required, valid, invalid, blur

 - a:hover{

 }

pseudo-elements (::)
  - targets part of element / tags directly

  p::first-line{

  }

  ul::first-child{

  }

  a::after{
  content: ""
  height: 
  weight: 
  background-color:
  }

  a::before{

  }

CSS - cascading style Sheet


CSS Specificity
  -  which styles are applied to an element

CSS Selectors 
  - > : direct child
    + : sibling
    * : all

.class.class.class

forms
liner gradient


CSS Variables
:root {
  --variableName: 32px;
  --variableColor: red;
}

h1 {
  font-size: var(--variableName);
}

# Float VS Table Vs Flexbox

Flexbox-
  display: flex;
  flex-direction: row | column | row-reverse | column-reverse;
  justify-content: flex-start | flex-end | center | space-between | space-around;
  align-items: flex-start | flex-end | center | baseline | stretch;









