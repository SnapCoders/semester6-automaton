async function delay(time = 1000) {
  await new Promise(resolve => setTimeout(resolve, time));
}

export default delay;
