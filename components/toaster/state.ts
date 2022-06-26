import { createContext, Dispatch, SetStateAction } from "react"
import { Toast } from "components/toaster"

export type StoreType = {
	toasts: Toast[]
	setToasts: Dispatch<SetStateAction<Toast[]>>
}

export const defaultStateValue: StoreType = {
	toasts: [],
	setToasts: () => undefined,
}
export const context = createContext(defaultStateValue)
export const { Provider: StateProvider, Consumer } = context
