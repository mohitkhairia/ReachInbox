import { readAndCategorizeEmails } from './emailProcessor';

async function main() {
  try {

    await readAndCategorizeEmails();
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
