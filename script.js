//Function starts here
function getContent(fragmentId, callback){
var pages = {
                home: `<p>Home</p>  
                <ul>
            <li><a href="#aboutUs">About Us</a></li>
            <li><a href="#contactUs">Contact Us</a></li>
                                                <li><a href="#settings">Settings</a></li>
    </ul>`,
                settings: `<p>Settings</p>          
                <ul>
            <li><a href="#home">Home</a></li>
                                                <li><a href="#aboutUs">About Us</a></li>
            <li><a href="#contactUs">Contact Us</a></li>
    </ul>`,
                contactUs: `<p>Contact Us</p>
                <ul>
            <li><a href="#home">Home</a></li>
                                                <li><a href="#aboutUs">About Us</a></li>
            <li><a href="#settings">Settings</a></li>
    </ul>`,
                aboutUs: `<p>About Us</p>      
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
