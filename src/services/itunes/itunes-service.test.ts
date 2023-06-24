import { it, describe, expect, vi } from "vitest";
import { ITUNES_URL, fetchAlbums } from "./itunes-service";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("Test Itunes API Service", () => {
  it("should return music albums from itunes", async () => {
    const albums = await fetchAlbums();
    expect(albums.length).toBeDefined();
    expect(albums.length).toBeGreaterThan(0);
  });
  it("should throw an error if service return 500", async () => {
    global.fetch = vi
      .fn()
      .mockRejectedValue(
        new Error("Failed to fetch albums. Please try again later.")
      );

    server.use(
      rest.get(ITUNES_URL, (_, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: "Server error" }));
      })
    );

    await expect(fetchAlbums()).rejects.toThrow(
      new Error("Failed to fetch albums. Please try again later.")
    );
  });
});
