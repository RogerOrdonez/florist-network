import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Search, User, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function MegaMenu() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wider">
            CROSA
          </Link>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/shop" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Shop
                  </NavigationMenuLink>
                </Link>
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
                <Link href="/pages" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Pages
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blogs" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Blogs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Icons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
