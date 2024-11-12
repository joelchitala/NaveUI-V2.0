import { runApp } from "./naveui-V2_0/components/main.js";
import { App } from "./naveui-V2_0/components/sub_components/app.js";
import { Widget } from "./naveui-V2_0/components/sub_components/widget.js";
import { popNavigator, pushNamed, pushNavigator } from "../naveui_V2_0/components/ui_helpers.js";

const mount = document.querySelector('#mount');

const page_widget_3 = new Widget((self,body)=>{
    body.innerHTML = "Page 3 Widget";

    const pop = document.createElement('button');
    pop.innerText = "Pop"
    pop.onclick = (e) =>{
        popNavigator();
    }

    body.appendChild(pop);

    

}, (self,body)=>{
    console.log("Destoried");
});

runApp(mount,new App('/',
    {
        '/':new Widget((self,body)=>{
            console.log('Built Home Widget');
            
            body.innerHTML = "Home Widget";
            body.innerHTML += `
                <input type="number">
            `;

            const settings_page = document.createElement('button');
            settings_page.innerText = "Settings Page"
            settings_page.onclick = (e) =>{
                pushNamed('/settings');
            }

            body.appendChild(settings_page);

            const page_3_btn = document.createElement('button');
            page_3_btn.innerText = "Page 3 btn"
            page_3_btn.onclick = (e) =>{
                pushNavigator(page_widget_3);
            }

            

            
            body.appendChild(page_3_btn);
        }),
        '/settings': new Widget((self,body)=>{
            body.innerHTML = "Settings Widget";

            const home_page = document.createElement('button');
            home_page.innerText = "Home Page"
            home_page.onclick = (e) =>{
                pushNamed('/');
            }

            body.appendChild(home_page);
        })
    }
));
