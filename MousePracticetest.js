document.addEventListener('mousemove', function(e) {
    //console.log(e.pageX, e.pageY);
    const r = Math.round(e.pageX * 255 / window.innerWidth);
    const d = Math.round(e.pageY * 255 / window.innerHeight);
    const color = `rgb(${r}, 0, ${d})`;
    document.body.style.backgroundColor = color; 
    console.log(color);
});