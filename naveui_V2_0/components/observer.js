import { Context } from "./context.js";

export const observer = new MutationObserver((mutationsList, observer) => {
    const context = new Context();

    for (const mutation of mutationsList) {
        
        if (mutation.type === 'childList') {

            for (let i = 0; i < mutation.removedNodes.length; i++) {
                const node = mutation.removedNodes[i];
                
                const attr = node.attributes;

                if(!attr){
                    continue
                }

                let widget_id = attr["data-widget_id"];
                let context_id = attr["data-context_id"];

                if(!widget_id || !context_id){
                    continue;
                }

                context.removeWidgetContextEntry(widget_id.value,context_id.value);
            }
        }
    }
});

