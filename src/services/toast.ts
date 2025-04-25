import Toast from "typescript-toastify";

export const showToast = (
  message: string,
  type: "success" | "error" | "info" | "warning" = "info"
) => {
  const toast = new Toast({
    position: "top-right",
    toastMsg: message,
    autoCloseTime: 4000,
    canClose: true,
    showProgress: true,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    type,
    theme: "light",
  });
};
