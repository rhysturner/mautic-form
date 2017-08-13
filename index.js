/**
 * Load mautic form into page.
 *
 * @param  {String} _src
 * @param  {String} _domain
 * @param  {String} _msg
 */
module.exports = {
  LoadForm: function (_src, _domain, _msg = "success") {
    if (typeof MauticSDKLoaded == 'undefined') {
      var MauticSDKLoaded = true;
      var head = document.getElementsByTagName('head')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = _src;
      script.onload = function () {
        MauticSDK.onLoad();
        console.log("MauticSDK.onLoad");
      };
      head.appendChild(script);
      var MauticDomain = _domain;
      var MauticLang = {
        'submittingMessage': _msg
      }
    }
  }
};
