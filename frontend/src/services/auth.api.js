import api from "./api.js";

export const registerUser = async (
  userData
) => {

  const response =
    await api.post(
      "/auth/register",
      userData
    );

  return response.data;
};

export const loginUser = async (
  credentials
) => {

  const response =
    await api.post(
      "/auth/login",
      credentials
    );

  return response.data;
};

export const getCurrentUser = async () => {

    const response =
      await api.get(
        "/auth/me"
      );

    return response.data;
};


export const updateProfile = async (data) => {

    const res =
      await api.patch(
        "/auth/profile",
        data
      );

    return res.data;
  };

export const changePassword = async (data) => {

    const res =
      await api.patch(
        "/auth/changepassword",
        data
      );

    return res.data;
  };

export const logoutUser = async () => {

  const response =
    await api.post(
      "/auth/logout"
    );

  return response.data;
};  

export const forgotPassword = async (
  email
) => {

  const res =
    await api.post(
      "/auth/forgot-password",
      { email }
    );

  return res.data;
};

export const resetPassword = async (
  token,
  password
) => {

  const res =
    await api.post(
      `/auth/reset-password/${token}`,
      { password }
    );

  return res.data;
};

export const deleteAccount =
async (password) => {

  const res =
    await api.delete(
      "/auth/delete-account",
      {
        data: {
          password
        }
      }
    );

  return res.data;

};

