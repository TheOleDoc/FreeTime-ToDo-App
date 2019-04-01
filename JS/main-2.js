(function () {
    if (localStorage.alldata) {
        let mydata = JSON.parse(localStorage.alldata);

        for (let l = 0; l < mydata.length; l++) {

            mylists.add(mydata[l].name);

            for (let i = 0; i < mydata[l].collection.length; i++) {
                mylists.collection[l].add(mydata[l].collection[i].name, mydata[l].collection[i].pending);
            }

        }
        pagePrint(mylists.collection);
    }
})();


function putNewList(myval, event) {
    switch (event.key) {
        case "Enter":
            // console.log("enter pushed");
            mylists.add(myval);
            $(".inputbox").val("");
            setMyData();
            break;
    }
}

function setMyData() {
    localStorage.setItem("alldata", JSON.stringify(mylists.collection));
    getMyData();
}

function getMyData() {
    $(".allMyLists").html("");
    let objdata = JSON.parse(localStorage.alldata);
    // console.log(objdata);
    pagePrint(objdata);
}

function pagePrint(listArray) {
    for (let l = 0; l < listArray.length; l++) {

        let listitems = "";

        for (let i = 0; i < listArray[l].collection.length; i++) {

            // I added a class to this div for easier jquery targeting
            // and a second parameter to delete this, cause it needs to do something differnt
            listitems += "<div class='item' contenteditable='true'>" +
                "<i onclick='deleteItem(this)' class='icon fas fa-trash listItemIcon'></i>" +
                "<input type='checkbox' class='itemCheckbox'>" + listArray[l].collection[i].name + "</div>";

        }

        $(".allMyLists").append("<div class='container newListContain'><i onclick='deleteItem(this)' class='icon fas fa-trash listTitleIcon'></i><span class='rowSpan' contenteditable='true'>" + listArray[l].name + "</span>" +

            "<span><input contenteditable='true' onkeyup='addItem(this, this.value, event, " + l + ")' type='text' placeholder='Add Item...' class='row iteminput'></span>" +

            "<div class='itembox'>" + listitems + "</div>" +
            // "<i onclick='deleteItem(this)' class='icon fas fa-trash'></i>" +

            "</div>");
        $(".iteminput").focus();
    }
}

function deleteItem(element) {
    // Set jquery selector for later:

    let el = $(element).closest('.newListContain');

    //this makes an array of all your Lists, then gets the index number of the element you want     to delete. Since your myLists object has the same structure we can use the index number to      properly delete out the entry in your myLists.collection array.
    let index = Array.from($('.allMyLists').children('.newListContain')).indexOf(el[0]);

    //This is used to see if you clicked to delete a List or an Item
    let check = $(element).parent()[0].className;

    if (check === 'container newListContain') {
        console.log('1ran');

        // You need to delete the entry in your myLists.collection array and then update the local storage with the changes
        mylists.collection.splice(index, 1);

        //This part is weird until you know how fadeout works. fadeOut function runs and over a second or so it fades out and hides the element, then WHEN IT IS FINISHED 1 SECOND LATER it     runs the function inside the parenthesis. BUT... while it is waiting for the fadeOut to     finish it runs the rest of the deleteItem function (remember promises and asynchronous welearned about. Javascript can wait to finish tasks, and it is in this case)
        // //So when it finishes its fade, we want to actually delete the element (It'll screw with the array index stuff we did earlier if it still exists). THEN update the local storage with the new item...done!
        $(element).parent().fadeOut(
            function () {
                $(element).parent().remove();
                setMyData();
            }
        )

    } else {

        //This get the idex of the the item inside the appropriate list
        let list = Array.from($('.itembox').children('.item')).indexOf(element.closest('.item'));
        mylists.collection[index].collection.splice(list, 1);
        $(element).parent().fadeOut(
            function () {
                $(element).remove();
                setMyData();
            }
        );
    }
}

// end of deleteItem function

$(document).on("click", '#clearBtn', function () {

    // console.log(this);
    // console.log(element);

    let lists = $('#allLists').find('.newListContain');

    lists.each(function (index) {

        $(this).find(".itemCheckbox:checked").each(function (index) {

            let item = Array.from($(this).closest('.itembox').children('.item')).indexOf($(this).closest('.item')[0]);
            mylists.collection[index].collection.splice(item, 1);
            $(this).closest(".item").fadeOut(
                function () {
                    $(this).closest(".item").remove();
                    setMyData();

                });
            })
        });

    // let el = $(this).closest('.newListContain');
    //
    //
    // //this makes an array of all your Lists, then gets the index number of the element you want     to delete. Since your myLists object has the same structure we can use the index number to      properly delete out the entry in your myLists.collection array.
    // let index = Array.from($('.allMyLists').children('.newListContain')).indexOf(el[0]);
    // // console.log(index);
    //
    // let list = Array.from($('.itembox').children('.item')).indexOf(this.closest('.item'));
    // // console.log(list);
    // mylists.collection[index].collection.splice(list, 1);
    // $(element).parent().fadeOut(
    //     function () {
    //         $(element).remove();
    //         setMyData();
    //     }
    // );

    // $(this).closest("div").fadeOut(
    //     function () {
    //         $(this).closest("div").remove()
    //     });
});


function addItem(elem, incval, event, listnumber) {
    switch (event.key) {
        case "Enter":
            $(elem).val("");
            mylists.collection[listnumber].add(incval);
            setMyData();
            break;
    }
}
