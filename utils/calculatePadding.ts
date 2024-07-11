export const addPadding = () => {
    const site = document.getElementById("site-container") as HTMLElement
    const body = document.querySelector("body") as HTMLBodyElement
    const fixedBlock = document.querySelectorAll<HTMLElement>(`[data-style="padding-lock"]`)

    const paddingRight = window.innerWidth - site.offsetWidth + "px"

    body.classList.add("no-scroll")
    body.style.paddingRight = paddingRight

    if (fixedBlock) {
        fixedBlock.forEach((el) => {
            el.style.paddingRight = paddingRight
        })
    }
}

export const removePadding = () => {
    const body = document.querySelector("body") as HTMLElement
    const fixedBlock = document.querySelectorAll<HTMLElement>(`[data-style="padding-lock"]`)

    body.classList.remove("no-scroll")
    body.style.paddingRight = "0"

    if (fixedBlock) {
        fixedBlock.forEach((el) => {
            el.style.paddingRight = "0"
        })
    }
}
