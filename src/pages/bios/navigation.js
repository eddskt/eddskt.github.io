import { Main } from "../bios/Main"
import { Theme } from "../bios/Theme";

export const biosNav = [
  {
    path: "/", name: "Bios", element: <Main />, isMenu: true, isPrivate: false
  },
  {
    path: "/theme", name: "Tema", element: <Theme />, isMenu: true, isPrivate: false
  }
]
