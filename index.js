
export async function init(program) {
    const { increment, events, counter } = await import("./sthg.js?" + Math.random());
    console.log('initial counter: ', counter);
    console.log('initial event names: ', events.eventNames());
    events.on('msg', m => {
        console.log('event 1:', m)
    })
    events.on('msg', m => {
        console.log('event 2:', m)
    })

    events.emit('msg', 'hi there');

    increment();

    console.log('end event names: ', events.eventNames());
}