import api from "./api";

export const getLifeSummary =
  async () => {

    const res =
      await api.get(
        "/life/summary"
      );

    return res.data;
  };