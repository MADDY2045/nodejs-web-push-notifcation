STEPS TO SEND A PUSH NOTIFICATION USING WEB-PUSH NPM:
1)Build the server side
2)Import the dependencies
3)Generate VAPID Keys using `./node_modules/.bin/web-push generate-vapid-keys`
4)Setting the VAPID Keys with web push
5)Creating the subscribe route
6)Code the client side
7)Setting the static path
8)Creating the required files(index.html,client.js,sw.js)
9)Setting up the service worker using public key in the client side
10)Next, since we are using the VAPID key in a web application, we use a function to convert the public key to a Uint8Array to pass into the subscribe call.
11)check if the service worker is enabled in the current browser and trigger the send method.
12)In the send method, we will register the service worker, and then trigger the send notification functionality 
13)We will code the next step in the sw.js file. We will add an event listener to the push and specify the options for the push notification such as title, body, image, and icon. We will add the block of code in the sw.js file.
14)run the server and serve the html(not by double clicking) to see the push event working