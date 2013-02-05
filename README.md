jQuery Character Counter
========================

Simple plain jquery plugin to add a character countdown to inputs.

In order to use the plugin you need to add data-max-length attribute to the element for instance:
```html
<textarea id="tester" data-max-length="400"></textarea>
```

To add the counter just call:

```javascript
$("#tester").characterCounter();
```
  
The plugin adds a paragraph element with class of **"character_counter"**. The count is updated on the keyup event and if the input exceeds the maximum length specified a class of **"invalid"** is added to the paragraph element. 

There is no styling whatsoever applied to the element to allow for you to add your own custom styling based on the 2 classes.
