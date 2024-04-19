import axios from "axios";

export const ENROLL_EVENT = async (payload) => {
  console.log(payload);
  try {
    const res = await axios.post(
      `https://www.saltlake.egoras.com/crypto-event/register/for/event`,
      payload
    );
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};

export const FETCH_EVENT_STAT = async (address) => {
  try {
    const res = await axios.get(
      `https://www.saltlake.egoras.com/crypto-event/fetch/user/event/${address}`
    );
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
