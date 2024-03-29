# Brief Media Frontend Styleguides

### [Javascript](https://github.com/briefmedia-digital/frontend-docs/blob/master/style-guide/JavaScript.md)
The JavaScript styleguide details how we use JavaScript in general. This styleguide
is heavily based on the AirBnB styleguide for JS.

### [React](https://github.com/briefmedia-digital/frontend-docs/blob/master/style-guide/React.md)
The React styleguide details how we use React, a JavaScript library for rendering and managing
the view layer.

### [Redux](https://github.com/briefmedia-digital/frontend-docs/blob/master/style-guide/Redux.md)
The Redux styleguide details how we use Redux, a JavaScript library for mantaining the state of
the frontend of our application.

### [TDD](https://github.com/briefmedia-digital/frontend-docs/blob/master/style-guide/TDD.md)
The TDD styleguide details the tools and methods we use to test our frontend code, including how to
write tests, what tests to write, when to write a test and what types of things to test.

### [CSS](https://github.com/briefmedia-digital/frontend-docs/blob/master/style-guide/CSS.md)
The CSS styleguide details how we use CSS. We have adopted a functional CSS approach, where we
create single-use classes (e.g. `.m1` would consist of `margin: var(--space-1);` and no other properties).
We have also adopted PostCSS and make use of several CSS features that aren't supported by every
browser that we support.

### [Performance](https://github.com/briefmedia-digital/frontend-docs/blob/master/style-guide/Performance.md)
This styleguide will detail the efforts and standards that we must uphold to ensure a fast and enjoyable
user experience across all of our brands.

### The Basics
Our main focus when it comes to the frontend is to keep everything simple and small so that it is
lightweight and easy to reason about. Keeping our components composable lends to a smaller codebase
and more reusable code. These paradigms are reflected in our choice to use React to render the view
layer as React allows us to build a library of composable components, and also reflected in our functional
CSS style.
