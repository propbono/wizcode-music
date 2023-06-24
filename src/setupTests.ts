import { server } from "./mocks/server";
import { afterAll, afterEach, beforeAll } from "vitest";
import "@testing-library/jest-dom";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
