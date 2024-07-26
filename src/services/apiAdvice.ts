// import axiosInstance from "../axios/axiosInstance";

// interface AdviceResponse {
//   slip: {
//     id: number;
//     advice: string;
//   };
// }

export const getAdvice = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    return data
  } catch (error) {
    console.error(error);
    throw new Error("Advice could not be loaded");
  }
};
