import api from "./api.js";

export const getLifeSummary =
  async () => {

    const res =
      await api.get(
        "/life/summary"
      );

    return res.data;
  };