import { rest } from "msw";
import { ITUNES_SAMPLE_RES } from "./itunes-sample-response";
import { ITUNES_URL } from "../services/itunes/itunes-service";

export const handlers = [
  rest.get(ITUNES_URL, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(ITUNES_SAMPLE_RES));
  }),
];
