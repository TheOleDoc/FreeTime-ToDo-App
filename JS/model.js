
let mylists = new ListCollection();

function ListCollection(){
    this.collection = [];
    this.add = function(bname){
        this.collection.push(new Bokoblin(bname));
    };
}

function Bokoblin(name){ //this would be our list
    this.name = name;
    this.collection = [];

    this.add = function(itemname, damageflag){
        this.collection.push(new Item(itemname, damageflag));
    }
}

function Item(name, damage){ //this could be a list item
    this.name = name;
    this.damage = damage;
}