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
export const FETCH_ALL_EVENT_STAT = async () => {
  try {
    const res = await axios.get(
      `https://www.saltlake.egoras.com/crypto-event/get/general/stats`
    );
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const FETCH_Referral_LEADERBOARD_STAT = async () => {
  try {
    const res = await axios.get(
      `https://www.saltlake.egoras.com/crypto-event/get/referal/leaderboard`
    );
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const FETCH_LEADERBOARD_STAT = async () => {
  try {
    const res = await axios.get(
      `https://www.saltlake.egoras.com/crypto-event/fetch/all/events`
    );
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const FETCH_REFERRAL_STAT = async (address) => {
  try {
    const res = await axios.get(
      `https://www.saltlake.egoras.com/crypto-event/get/referal/count/${address}`
    );
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const FETCH_USER_FARM_TRANSACTIONS = async (address) => {
  try {
    const res = await axios.get(
      `https://dataseed.egoras.com/web3/fetch/transactions/${address}`
    );
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
