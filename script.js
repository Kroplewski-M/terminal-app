const terminal = document.querySelector("#terminal");


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
     `<p class="text-white font-mono">Mats Terminal (MT) Not A Corperation.</p>`,

    inputElements :
    `
    <p class="text-green-400">visitor<span class="text-orange-400">@</span>mat'sTerminal:~$</p>
    <input type="text" autofocus class="pl-[5px] text-orange-300 bg-transparent font-mono">
    `,
    helpMessage:
    `
        <p class="text-gray-300 font-mono">Type <span class="text-orange-400"> help </span> For Command List</p>
        <br><br>
    `
}


function init(){
    let help = document.createElement('div');
    help.innerHTML = messages.helpMessage;
    terminal.prepend(help);

    let banner = document.createElement('div');
    banner.innerHTML = commands.banner;
    terminal.prepend(banner);

    let intro = document.createElement('div');
    intro.innerHTML = messages.introMessage;
    terminal.prepend(intro);

    let input = document.createElement('div');
    input.classList.add("flex");
    input.innerHTML = messages.inputElements;
    terminal.appendChild(input);
}
init();
