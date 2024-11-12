import { Intent } from "./intent.js";
import { App } from "./sub_components/app.js"

export const pushNavigator = (widget, intent, build = true) =>{
    const app = new App();

    app.pushWidget(widget);
    app.addIntent(intent);

    build ? app.build() : app.non_build();
}


export const pushNamed = (path, intent, build = true) =>{
    const app = new App();

    app.setCurrentRoute(path);
    app.addIntent(intent);

   build ? app.build() : app.non_build();
}

export const popNavigator = (build = false) =>{
    const app = new App();

    app.popWidget();

    build ? app.build() : app.non_build();
}

export const getIntent = (name) =>{
    const app = new App();

    return app.getIntent(name);
}

export const createIntent = (name,payload) =>{
    return new Intent(name,payload);
}