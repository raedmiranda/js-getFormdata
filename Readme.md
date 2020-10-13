# js-getformdata

 Convert the data from a jQuery form object to Javascript object.


## Installation

    $ component install raedmiranda/js-getformdata

## Example


```js
var getform = require('js-getFormData');
getform($("#form_data"));  // { email: 'a@b.co', type: customer, password: qW3rtYYYY$ }
```

## API

### getFormData(form-jQueryObject)

  Returns the js object of the data of a `form`.

## License

  MIT
