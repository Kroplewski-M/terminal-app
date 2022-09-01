const commands={
    banner : `
    <pre class="text-white">     
            .----.
.---------. | == |
|.-"""""-.| |----|
||       || | == |
||       || |----|
|'-.....-'| |::::|
|"")---(""| |___.|
/:::::::::::\" _  "
/:::=======:::\`\`\
 """""""""""""  
</pre>
<br><br>
    `
}



function init(){
    let htmlObject = document.createElement('div');
    htmlObject.innerHTML = commands.banner;
    terminal.prepend(htmlObject);
}
init();
