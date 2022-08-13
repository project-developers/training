//Function starts here
function getContent(fragmentId, callback){
var pages = {
                home: `<h1 style="color: green;">Home</h1>
                <ul>
            <li><a href="#aboutUs">About Us</a></li>
            <li><a href="#contactUs">Contact Us</a></li>
                                                <li><a href="#settings">Settings</a></li>
    </ul>`,
                settings: `<h1 style="color: green;">Settings</h1>     
                <ul>
            <li><a href="#home">Home</a></li>
                                                <li><a href="#aboutUs">About Us</a></li>
            <li><a href="#contactUs">Contact Us</a></li>
    </ul>`,
                contactUs: `<h1 style="color: green;">Contact Us</h1>
                <ul>
            <li><a href="#home">Home</a></li>
                                                <li><a href="#aboutUs">About Us</a></li>
            <li><a href="#settings">Settings</a></li>
    </ul>`,
                aboutUs: `<h1 style="color: green;">About Us</h1>      
                <ul>
            <li><a href="#home">Home</a></li>
                                                <li><a href="#contactUs">Contact Us</a></li>
            <li><a href="#settings">Settings</a></li>
    </ul>`
 
  };
  callback(pages[fragmentId]);
};
 
function loadContent(){
 
  var contentDiv = document.getElementById("app"),
      fragmentId = location.hash.substr(1);
 
  getContent(fragmentId, function (content) {
   contentDiv.innerHTML = content;
  });
}
 
if(!location.hash) {
  location.hash = "#home";
}
 
loadContent();
 
window.addEventListener("hashchange", loadContent);
