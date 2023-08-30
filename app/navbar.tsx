import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
} from "@nextui-org/navbar";
import { GithubIcon } from "@/components/icons";
import { Link } from "@nextui-org/link";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import { ThemeSwitch } from "@/app/theme-switch";

export const Navbar = () => {
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<MagnifyingGlassIcon className="flex-shrink-0 w-6 text-base pointer-events-none text-default-400" />
			}
			type="search"
		/>
	);

	return (
		<NextUINavbar isBlurred={false} maxWidth="xl" position="sticky" className="absolute top-0 bg-transparent">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<p className="text-2xl cursor-default select-none">👊</p>
					<Link className="flex items-center justify-start gap-2 text-foreground" href="/">
						<p className="font-bold text-inherit">Goal Trackr</p>
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="pl-4 basis-1" justify="end">
				<ThemeSwitch />
				<Link href="https://github.com/shawnlong636" target="__blank">
					<GithubIcon size={24} className="text-foreground"/>
				</Link>
			</NavbarContent>
		</NextUINavbar>
	);
};
