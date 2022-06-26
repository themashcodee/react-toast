export type Toast = {
	id: string
	message: string
	type: "success" | "error" | "warning"
	height: number
}
export type ToastPayload = Omit<Toast, "id" | "height">
