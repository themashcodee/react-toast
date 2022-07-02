import React, { forwardRef, memo, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Toast as ToastType } from "./types"
import Image from "next/image"
import { Cancel } from "./icons"
import { icons } from "./utils"
import { useToastTimer } from "./hook"

type P = {
	toast: ToastType
	top: number
	index: number
}

export const Toast = memo(
	forwardRef<HTMLLIElement, P>(({ index, toast, top }, ref) => {
		const controls = useAnimation()
		const { clearToast } = useToastTimer(toast.id)

		useEffect(() => {
			controls.start({ bottom: -top - toast.height })
		}, [top, toast.height, controls])

		return (
			<motion.li
				ref={ref}
				initial={{ bottom: 0 }}
				animate={controls}
				exit={{ bottom: -top, opacity: 0, scale: 0.2 }}
				transition={{ duration: 0.3 }}
				className="p-4 rounded-md bg-white flex items-center gap-4 drop-shadow-md w-full absolute overflow-hidden"
				style={{
					zIndex: 1000 - index,
				}}
			>
				<span className="w-6 h-6 relative shrink-0">
					<Image
						src={icons[toast.type]}
						alt="success"
						layout="fill"
						objectFit="contain"
					/>
				</span>

				<span className="w-full break-all">{toast.message}</span>

				<span
					onClick={clearToast}
					className="cursor-pointer hover:bg-red-100 rounded-full p-1 shrink-0"
				>
					<Cancel />
				</span>
			</motion.li>
		)
	})
)

Toast.displayName = "Toast Component"
