// window.open() - open a new window
// window.close() - close the current window
// window.moveTo() - move the current window
// window.resizeTo() - resize the current window


// Window Screen

        // The window.screen object can be written without the window prefix.

        // Properties:

        // screen.width
        // screen.height
        // screen.availWidth
        // screen.availHeight
        // screen.colorDepth
        // screen.pixelDepth

// Window Location

        // The window.location object can be written without the window prefix.

        // Some examples:

        // window.location.href (returns the href (URL) of the current page)

           //  :: https://www.w3schools.com/js/js_window_location.asp

        // window.location.hostname (returns the domain name of the web host)

           // ::www.w3schools.com

        // window.location.pathname (returns the path and filename of the current page)

            //   ::/js/js_window_location.asp

        // window.location.protocol (returns the web protocol used (http: or https:)

          // https

        // window.location.assign() loads a new document


// Window History 


    // history.back() - same as clicking back in the browser
    // history.forward() - same as clicking forward in the browser


// Timing Events

    //   setTimeout(function, milliseconds) 
    // (Executes a function, after waiting a specified number of milliseconds.)

    //  setInterval(function, milliseconds)

    // Same as setTimeout(), but repeats the execution of the function continuously.

    //  Example : 

        //  setInterval(myTimer, 1000);

        // function myTimer() {
        // const d = new Date();
        // document.getElementById("demo").innerHTML = d.toLocaleTimeString();
        // }


    //The clearTimeout() method stops the execution of the function specified in setTimeout().
