(function() {
  var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('link');
  s.setAttribute('rel', 'stylesheet');
  s.setAttribute('type', 'text/css');
  s.setAttribute('media', 'screen');
  s.setAttribute('href', '../../../build/selectorgadget_combined.css?r=' + Math.random());
  (head ? head : document.body).appendChild(s);

  s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', '../../../build/selectorgadget_combined.js?r=' + Math.random());
  (head ? head : document.body).appendChild(s);

  var interval = setInterval(function() {
    if (typeof SelectorGadget != 'undefined') {
      clearInterval(interval);

      if (!window.selector_gadget) {
        window.selector_gadget = new SelectorGadget();
        window.selector_gadget.makeInterface();
        window.selector_gadget.clearEverything();
        window.selector_gadget.setMode('interactive');
      } else if (window.selector_gadget.unbound) {
        window.selector_gadget.rebind();
      } else {
        window.selector_gadget.unbind();
      }

      jQuerySG('.selector_gadget_loading').remove();
    }
  }, 50);
})();
