while (true) {
  await new Promise(r => setTimeout(r, 5000));
  const { init } = await import('./index.js?' + Math.random());
  await init();
}
