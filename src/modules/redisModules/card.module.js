import { redisClient } from "../../config/redisDB.js";

export const getCardsFromCache = async (queryParams) => {
  try {
    const cards = await redisClient.get(`cards${queryParams}`);
    return cards;
  } catch (error) {
    throw error;
  }
};

export const saveCardsInCache = async (queryParams, cards, expires = 1) => {
  const finalTime = expires * 3600

  try {
    await redisClient.setEx(`cards${queryParams}`, finalTime, cards);
  } catch (error) {
    throw error;
  }
};

export const getCardByIdFromCache = async (id) => {
  try {
    const card = await redisClient.get(`card:${id}`);
    return card;
  } catch (error) {
    throw error;
  }
};

export const saveCardByIdInCache = async (id, card, expires = 1) => {
  const finalTime = expires * 3600

  try {
    await redisClient.setEx(`card:${id}`, finalTime, card);
  } catch (error) {
    throw error;
  }
};
