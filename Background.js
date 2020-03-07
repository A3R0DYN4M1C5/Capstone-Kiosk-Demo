chrome.app.runtime.onLaunched.addListener(function(){
    var options = {
        'id': 'Capstone-Kiosk-Demo',
        'bounds': {
            'width' : 1920,
            'height': 1080
        }
    };
    chrome.app.window.create('application.html',(options));
})