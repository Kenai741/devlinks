function toggleMode() {
  const html = document.documentElement

  console.log(html.classList)

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  console.log(img)

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Imagem de perfil Light Mode")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Imagem de perfil Dark Mode")
  }
}
