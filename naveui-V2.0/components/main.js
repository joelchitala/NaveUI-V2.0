import { observer } from "./observer.js"

export const runApp = (dom_element, app) =>{
    dom_element.append(app.build())

    observer.observe(dom_element, {
        attributes: true,
        childList: true,
        subtree: true,
      });
}