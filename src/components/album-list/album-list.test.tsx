import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { AlbumList } from "./album-list";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

beforeEach(() => {
  render(
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AlbumList />
      </RecoilRoot>
    </QueryClientProvider>
  );
});

describe("album list component tests", async () => {
  it("Should have a title", () => {
    const h2 = screen.getByText("Top Albums");

    expect(h2).toBeInTheDocument();
  });

  it("should render an album list", async () => {
    const album1 = await screen.findByText("chemistry");
    const album2 = await screen.findByText(
      "Mystical Magical Rhythmical Radical Ride"
    );

    expect(album1).toBeInTheDocument();
    expect(album2).toBeInTheDocument();
  });

  it("should display error message when fetch throws error", async () => {
    const errorMessage = await screen.findByText(
      "Failed to fetch albums. Please try again later."
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
