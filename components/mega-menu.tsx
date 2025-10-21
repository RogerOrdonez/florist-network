"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled
          ? "backdrop-blur-sm shadow-md border-gray-200"
          : "border-transparent"
      } bg-white/95 border-b transition-all duration-300 sticky top-0 z-50`}
    >
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
                {/* Featured Collapsible */}
                <Collapsible open={featuredOpen} onOpenChange={setFeaturedOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium hover:text-primary transition-colors py-3 px-2 gap-4">
                    <span className="flex items-center gap-2">
                      GIFT A BOUQUET
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform shrink-0 ${
                        featuredOpen ? "rotate-180" : ""
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 space-y-6 pl-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Column 1: Shop All */}
                      <div>
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          SHOP ALL
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/shop"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Shop All
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/next-day-delivery"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Next Day Delivery
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/new-arrivals"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              New Arrivals
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/best-sellers"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Best Sellers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/sale"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Sale
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 2: By Collection */}
                      <div>
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          BY COLLECTION
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/collection/next-day-delivery"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Next Day Delivery
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/collection/halloween"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Halloween
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/collection/fall"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Fall
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/collection/nybg"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              NYBG
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/collection/pet-safe"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Pet-Safe
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/collection/gift-card"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Gift Card
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 3: By Occasion */}
                      <div>
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          BY OCCASION
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/occasion/birthday"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Birthday
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/occasion/anniversary"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Anniversary
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/occasion/congratulations"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Congratulations
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/occasion/new-baby"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              New Baby
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/occasion/thank-you"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Thank You
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/occasion/get-well"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Get Well
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/occasion/sympathy"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Sympathy
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 4: By Flower Type */}
                      <div>
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          BY FLOWER TYPE
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/type/mixed-flowers"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Mixed Flowers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/type/classic-roses"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Classic Roses
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/type/garden-roses"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Garden Roses
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/type/gerberas"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Gerberas
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/type/hydrangeas"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Hydrangeas
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/type/tropicals"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Tropicals
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/type/lilies"
                              className="text-sm hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              Lilies
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                <Link
                  href="/occasion/birthday"
                  className="text-sm font-medium hover:text-primary transition-colors py-3 px-2"
                  onClick={() => setOpen(false)}
                >
                  BIRTHDAY
                </Link>
                <Link
                  href="/occasion/anniversary"
                  className="text-sm font-medium hover:text-primary transition-colors py-3 px-2"
                  onClick={() => setOpen(false)}
                >
                  ANNIVERSARY
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wider">
            Florist Network
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <span className="flex items-center gap-1">
                    GIFT A BOUQUET
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[1000px] p-6">
                    <div className="grid grid-cols-4 gap-8">
                      {/* Column 1: Shop All */}
                      <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          SHOP ALL
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/shop"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Shop All
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/next-day-delivery"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Next Day Delivery
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/new-arrivals"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              New Arrivals
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/best-sellers"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Best Sellers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/sale"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Sale
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 2: By Collection */}
                      <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          BY COLLECTION
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/collection/next-day-delivery"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Next Day Delivery
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/collection/halloween"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Halloween
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/collection/fall"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Fall
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/collection/nybg"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              NYBG
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/collection/pet-safe"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Pet-Safe
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/collection/gift-card"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Gift Card
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 3: By Occasion */}
                      <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          BY OCCASION
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/occasion/birthday"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Birthday
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/occasion/anniversary"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Anniversary
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/occasion/congratulations"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Congratulations
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/occasion/new-baby"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              New Baby
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/occasion/thank-you"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Thank You
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/occasion/get-well"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Get Well
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/occasion/sympathy"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Sympathy
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 4: By Flower Type */}
                      <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          BY FLOWER TYPE
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/type/mixed-flowers"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Mixed Flowers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/type/classic-roses"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Classic Roses
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/type/garden-roses"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Garden Roses
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/type/gerberas"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Gerberas
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/type/hydrangeas"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Hydrangeas
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/type/tropicals"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Tropicals
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/type/lilies"
                              className="text-sm hover:text-primary transition-colors"
                            >
                              Lilies
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  <Link href="/occasion/birthday">BIRTHDAY</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  <Link href="/occasion/anniversary">ANNIVERSARY</Link>
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
