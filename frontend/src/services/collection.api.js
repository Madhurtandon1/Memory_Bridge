import api from "./api";

export const getCollections =
  async () => {

    const res =
      await api.get(
        "/collections"
      );

    return res.data;
  };

export const createCollection =
  async (data) => {

    const res =
      await api.post(
        "/collections",
        data
      );

    return res.data;
  };

export const deleteCollection =
  async (id) => {

    const res =
      await api.delete(
        `/collections/${id}`
      );

    return res.data;
  };


  export const updateCollection =
  async (id, data) => {

    const res =
      await api.patch(
        `/collections/${id}`,
        data
      );

    return res.data;
  };