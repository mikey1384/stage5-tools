import openNextWorker from "./.open-next/worker.js";
import { malformedPathResponse } from "./lib/http-request-guard.mjs";

// Preserve the generated Worker's named exports and any additional handlers.
export * from "./.open-next/worker.js";
export default {
  ...openNextWorker,
  fetch(request, env, ctx) {
    return malformedPathResponse(request) ?? openNextWorker.fetch(request, env, ctx);
  },
};
