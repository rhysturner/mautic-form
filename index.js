exports.LoadForm = function(_src, _domain, _msg = "Submit successfully") {
  console.log("This is a message from the demo package");
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
