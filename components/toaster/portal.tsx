import React, { useEffect, useId, useState } from "react"
import { createPortal } from "react-dom"
import { ComponentWithoutTag } from "."

type P = {
	idPrefix?: string
}

export const Portal: ComponentWithoutTag<P> = ({ children, idPrefix = "" }) => {
	const id = useId()
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		const container = document.createElement("div")
		container.id = idPrefix + id
		const body = document.body
		body.prepend(container)
		setLoaded(true)

		return () => {
			body.removeChild(container)
		}
	}, [id, idPrefix])

	return loaded ? (
		createPortal(children, document.getElementById(idPrefix + id)!)
	) : (
		<></>
	)
}
