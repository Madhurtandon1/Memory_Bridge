import api from "./api";

export const createChatSession =
  async () => {

    const res =
      await api.post(
        "/chat/session"
      );

    return res.data;
  };

export const getChatSessions =
  async () => {

    const res =
      await api.get(
        "/chat/sessions"
      );

    return res.data;
  };

export const getMessages =
  async (sessionId) => {

    const res =
      await api.get(
        `/chat/session/${sessionId}`
      );

    return res.data;
  };

export const sendMessage =
  async (
    sessionId,
    message
  ) => {

    const res =
      await api.post(
        `/chat/session/${sessionId}/message`,
        { message }
      );

    return res.data;
  };

export const askQuestion =
  async (question) => {

    const res =
      await api.post(
        "/chat/ask",
        { question }
      );

    return res.data;
  };



  export const renameChat = async (
  sessionId,
  title
) => {

  const res = await api.patch(
    `/chat/sessions/${sessionId}`,
    { title }
  );

  return res.data;
};


export const deleteChat = async (
  sessionId
) => {

  const res = await api.delete(
    `/chat/sessions/${sessionId}`
  );

  return res.data;
};

export const deleteAllChats = async () => {

  const res = await api.delete(
    "/chat/sessions"
  );

  return res.data;
};



export const pinChat = async (
  sessionId
) => {

  const res = await api.patch(
    `/chat/sessions/${sessionId}/pin`
  );

  return res.data;
};