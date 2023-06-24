import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { AlbumList } from "./album-list";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

describe("album list component tests", async () => {
  it("Should have a title", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <AlbumList />
        </RecoilRoot>
      </QueryClientProvider>
    );
    const h2 = screen.getByText("Top 100 Albums");

    expect(h2).toBeInTheDocument();
  });

  it("should render an album list", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <AlbumList />
        </RecoilRoot>
      </QueryClientProvider>
    );

    const album1 = await screen.findByText("chemistry");
    const album2 = await screen.findByText(
      "Mystical Magical Rhythmical Radical Ride"
    );

    expect(album1).toBeInDocument();
    expect(album2).toBeInDocument();
  });
});
