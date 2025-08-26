import { redisClient } from "../../config/redisDB.js";

export const getSetsFromCache = async (queryParams) => {
  try {
    const sets = await redisClient.get(`sets${queryParams}`);
    return sets;
  } catch (error) {
    throw error;
  }
};

export const saveSetsInCache = async (queryParams, sets, expires = 1) => {
  const finalTime = expires * 3600

  try {
    await redisClient.setEx(`sets${queryParams}`, finalTime, sets);
  } catch (error) {
    throw error;
  }
};
