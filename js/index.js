const cut_connection = document.querySelector('.cut-connection');
const connection_lost = document.querySelector('.connection-lost-container');

setTimeout(()=>{
    addClass();
},4000);

// console.log(connection_lost);
function addClass(){
    connection_lost.classList.add('active');
    connection_lost.addEventListener('click',()=>{
        if(connection_lost.classList.contains('active')){
            connection_lost.classList.remove('active');
        }else{
            connection_lost.classList.add('active');
        }
    })
}