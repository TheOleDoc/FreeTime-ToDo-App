
(function(){
    if(localStorage.alldata){
        let mydata = JSON.parse(localStorage.alldata);

        for(let l = 0; l < mydata.length; l++){

            mylists.add(mydata[l].name);

            for(let i = 0; i < mydata[l].collection.length; i++){
                mylists.collection[l].add(mydata[l].collection[i].name, mydata[l].collection[i].damage);
            }

        }
        pagePrint(mylists.collection);
    }
})();


function putBokoblin(myval, event){
    switch(event.key){
        case "Enter":
            // console.log("enter pushed");
            mylists.add(myval);
            $(".inputbox").val("");
            setMyData();
            break;
    }
}

function setMyData(){
    localStorage.setItem("alldata", JSON.stringify(mylists.collection));
    getMyData();
}

function getMyData(){
    $(".bokoblinbox").html("");
    let objdata = JSON.parse(localStorage.alldata);
    console.log(objdata);
    pagePrint(objdata);
}

function pagePrint(listArray){
    for(let l = 0; l < listArray.length; l++){

        let listitems = "";

        for(let i = 0; i < listArray[l].collection.length; i++){
            listitems += "<div>"+ listArray[l].collection[i].name +"</div>";
        }

        $(".bokoblinbox").append("<div><span>" + listArray[l].name + "</span>"+
            "<input onkeyup='addItem(this, this.value, event, "+ l +")' type='text' placeholder='Add Item...' class='iteminput'>"+
            "<div class='itembox'>"+ listitems +"</div> "+
            "</div>");
    }
}

function addItem(elem, incval, event, listnumber){
    switch(event.key){
        case "Enter":
            $(elem).val("");
            mylists.collection[listnumber].add(incval, false);
            setMyData();
            break;
    }
}
