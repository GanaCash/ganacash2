import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) =>
<div data-source-location="components/ui/card:6:2" data-dynamic-content="false"
ref={ref}
className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
{...props} />
);
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) =>
<div data-source-location="components/ui/card:14:2" data-dynamic-content="false"
ref={ref}
className={cn("flex flex-col space-y-1.5 p-6", className)}
{...props} />
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) =>
<div data-source-location="components/ui/card:22:2" data-dynamic-content="false"
ref={ref}
className={cn("font-semibold leading-none tracking-tight", className)}
{...props} />
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) =>
<div data-source-location="components/ui/card:30:2" data-dynamic-content="false"
ref={ref}
className={cn("text-sm text-muted-foreground", className)}
{...props} />
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) =>
<div data-source-location="components/ui/card:38:2" data-dynamic-content="false" ref={ref} className={cn("p-6 pt-0", className)} {...props} />
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) =>
<div data-source-location="components/ui/card:43:2" data-dynamic-content="false"
ref={ref}
className={cn("flex items-center p-6 pt-0", className)}
{...props} />
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };