import type { CurpApiResponse } from "../types/apiTypes";

export const sendPostMessage = (data: CurpApiResponse) => {
  if (typeof window !== "undefined") {
    window.parent.postMessage(
      {
        type: "curp_verified",
        payload: {
          curp: data,
        },
      },
      "*"
    );
  }
};
