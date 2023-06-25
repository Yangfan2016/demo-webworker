function longTask() {
    return new Promise((rs, rj) => {
        setTimeout(() => {
            rs(Math.random())
        }, 3e3)
    })
}

self.addEventListener('message', (ev) => {
    longTask().then(res => {
        self.postMessage({
            message: 'long-task',
            data: res
        })
    })
});