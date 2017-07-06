;(function () {

  // REF https://github.com/jwo/node-fetch-body-parser-example
  // REF Codes 5.3-todo-list

  // var classname = document.getElementsByClassName("classCheckbox");
  // for (let i = 0; i < classname.length; i++) {
  //   classname[i].addEventListener('change', sendForm, false);
  // }

  function sendForm () {
    console.log('start');
    let url;
    let callback;
    let formsBody = JSON.stringify({}); // content to stringify
    postFetch(url, formsBody, callback);
  }

  function postFetch (url, formsBody, callback) {
    fetch(url, {
      method: 'post',
      body: formsBody,
      headers: {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log('end');
      if (callback) {

      }
    }).catch( function(error) {
      console.log('error received', error);
    });
  }

}());
