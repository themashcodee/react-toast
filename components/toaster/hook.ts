import { useCallback, useContext, useEffect, useRef } from "react"
import { ToastPayload } from "."
import { nanoid } from "nanoid"
import { context } from "./state"
import { TIMEOUT } from "./utils"

export const useToaster = () => {
	const { setToasts } = useContext(context)

	function toast(input: ToastPayload) {
		setToasts((toasts) => [{ ...input, id: nanoid(), height: 0 }, ...toasts])
	}

	return { toast }
}

export const useToastTimer = (id: string) => {
	const cancelRef = useRef<ReturnType<typeof setTimeout> | null>(null)
	const { setToasts } = useContext(context)

	const removeToast = useCallback(
		(id: string) => {
			setToasts((prev) => {
				return prev.filter((toast) => toast.id !== id)
			})
		},
		[setToasts]
	)

	const clearToast = useCallback(() => {
		if (cancelRef.current) clearTimeout(cancelRef.current)
		removeToast(id)
	}, [removeToast, id])

	useEffect(() => {
		cancelRef.current = setTimeout(() => clearToast(), TIMEOUT)

		return () => {
			if (cancelRef.current) clearTimeout(cancelRef.current)
		}
	}, [clearToast])

	return { clearToast }
}
