class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
        return this;
    }

    emit(event, ...args) {
        if (!this.events[event]) return false;

        this.events[event].forEach(listener => listener(...args));
        return true;
    }

    off(event, listener) {
        if (!this.events[event]) return this;

        this.events[event] = this.events[event].filter(l => l !== listener);
        return this;
    }
}

const emitter = new EventEmitter();
emitter.on('greet', name => console.log('Hello ' + name));
emitter.emit('greet', 'Sara'); // Hello Sara