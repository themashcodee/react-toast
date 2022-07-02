import React, { useContext } from "react"
import { Toast } from "./toast"
import { Portal } from "./portal"
import { context } from "./state"
import { GUTTER, refToGetHeight } from "./utils"
import { AnimatePresence } from "framer-motion"

export const Toaster = () => {
	const { setToasts, toasts } = useContext(context)

	return (
		<Portal idPrefix="toast-component">
			<div className="fixed z-[999999] right-[2%] top-[2%] transform w-[96%] max-w-sm">
				<ul className="relative w-full">
					<AnimatePresence>
						{toasts.map((toast, i) => {
							const ref = toast.height
								? undefined
								: refToGetHeight((height) => {
										setToasts(() => {
											return toasts.map((t) => {
												if (t.id === toast.id) return { ...toast, height }
												return t
											})
										})
								  })

							const top = toasts.slice(0, i).reduce((sum, t) => {
								return sum + t.height
							}, 0)

							return (
								<Toast
									ref={ref}
									index={i}
									top={top + (i + 1) * GUTTER}
									key={toast.id}
									toast={toast}
								/>
							)
						})}
					</AnimatePresence>
				</ul>
			</div>
		</Portal>
	)
}
