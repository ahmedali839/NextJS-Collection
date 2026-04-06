export async function getNormalData() {
  console.log("NORMAL FUNCTION EXECUTED");

  await new Promise((r) => setTimeout(r, 1000));

  if (Math.random() < 0.5) {
    throw new Error("Random normal error");
  }

  return {
    time: Date.now(),
  };
}
