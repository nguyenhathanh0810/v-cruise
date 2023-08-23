import { useEffect } from "react"

export function useDocumentNoScroll(isActive) {
  useEffect(() => {
    if (!isActive) return

    const [$body, $html] = [document.body, document.body.parentElement]
    const [bodyOverflow, htmlOverflow] = [
      $body.style.overflow,
      $html.style.overflow,
    ]
    $body.style.overflow = "hidden"
    $html.style.overflow = "hidden"

    return function () {
      $body.style.overflow = bodyOverflow
      $html.style.overflow = htmlOverflow
    }
  }, [isActive])
}
