import { generateUUID } from "../../shared/utils.js";
import { BaseComponent } from "../base_component.js";
import { Context, WidgetContextEntry } from "../context.js";

export class Widget extends BaseComponent{
    constructor(template = (self,body) =>{},onDestroy = (self,body) => {}) {
        super();

        this.data = {
            ...this.data,
            "template":template,
            "onDestroy":onDestroy,
        }
    }

    destroy(){
        if(!this.data.onDestroy){
            return;
        }

        this.data.onDestroy(this,this.data.body);
    }

    build(){
        const body = this.data.body
        body.innerHTML = "";

        if(this.data.template){
            this.data.template(this,body);
        }

        const context_id = generateUUID();
        body.setAttribute("data-context_id",context_id);

        const context = new Context();
        context.addWidgetContextEntries(new WidgetContextEntry(this.data.id,context_id,this));
        
        return body;
    }

    non_build(){
        return this.data.body;
    }
}