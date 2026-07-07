import { setAuthTokenGetter } from "@workspace/api-client-react";
import { getToken } from "./auth";

export function initApi() {
  setAuthTokenGetter(() => getToken());
}
