import Success from "./images/success.png"
import Error from "./images/error.png"
import Warning from "./images/warning.png"

export const refToGetHeight =
	(callback: (height: number) => void) => (el: HTMLElement | null) => {
		if (el) {
			const boundingRect = el.getBoundingClientRect()
			callback(boundingRect.height)
		}
	}

export const GUTTER = 20
export const TIMEOUT = 5000

export const icons = {
	"success": Success,
	"error": Error,
	"warning": Warning,
}
