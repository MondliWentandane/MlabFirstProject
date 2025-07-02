document.getElementById("displayChallenges").onclick =  function displayChallanges(){
    document.getElementById("displayChallengesContext").innerHTML = theContent();
    displayChallangesImage();
}


function displayChallangesImage(){
    document.getElementById("displayChallabgesImage").innerHTML = theImages();
}
//window.alert('Welcome to JavaScript');
//onclick="displayChallanges()"

// The function containing the context to be displayed.
function theContent(){
    return 'Outdated SystemsLegacy Infrastructure: Many organizations still rely on outdated <br> hardware or software that is incompatible with modern systems, causing maintenance <br> headaches and security vulnerabilities.Integration Issues: Incorporating new technologies <br>into legacy systems can be complex, requiring custom APIs or extensive rewrites.'
}
// Funcion with images

function theImages(){
    return '<img src="media/image5.jpg", alt="Technicians under IT">'
}

