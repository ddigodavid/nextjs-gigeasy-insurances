import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

export default function NavLink({
	href,
	children
}: {
	href: string;
	children: ReactNode;
}) {
	return (
		<Link
			className="bg-teal-800 rounded-lg px-3 py-2 hover:bg-teal-700 cursor-pointer text-teal-300 hover:text-teal-200"
			href={href}
		>
			{children}
		</Link>
	);
}