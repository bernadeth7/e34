window.onload=function(){
    //create a key value pair of colors
    const colors={
        'orange':'rgb(232, 109, 22)', 
        'green': 'rgb(15, 143, 15)',
        'red' : 'rgb(249, 8, 8)'
    }
    // select a default background color
    var bg_color = colors['orange'];
    // console.log(bg_color);
    // create a function that will draw circle
    function create(event){
        // console.log('mouse click!');
        let el=document.createElement('p');
        let size=Math.floor(Math.random()*(200-10+1))+10;
        //add style to el
        el.style.position='absolute';
        el.style.left = event.clientX+'px';
        el.style.top = event.clientY+'px';
        el.style.width=size+'px';
        el.style.height=size+'px';
        el.style.backgroundColor=bg_color;
        el.style.borderRadius=Math.floor(size/2)+'px';
        //add classname for the element that will be created
        el.className="round";
        document.body.appendChild(el);//add el to the body after last child
    }
    //create an event listener for click to call function create 
    document.addEventListener('click',create);
    // reload the page by using document
    document.getElementById('reset').addEventListener('click',function(){
        window.location.reload();
    });
    //click color
    var button=document.getElementsByClassName('btn');
    for(let i=0;i<3;i++){
        button[i].onclick = function (e){
            e.stopPropagation();
            highlight(colors[this.innerText]);
        }
    }
    //render color as bg and highlight color
    function highlight(color){
        bg_color=color;
        nodes=document.getElementsByClassName('round');
        for(let i = 0; i<nodes.length;i++){
            if (nodes[i].style.backgroundColor==bg_color){
                nodes[i].style.boxShadow='10px 20px 30px black';
            }
        }
    }
    //shrink and remove
    shrink=function(){
        nodes=document.getElementsByClassName('round');
        for(let i=0; i<nodes.length;i++){
            let height=nodes[i].style.height.replace('px','');
            let width=nodes[i].style.width.replace('px','');
            if(height<=0){
                nodes[i].remove();
            }else{
                nodes[i].style.height=Math.floor(height-2/2)+'px';
                nodes[i].style.width=Math.floor(width-2/2)+'px';
            }
        }
    }
    setInterval(shrink,200);
}