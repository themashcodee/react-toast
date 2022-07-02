import { useState } from "react"
import { ComponentWithoutTag } from "."
import { Toast } from "./types"
import { Toaster } from "./component"
import { StateProvider } from "./state"

export const ToastProvider: ComponentWithoutTag = ({ children }) => {
	const [toasts, setToasts] = useState<Toast[]>([])

	return (
		<StateProvider value={{ setToasts, toasts }}>
			<Toaster />
			{children}
		</StateProvider>
	)
}
