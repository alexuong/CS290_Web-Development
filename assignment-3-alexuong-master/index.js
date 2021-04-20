/*
 * Add your JavaScript to this file to complete the assignment.
 */


var modal = document.getElementById('modal-backdrop');
var createTwit = document.getElementById('create-twit-modal');

var userTextInput = document.getElementById('twit-text-input');
var userAuthorInput = document.getElementById('twit-attribution-input');

var searchbarInput = document.getElementById('navbar-search-input');

 function displayCreate(){
    modal.classList.remove('hidden');
    createTwit.classList.remove('hidden');
}

function hideCreate(){
      modal.classList.add('hidden'); 
      createTwit.classList.add('hidden');
}

function insertTwit(){
    var newTwit = document.createElement('article');
    newTwit.classList.add("twit");

    var twitIcon = document.createElement('div');
    twitIcon.classList.add("twit-icon");
    newTwit.appendChild(twitIcon);
    
    var bullhorn = document.createElement('i');
    bullhorn.classList.add("fa");
    bullhorn.classList.add("fa-bullhorn");
    twitIcon.appendChild(bullhorn);
    
    var twitContent = document.createElement('div');
    twitContent.classList.add("twit-content");
    newTwit.appendChild(twitContent);

    var twitText = document.createElement('p');
    twitText.classList.add("twit-text");
    var userText = document.createTextNode(userTextInput.value);
    twitText.appendChild(userText);
    twitContent.appendChild(twitText);

    var twitAuthor = document.createElement('p');
    twitAuthor.classList.add("twit-author");
    var authorText = document.createTextNode(userAuthorInput.value);
    twitAuthor.appendChild(authorText);
    twitContent.appendChild(twitAuthor);

    if (userTextInput.value=="" || userAuthorInput.value==""){
        alert("You didn't enter values for both boxes! Try again");
    
    }else{
      var twitcontainer = document.getElementsByClassName("twit-container");
      twitcontainer[0].appendChild(newTwit);
      hideCreate();
    }
}

function clearText(){
  userTextInput.value="";
  userAuthorInput.value ="";
}
  
 
  var twitButton = document.getElementById('create-twit-button');
  twitButton.addEventListener('click',function(){
         displayCreate();
  });

  var closeButton = document.getElementsByClassName('modal-close-button');
    closeButton[0].addEventListener('click',function(){ 
      hideCreate();
      clearText();
      
  });
 var cancelButton = document.getElementsByClassName('modal-cancel-button');
    cancelButton[0].addEventListener('click',function(){ 
      hideCreate();
      clearText();
  });

  var createButton = document.getElementsByClassName('modal-accept-button');
    createButton[0].addEventListener('click',function(){

        insertTwit();
        clearText();
    });

  var searchButton = document.getElementById('navbar-search-button');
  searchButton.addEventListener('click',function(){
    
   var twitsArray = document.getElementsByClassName("twit");
   var twitTextArray = document.getElementsByClassName("twit-text");
   var twitAuthorArray = document.getElementsByClassName("twit-author");
   var searchbar = searchbarInput.value.toUpperCase();

   for (var i = twitsArray.length-1; i >=0; i--){
       var textInput = twitTextArray[i].textContent.toUpperCase();
       var authorInput = twitAuthorArray[i].textContent.toUpperCase();

      if ((textInput.includes(searchbar) == false) && (authorInput.includes(searchbar) == false)) {
          twitsArray[i].remove();
      }
      
   }
  
  });
  
