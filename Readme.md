# js-getformdata [![Build Status](https://api.travis-ci.org/raedmiranda/js-getFormdata.svg?branch=master)](https://travis-ci.org/raedmiranda/js-getFormdata)

 Convert the data from a form jQuery object to JavaScript object.


## Installation

    $ npm install js-getformdata

## Example


```js
var getFormData = require('js-getFormData')
getFormData($("#form"))  // { email: 'a@b.co', type: 'customer', age: 21, password: qW3rtYYYY$ }
```

## API

### getFormData(form: jQuery object)

  Returns the js object of the data from a `form` and/or form controls collection (`input`, `select`, `textbox`, etc.).

## License

The MIT License (MIT)

Copyright &copy; 2020, Raul Miranda

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
