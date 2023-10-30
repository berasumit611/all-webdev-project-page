const toggle_icon=document.querySelector(".icon");


toggle_icon.addEventListener('click',function(){
    toggle_icon.classList.toggle('fa-moon');
    toggle_icon.classList.toggle('fa-sun');

    // The contains() method returns true if a node is a descendant of a node.
    //The contains() method returns false if not.
if(toggle_icon.classList.contains('fa-sun')){
    document.body.style.backgroundColor='#141414';
}
else{
    document.body.style.backgroundColor='#e1e1e1';
}

});

