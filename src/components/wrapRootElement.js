import React from "react"
import { Provider } from "./provider"

export const wrapRootElement = ({ element }) => (
  <Provider>{element}</Provider>
)
