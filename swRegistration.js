//Authors: Evan B.
//Subtasks: GG-41, GG-27

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('./javascript/service-Worker.js', {scope: './javascript/'})
    .then(function(registration){
      console.log("Service Worker Registered", registration);
    })
    .catch(function(err){
      console.log("Servie Worker Failed to Register", err);
    })
  }