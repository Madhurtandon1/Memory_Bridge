import api from "./api";

export const getMemories = async () => {

  const res =
    await api.get(
      "/memories"
    );

  return res.data;
};

export const getMemoryById =
  async (id) => {

    const res =
      await api.get(
        `/memories/${id}`
      );

    return res.data;
  };

export const createMemory =
  async (data) => {

    const res =
      await api.post(
        "/memories",
        data
      );

    return res.data;
  };

export const updateMemory =
  async (id, data) => {

    const res =
      await api.patch(
        `/memories/${id}`,
        data
      );

    return res.data;
  };

export const deleteMemory =
  async (id) => {

    const res =
      await api.delete(
        `/memories/${id}`
      );

    return res.data;
  };

export const getTimeline =
  async () => {

    const res =
      await api.get(
        "/memories/timeline"
      );

    return res.data;
  };

export const getInsights =
  async () => {

    const res =
      await api.get(
        "/memories/insights"
      );

    return res.data;
  };



  export const searchMemories = async (keyword) => {

  const res = await api.get(
    `/memories/search?keyword=${keyword}`
  );

  return res.data;
};

export const getMemoriesByPerson = async (person) => {

  const res = await api.get(
    `/memories/person/${person}`
  );

  return res.data;
};

export const getMemoriesByEmotion = async (emotion) => {

  const res = await api.get(
    `/memories/emotion/${emotion}`
  );

  return res.data;
};

export const getMemoriesByEvent = async (event) => {

  const res = await api.get(
    `/memories/event/${event}`
  );

  return res.data;
};