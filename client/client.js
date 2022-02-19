const publicVapidKey = `BD45qgBlT_zrzsketjWiIENcT22R2MvCYnUa8No-w0lKBWTXHnf4kjPKMcHVSWb7CcIpugPhB5ExBWooTK_fLK0`;
let subscription = "";

function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

if('serviceWorker' in navigator){
    console.log("yes");
    navigator.serviceWorker.register('./sw.js')
    .then( async register =>{
        console.log("registered successfully",register);
        //register push
        subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,

        //public vapid key
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });
})
    .catch(err=>{
        console.log("service worker not registered successfully",err);
    })
}


async function sendPushNotification(){
    //Send push notification
    await fetch("/subscribe", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
            "content-type": "application/json"
        }
    });
}