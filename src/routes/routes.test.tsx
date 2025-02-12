import { render, screen, waitFor } from "@__tests__/utils/customRender"
import { Routes } from "."
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"

describe("Routes", () => {
  it('should be render Search screen when not city selecte', async () => {
    const { debug } = render(
      <Routes />
    )

    const title = await waitFor(() => screen.findByText(/^escolha um local/i))

    expect(title).toBeTruthy()
  })

  it('shoul be render Dashboard screen when has city selected', async () => {
    const city = {
      id: '1',
      name: 'São Paulo',
      latitude: 123,
      longitude: 456
    }

    await saveStorageCity(city)

    const { debug } = render(<Routes />)
    debug()
  })
})