
    import { _runtime$ } from "./Store.js";

    window._runtime$ = _runtime$

    const templates = document.querySelectorAll("template[sv\\:key]")
    for(const tag of templates) {
        const id  = tag.getAttribute('sv:key')
        console.log(`/chunck/${id}.js`)
        const app = await import(`/chunck/${id}.js`)
        const _el$ = tag.nextSibling
        app.default()(_el$);
    }
    const events = ["click"]
    for(const event of events) {
        window.addEventListener(event, (e) => {
            const target = e.target
            const handler = target[`$$${event}`]
            if(handler) handler()
        })
    }