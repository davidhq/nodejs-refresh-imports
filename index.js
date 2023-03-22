export async function init(program) {
  const rnd = Math.random();

  const { increment, events, counter } = await import('./sthg.js?' + rnd);

  console.log('initial counter: ', counter);
  console.log('initial event names: ', events.eventNames());

  events.on('msg', m => {
    console.log('event 1:', m);
  });

  events.on('msg', m => {
    console.log('event 2:', m);
  });

  setInterval(() => {
    events.emit('msg', `hi there from ${rnd}`);
  }, 1000);

  increment();

  console.log('end event names: ', events.eventNames());
}
