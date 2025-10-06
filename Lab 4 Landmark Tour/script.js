let landmarkimage = document.getElementById("landmarkimage");
let description = document.getElementById("description");
let landmarkMap = document.getElementById("landmarkmap");

Pitonsradio.onclick = function() {
    landmarkimage.src = "Pitons.jpg";
    description.innerHTML = "The Pitons are in Saint Lucia and are a famous landmark.";
    landmarkMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16829.87015716919!2d-61.07953789506544!3d13.808838635422036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c408eb52c6150ed%3A0x10058058be477cc1!2sGros%20Piton!5e1!3m2!1sen!2sus!4v1759454424230!5m2!1sen!2sus";
}
SulphurSpringsradio.onclick = function() {
    landmarkimage.src = "Sulphur Springs.png";
    description.innerHTML = "The Sulphur Springs are in Saint Lucia and are a famous landmark.";
    landmarkMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4206.907854054571!2d-61.049643424554546!3d13.839813486561296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c40895d2fdb5ba3%3A0xf84aa32810903259!2sSt%20Lucia%20Sulphur%20Springs!5e1!3m2!1sen!2sus!4v1759455073218!5m2!1sen!2sus";
}
Volcanoradio.onclick = function() {
    landmarkimage.src = "Volcano.jpg";
    description.innerHTML = "The Volcano is in Saint Lucia and is a famous landmark.";
    landmarkMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4206.929549549014!2d-61.05107401797312!3d13.838614051914345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c408a29d5e7dcb3%3A0xc32dc9b78c2dba8b!2sSoufri%C3%A8re%20Drive%20In%20Volcano!5e1!3m2!1sen!2sus!4v1759455227429!5m2!1sen!2sus";
}

size.onchange = function() {
    myimage = document.getElementById("landmarkimage");
   if (this.value == "small") {
       myimage.width = 200;
       myimage.height = 100;
   }
    if (this.value == "medium") {  
        myimage.width = 400;
        myimage.height = 200;
    }
    if (this.value == "large") {
        myimage.width = 600;
        myimage.height = 300;
    }
}