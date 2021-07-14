(function(){
    "use strict";

    var detailsform = document.querySelector('#destination_details_form');
detailsform.addEventListener('submit', handleformsubmit);
function handleformsubmit(event){
    event.preventDefault();

    var destname = event.target.elements["name"].value;
    var destlocation = event.target.elements["location"].value;
    var destphoto = event.target.elements["photo"].value;
    var destdesc = event.target.elements["description"].value;

    for(var i = 0; i < detailsform.length;i++){
        detailsform.elements[i].value="";
    }
    var destcard = createdestinationcard(destname,destlocation,destphoto,destdesc);

    var wishlistcontainer = document.getElementById('destination_container');
    if(wishlistcontainer.children.container===0){
        document.getElementById('title').innerHTML="My wish list";

    }
    document.querySelector('#destination_container').appendChild(destcard);
}
function createdestinationcard(name, location, photourl, description){
    var card = document.createElement('div');
    card.className='card';

    var img = document.createElement('img');
    img.setAttribute('alt',name);

    var constantphotourl="images/signpost.jpg";
    if(photourl.length===0){
        img.setAttribute('src',constantphotourl);
    }
    else{
        img.setAttribute('src',photourl);
    }

    card.appendChild(img);

    var cardbody = document.createElement('div');
    cardbody.className="card-body";

    var cardtitle = document.createElement('h3');
    cardtitle.innerText=name;
    cardbody.appendChild(cardtitle);

    var cardsubtitle = document.createElement('h4');
    cardsubtitle.innerText=location;
    cardbody.appendChild(cardsubtitle);
    
    if(description.length !==0){
        var cardtext = document.createElement('p');
        cardtext.className="card-text";
        cardtext.innerText=description;
        cardbody.appendChild(cardtext);


    }
    var carddeletebtn = document.createElement('button');
    carddeletebtn.innerText="Remove";

    carddeletebtn.addEventListener('click',removedestination);
    cardbody.appendChild(carddeletebtn);

    card.appendChild(cardbody);

    return card;
}

function removedestination(event){
    var card = event.target.parentElement.parentElement;
    card.remove();
}


}())



