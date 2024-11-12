import { generateUUID } from "../shared/utils.js";

export class BaseComponent {
    constructor() {
        this.data = {
            "id":generateUUID(),
            "body":document.createElement('div'),
        }
        
        this.data.body.setAttribute("data-widget_id", this.data.id);
    }
}