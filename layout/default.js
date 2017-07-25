module.exports = (data) =>

`<!DOCTYPE html>
<html>
<meta http-equiv=Content-Type content="text/html;charset=utf-8">
<head>
    <title>Contact App</title>
</head>
<body>
    <div id="app">
        There is something wrong with your js engine
    </div>
</body>
<script type="text/javascript">
(function () {
   var match = navigator.userAgent.match(/Chrome\\/(\\d+)/)
   if (!match || !+match[1] || +match[1] < 58) {
       var div = document.createElement('div')
       div.style = 'position: fixed;top: 60px;text-align: center;width: 100%;z-index: 1000;background-color: #fff;padding: 10px;font-weight: bold;font-size: 16px;color: #f00;'
       div.innerHTML = 'Please download the latest Chrome：<a href="https://www.google.com/chrome/" target="_blank">https://www.google.com/chrome/</a>'
       document.body.insertBefore(div, document.body.firstChild)
   }
})()
</script>
<script type="text/javascript" src="${data.vendor}"></script>
<script type="text/javascript" src="${data.page}"></script>
</html>`;
