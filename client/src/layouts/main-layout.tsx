import TooltipLink from "@/components/tooltip-link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Coins, HandCoins, Home, PanelLeft, Receipt } from "lucide-react"
import { Link, Outlet, useLocation } from "react-router-dom"

const MainLayout = () => {
    const location = useLocation()

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                    <Link
                        to='/'
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                        <Coins className="h-4 w-4 transition-all group-hover:scale-110" />
                        <span className="sr-only">Expense Tracker</span>
                    </Link>
                    <TooltipLink
                        to="/"
                        icon={Home}
                        tooltipText="Home"
                        isActive={location.pathname === '/'}
                    />
                    <TooltipLink
                        to="/income"
                        icon={HandCoins}
                        tooltipText="Income"
                        isActive={location.pathname === '/income'}
                    />
                    <TooltipLink
                        to="/expenses"
                        icon={Receipt}
                        tooltipText="Expenses"
                        isActive={location.pathname === '/expenses'}
                    />
                </nav>
            </aside>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size='icon' variant='outline' className="sm:hidden">
                                <PanelLeft className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side='left' className="sm:max-w-xs">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    to="/"
                                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                                >
                                    <Coins className="h-5 w-5 transition-all group-hover:scale-110" />
                                    <span className="sr-only">Expense Tracker</span>
                                </Link>
                                <SheetClose asChild>
                                    <Link
                                        to="/"
                                        className={`flex items-center gap-4 px-2.5 ${location.pathname === '/' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                                    >
                                        <Home className="h-5 w-5" />
                                        Home
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link
                                        to="/income"
                                        className={`flex items-center gap-4 px-2.5 ${location.pathname === '/income' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                                    >
                                        <HandCoins className="h-5 w-5" />
                                        Income
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link
                                        to="/expenses"
                                        className={`flex items-center gap-4 px-2.5 ${location.pathname === '/expenses' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                                    >
                                        <Receipt className="h-5 w-5" />
                                        Expenses
                                    </Link>
                                </SheetClose>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="overflow-hidden rounded-full ml-auto"
                            >
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" height={36} width={36} className="overflow-hidden rounded-full" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>

        </div>
    )
}

export default MainLayout