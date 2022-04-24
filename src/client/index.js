import Client from './components/Client.svelte';

const elementName = 'incubator-client';
const config = {
    incubator: 'http://192.168.68.86:3000/status',
    title: 'Vaskerom'
}

class IncubatorClient extends HTMLElement {

    constructor() {
        super();
        this.config = config;
    }

    connectedCallback() {
        this.app = new Client({
            target: this,
            props: {
                context: this,
            },
        });
    }
}

if (customElements && customElements.define) {
    if (!window.customElements.get(elementName)) {
        customElements.define(elementName, IncubatorClient);
    }
} else {
    document.registerElement(elementName, {
        prototype: IncubatorClient.prototype,
    });
}