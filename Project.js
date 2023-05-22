const colors=['red','green','purple','yellow','blue','orange','pink','brown','grey','white','lime','indigo'];

function changeColor(){
    const colorIndex=parseInt(Math.random()*colors.length)
    document.body.style.background=colors[colorIndex];
}
