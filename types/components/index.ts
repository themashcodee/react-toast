import { ComponentPropsWithRef, ElementType, ReactNode } from "react"

type Children = {
	children?: ReactNode
}

export type Component<K extends ElementType, P = void> = (
	props: ComponentPropsWithRef<K> & P
) => JSX.Element

export type ComponentWithoutTag<P = void> = (
	props: P extends void ? Children : P & Children
) => JSX.Element
