"use client";

import Link from "next/link";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Search,
  User,
  Heart,
  ShoppingCart,
  Menu,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function MegaMenu() {
  const [open, setOpen] = useState(false);
  const [featuredOpen, setFeaturedOpen] = useState(false);

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] overflow-y-auto px-6"
            >
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <nav className="flex flex-col gap-1 mt-8">
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-primary transition-colors py-3 px-2"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className="text-sm font-medium hover:text-primary transition-colors py-3 px-2"
                  onClick={() => setOpen(false)}
                >
                  Shop
                </Link>

                {/* Featured Collapsible */}
                <Collapsible open={featuredOpen} onOpenChange={setFeaturedOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium hover:text-primary transition-colors py-3 px-2 gap-4">
                    <span className="flex items-center gap-2">
                      Featured
                      <Badge
                        variant="destructive"
                        className="text-[10px] px-1.5 py-0"
                      >
                        HOT
                      </Badge>
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform shrink-0 ${
                        featuredOpen ? "rotate-180" : ""
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 space-y-6 pl-4">
                    {/* Animate Demos */}
                    <div>
                      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Animate Demos
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/quickview"
                            className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            Quickview-Popup
                            <Badge
                              variant="secondary"
                              className="text-[10px] px-1.5 py-0"
                            >
                              DEMO
                            </Badge>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/minicart"
                            className="text-sm hover:text-primary transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            Minicart Draws
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/quick-add"
                            className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            Quick Add to cart
                            <Badge className="bg-green-500 text-white text-[10px] px-1.5 py-0">
                              NEW
                            </Badge>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Product Hover */}
                    <div>
                      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        9 Product Hover
                        <Badge
                          variant="destructive"
                          className="text-[10px] px-1.5 py-0"
                        >
                          HOT
                        </Badge>
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/hover-1"
                            className="text-sm hover:text-primary transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            Product Hover Style 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/hover-2"
                            className="text-sm hover:text-primary transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            Product Hover Style 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/hover-3"
                            className="text-sm hover:text-primary transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            Product Hover Style 3
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/hover-4"
                            className="text-sm hover:text-primary transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            Product Hover Style 4
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/all-styles"
                            className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            All Style
                            <Badge
                              variant="destructive"
                              className="text-[10px] px-1.5 py-0"
                            >
                              HOT
                            </Badge>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Theme Element */}
                    <div>
                      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Theme Element
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/ajax-search"
                            className="text-sm hover:text-primary transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            Ajax Search
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/ajax-minicart"
                            className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            Ajax Minicart
                            <Badge className="bg-green-500 text-white text-[10px] px-1.5 py-0">
                              NEW
                            </Badge>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/recent-products"
                            className="text-sm hover:text-primary transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            Recently Products
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/social-share"
                            className="text-sm hover:text-primary transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            Social Share
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Featured Image */}
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="/elegant-flower-arrangement-with-roses.jpg"
                        alt="Featured products"
                        className="h-32 w-full object-cover"
                      />
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Link
                  href="/pages"
                  className="text-sm font-medium hover:text-primary transition-colors py-3 px-2"
                  onClick={() => setOpen(false)}
                >
                  Pages
                </Link>
                <Link
                  href="/blogs"
                  className="text-sm font-medium hover:text-primary transition-colors py-3 px-2"
                  onClick={() => setOpen(false)}
                >
                  Blogs
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wider">
            CROSA
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  <Link href="/shop">Shop</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <span className="flex items-center gap-1">
                    Featured
                    <Badge
                      variant="destructive"
                      className="ml-1 text-[10px] px-1.5 py-0"
                    >
                      HOT
                    </Badge>
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[800px] p-6">
                    <div className="grid grid-cols-3 gap-8">
                      {/* Column 1: Animate Demos */}
                      <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          Animate Demos
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/quickview"
                              className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                            >
                              Quickview-Popup
                              <Badge
                                variant="secondary"
                                className="text-[10px] px-1.5 py-0"
                              >
                                DEMO
                              </Badge>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/minicart"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Minicart Draws
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/quick-add"
                              className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                            >
                              Quick Add to cart
                              <Badge className="bg-green-500 text-white text-[10px] px-1.5 py-0">
                                NEW
                              </Badge>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 2: Product Hover */}
                      <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                          9 Product Hover
                          <Badge
                            variant="destructive"
                            className="text-[10px] px-1.5 py-0"
                          >
                            HOT
                          </Badge>
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/hover-1"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Product Hover Style 1
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/hover-2"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Product Hover Style 2
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/hover-3"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Product Hover Style 3
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/hover-4"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Product Hover Style 4
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/all-styles"
                              className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                            >
                              All Style
                              <Badge
                                variant="destructive"
                                className="text-[10px] px-1.5 py-0"
                              >
                                HOT
                              </Badge>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 3: Theme Element */}
                      <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          Theme Element
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/ajax-search"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Ajax Search
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/ajax-minicart"
                              className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                            >
                              Ajax Minicart
                              <Badge className="bg-green-500 text-white text-[10px] px-1.5 py-0">
                                NEW
                              </Badge>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/recent-products"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Recently Products
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/social-share"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Social Share
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Featured Image */}
                    <div className="mt-6 overflow-hidden rounded-lg">
                      <img
                        src="/elegant-flower-arrangement-with-roses.jpg"
                        alt="Featured products"
                        className="h-48 w-full object-cover"
                      />
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  <Link href="/pages">Pages</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  <Link href="/blogs">Blogs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Icons */}
          <div className="flex items-center gap-2 md:gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 md:h-10 md:w-10"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex h-10 w-10"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex h-10 w-10"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 md:h-10 md:w-10"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
