"use client"

import {
	Box,
	Flex,
	useColorModeValue,
	Image
} from "@chakra-ui/react";
import NavLink from "./NavLink";
import GigEasyLogo from "@/assets/Logo.svg"
import Link from "next/link";

export default function NavBar() {
	const navLinkColor = useColorModeValue("teal.500", "teal.200");
	return (
		<>
			<Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
				<Flex h={16} alignItems={"center"} className="space-x-5">
					<Link href="/">
						<GigEasyLogo />
					</Link>
					<NavLink href="/">
						Home
					</NavLink>
					<NavLink href="/insurances">
						Insurances
					</NavLink>
				</Flex>
			</Box>
		</>
	)
}