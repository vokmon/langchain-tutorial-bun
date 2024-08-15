import { rl } from "~/utils/user-input";

function receiveInput() {
  try{
    rl.question('User: ', async (input: string) => {
      console.log(`User input: ${input}`)
      receiveInput();
    });
  } catch(e) {
    console.error(e);
  }
  
}

receiveInput();