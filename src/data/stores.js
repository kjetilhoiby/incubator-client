import { writable, derived } from 'svelte/store';

export let state = writable({});

export let devices = derived(state, (state) => {
    if (state.status) {
        return Object.keys(state.status.devices).map(
            device => state.status.devices[device]
        );
    }
    return [];
})

export let activeSessions = derived(state, (state) => {
    if (state.status) {
        return state.status.activeSessions
    }
    return [];
})