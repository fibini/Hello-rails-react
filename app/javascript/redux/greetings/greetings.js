
const GET_GREETINGS = "greetings/GET_GREETINGS";
const API = "http://127.0.0.1:3000/api/v1/greetings";

function getGreetings() {
  return async (dispatch) => {
    const result = await fetch(API);
    const data = await result.json();
    const greetings = [];
    data.forEach((greeting) => {
      const nextGreeting = {
        greeting: greeting.greeting_greeting,
        id: greeting.greeting_id,
      };
      greetings.push(nextGreeting);
    });
    dispatch({
      type: GET_GREETINGS,
      payload: greetings,
    });
  };
}

export default function greetingsReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
}

export { getGreetings };
