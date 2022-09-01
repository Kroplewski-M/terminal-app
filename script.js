const terminal = document.querySelector("#terminal");
const help = "Type <span class='text-orange-400'> help </span> For Command List";
const introMessage = "Mats Terminal (MT) Not A Corperation.";

const commands={
    banner : `
    <pre class="text-blue-300">     
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&                         &&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&   &&      &&  &&   &&   &&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&   &&&    &&&  &&  &&    &&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&   &&&&  &&&&  &&&&&     &&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&   &&  &&  &&  &&  &&&   &&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&   &&   &  &&  &&    &&  &&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
</pre>
<br>
    `
};
const messages={
     introMessage : 
     `<p class="text-white font-mono"></p>`,

    inputElements :
    `
    <p class="text-green-400">visitor<span class="text-orange-400">@</span>mat'sTerminal:~$</p>
    <input type="text" autofocus class="pl-[5px] text-orange-300 bg-transparent font-mono">
    `,
};

function printToDOM(message,color){
    let print = `<p class="font-mono text-${color}">${message}</p>`
    let dom = document.createElement('div');
    dom.innerHTML = print;
    terminal.prepend(dom);
}


function init(){
    printToDOM(help,"gray-400");
    printToDOM(commands.banner)
    printToDOM(introMessage,"white")

    let input = document.createElement('div');
    input.classList.add("flex");
    input.innerHTML = messages.inputElements;
    terminal.appendChild(input);
}
init();
