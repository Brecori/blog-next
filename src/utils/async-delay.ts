export async function asyncDelay(milisseconds: number = 0, verbose = false) {
  if (milisseconds <= 0) return;

  if (verbose) {
    console.log(`Simulating wait of ${milisseconds}ms...`);
  }

  await new Promise((resolve) => setTimeout(resolve, milisseconds));
}
