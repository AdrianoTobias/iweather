import { render, screen, waitFor } from "@testing-library/react-native"
import { Routes } from "."

describe("Routes", () => {
  it('should be render Search screen when not city selecte', async () => {
    const { debug } = render(
      <Routes />
    )

    const title = await waitFor(() => screen.findByText(/^escolha um local/i))

    expect(title).toBeTruthy()
  })
})