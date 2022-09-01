const terminal = document.querySelector("#terminal");
const inputDiv = document.querySelector("#input");

const help = "Type <span class='text-orange-400'> help </span> For Command List. <br><br>";
const introMessage = "Mats Terminal (MT) Not A Corperation.";
const inputElements =
`
<p class="text-green-400">visitor<span class="text-orange-400">@</span>mat'sTerminal:~$</p>
<input id="cmd" type="text" autofocus class="pl-[5px] text-orange-300 bg-transparent font-mono">
`;
let inputtedcommand = `visitor@mat'sTermonal:~$`;
const welcome = `Welcome to my interactive web terminal.`;

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

function prependToDOM(message,color){
    let print = `<p class="font-mono text-${color}">${message}</p>`
    let dom = document.createElement('div');
    dom.innerHTML = print;
    terminal.prepend(dom);
};
function appendToDOM(message,color){
    let print = `<p class="font-mono text-${color}">${message}</p>`
    let dom = document.createElement('div');
    dom.innerHTML = print;
    terminal.appendChild(dom);
};
function init(){
    prependToDOM(help,"gray-400");
    prependToDOM(welcome, "gray-200")
    prependToDOM(commands.banner)
    prependToDOM(introMessage,"white")

    let input = document.createElement('div');
    input.classList.add("flex");
    input.innerHTML = inputElements;
    inputDiv.appendChild(input);
};
function getCommand(input){
    switch(input){
        case "help":{
            appendToDOM("Help","white");
            return;
        };
        case "socials":{

            return;
        };
        case "projects":{

            return;
        };
        case "email":{

            return;
        };
        case "banner":{

            return
        };
        case "whoami":{

            return
        };
        case "clear":{

            return
        };
        case "whoareyou":{

            return
        };
        case "history":{

            return
        };
    }
}

init();

let cmd = document.querySelector("#cmd");

cmd.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    getCommand((cmd.value).toLowerCase());
  }  
});