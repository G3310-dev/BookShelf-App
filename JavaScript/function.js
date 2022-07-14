const add = document.getElementById('addBtn');
const floating = document.getElementById('floating');

add.addEventListener('click', function(event){
    if(floating.classList.contains('visible')){
        floating.classList.remove('visible');
    } else {
        floating.classList.add('visible');
    }
})