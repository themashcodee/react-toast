import { ComponentPropsWithRef, ElementType, ReactNode } from "react"

export type Toast = {
	id: string
	message: string
	type: "success" | "error" | "warning"
	height: number
}
export type ToastPayload = Omit<Toast, "id" | "height">

type Children = {
	children?: ReactNode
}

export type Component<K extends ElementType, P = void> = (
	props: ComponentPropsWithRef<K> & P
) => JSX.Element

export type ComponentWithoutTag<P = void> = (
	props: P extends void ? Children : P & Children
) => JSX.Element
