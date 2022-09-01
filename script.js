const terminal = document.querySelector("#terminal");
const inputDiv = document.querySelector("#input");

const help = "Type <span class='text-orange-400'> help </span> For Command List. <br><br>";
const introMessage = "MKs Terminal (MT) Not A Corperation.";
let inputtedcommand = `visitor<span class="text-orange-400">@</span>mk'sTermonal:~$`;
const welcome = `Welcome to my interactive web terminal.`;
const inputElements =
`
<p class="text-green-400">${inputtedcommand}</p>
<input id="cmd" type="text" autofocus class="pl-[5px] text-orange-400 bg-transparent font-mono">
`;
const banner = `
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
`;
let cmdHistory = [];


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
    prependToDOM(banner)
    prependToDOM(introMessage,"white")

    let input = document.createElement('div');
    input.classList.add("flex");
    input.innerHTML = inputElements;
    inputDiv.appendChild(input);
};
function getCommand(input){
    switch(input){
        case "help":{
            const helpMessage=
            `
                <div class="font-mono">
                    <p class="text-white">All Commands:</p>
                    <ul class="text-orange-400">
                        <li>socials</li>
                        <li>projects</li>
                        <li>email</li>
                        <li>banner</li>
                        <li>whoami</li>
                        <li>whoareyou</li>
                        <li>history</li>
                        <li>clear</li>
                    </ul>
                </div>
            `;
            appendToDOM(helpMessage,"white");
            return;
        };
        case "socials":{
            const socials=
            `
             <div class="flex flex-col text-orange-400 pt-5 font-mono">
                <a target="_blank" href="https://github.com/Kroplewski-M">Github - Kroplewski-M</a>
                <a target="_blank" href="https://www.linkedin.com/in/mateusz-kroplewski-732239176/">Linkedin - Mateusz Kroplewski</a>
                <a target="_blank" href="https://www.youtube.com/channel/UCh3UVK4hMRL_K0swKBg_BVA">YouTube - WebDevMat</a>
             </div>

            `;
            appendToDOM(socials,'orange-400')
            return;
        };
        case "projects":{
            const projects=
            `
             <div class="flex flex-col space-y-1 text-orange-400 pt-5 font-mono">
                <a target="_blank" href="https://github.com/Kroplewski-M/movie-app">Movie App</a>
                <a target="_blank" href="https://github.com/Kroplewski-M/quiz-app">Quiz App</a>
                <a target="_blank" href="https://github.com/Kroplewski-M/simple-music-app">Music App</a>
                <a target="_blank" href="https://github.com/Kroplewski-M/Weather-App">Weather App</a>

             </div>

            `;
            appendToDOM(projects,'orange-400');
            return;
        };
        case "email":{
            const email = `<a class="font-mono" href = "mailto: m.kroplewski.contact@gmail.com">Email for Work</a>`;
            appendToDOM(email,'orange-400');
            return;
        };
        case "banner":{
            appendToDOM(banner,"");
            return;
        };
        case "whoami":{
            const whoami = 
            `
            <p class="max-w-[700px] text-orange-400 pt-5 font-mono">
                Hi, Im Mateusz Kroplewski a front-end developer from the UK. I have a passion for web programming 
                which originated from game development. I love creating challenging fun projects and looking back
                how it all just was an empty repo at the beggining.I am currently studying web programming at 
                Huddersfield University. Apart from coding i love going to the gym and lifting weights.
            </p>
            `;
            appendToDOM(whoami, "orange-400");
            return;
        };
        case "clear":{
            terminal.innerHTML = "";
            return;
        };
        case "whoareyou":{
            const whoareyou = 
            `
            <pre class=" text-orange-400 pt-5 font-mono">
Hadvar:	"Wait. You there. Step forward. Who are you..."
...
Hadvar:	"Captain. What should we do? He/she's not on the list."
Captain:"Forget the list. He/she goes to the block."
Hadvar:	"By your orders, Captain."
            </pre>
            `;
            appendToDOM(whoareyou,"");
            return;
        };
        case "history":{
            for(const cmd in cmdHistory){
                appendToDOM(cmdHistory[cmd], "orange-400");
            }
            return;
        };
        default:{
            const error = `<p class="text-red-500/70 font-mono">invalid command, type <span class="text-orange-400">help</span> to view all commands. </p>`;
            appendToDOM(error);
        }
    }
}

init();

let cmd = document.querySelector("#cmd");

cmd.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    cmdHistory.push(cmd.value);
    const command = `<span class="text-orange-400 pl-[10px]">${cmd.value}</span>`;
    appendToDOM(inputtedcommand + command,"green-400");
    getCommand((cmd.value).toLowerCase());
    cmd.value = "";
  }  
});