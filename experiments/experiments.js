$("#my-button").click(function(){
    var name = prompt("Name please: ");
    if(name == null){
        throw new Error('Bleh');
    }
    $('#title').html('Howdy ' + name);
});