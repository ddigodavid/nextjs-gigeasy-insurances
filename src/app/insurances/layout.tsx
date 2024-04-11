import { ReactNode } from "react";

export default function Layout({
	children
}: {
	children: ReactNode
}) {
	return (
		<div className="pt-4">
			<div className="text-2xl font-bold flex justify-center mb-5">
				<h1>Insurances</h1>
			</div>
			{children}
		</div>
	);
}