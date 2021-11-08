let soares_editor = {
    editor:document.querySelectorAll('.editor'),
    buttons: {
        'p': {
            name: 'p',
            atribute:false
        },
        'h1': {
            name: 'h1',
            atribute:false
        },
        'h2': {
            name: 'h2',
            atribute:false
        },
        'h3': {
            name: 'h3',
            atribute:false
        },
        'h4': {
            name: 'h4',
            atribute:false
        },
        'h5': {
            name: 'h5',
            atribute:false
        },
        'h6': {
            name: 'h6',
            atribute:false
        },
        'span': {
            name: 'span',
            atribute:false
        },
        'block': {
            name: 'block',
            atribute:false
        },
        'img': {
            name: 'img',
            atribute:false
        }, 
        'br' : {
            name: 'Break-line',
            atribute:false
        }
    },
    loadEditor(){
     this.editor.forEach((tagHTML, index_tag) =>{
          for ( let button in soares_editor.buttons){
              let new_element = document.createElement('button');
              new_element.innerText = soares_editor.buttons[button].name;
              tagHTML.appendChild(new_element);

              new_element.onclick = (e)=> {
                  let tag = document.createElement(button);
                  tag.style.border = " 1px solid #ccc";
                  tag.setAttribute('contenteditable', true);
                  tagHTML.appendChild(tag);
              }
          }
         
     /* let button = document.createElement('')*/
    });
},
init(){
    this.loadEditor();
}
};

soares_editor.init();
    