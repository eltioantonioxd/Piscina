let x = document.createElement("script");
x.src = "https://unpkg.com/socket.io@4.1.2/client-dist/socket.io.js";
document.querySelector("body").appendChild(x);

x.addEventListener("load", () => {
  //2 - Crear socket
  let socket = io("http://localhost:3000");
  let terminal = document.querySelector(
    ".code_panel__serial__content__text.js-code_panel__serial__text.js-code_editor__serial-monitor__content"
  );
terminal.addEventListener("DOMSubtreeModified", () => {
  let info = terminal.innerText.split('***')
  let last = info[info.length-1]
  if (last.slice(last.length-3,last.length) === '}\r\n'){
    const data = JSON.parse(last)
    console.log(data)
    socket.emit("terminal:write", data)
  }
    });
});
