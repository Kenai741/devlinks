function toggleMode() {
  const html = document.documentElement

  console.log(html.classList)
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light-new.png")
    img.setAttribute("alt", "Imagem de perfil Light Mode")
  } else {
    img.setAttribute("src", "./assets/avatar-dark-new.png")
    img.setAttribute("alt", "Imagem de perfil Dark Mode")
  }
}
