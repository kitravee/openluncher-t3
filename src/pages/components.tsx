import Image from "next/image";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";

const Components = () => {
  const [showDeleteAlert, setShowDeleteAlert] = React.useState<boolean>(false);
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border-2 border-solid border-slate-300 p-4 shadow-lg hover:border-violet-600 dark:border-slate-700 dark:hover:border-violet-400">
          <Accordion type="single" defaultValue="item-1" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Is it unstyled?</AccordionTrigger>
              <AccordionContent>
                Yes. It's unstyled by default, giving you freedom over the look
                and feel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Can it be animated?</AccordionTrigger>
              <AccordionContent>
                <div>
                  Yes! You can animate the Accordion with CSS or JavaScript.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="rounded-lg border-2 border-solid border-slate-300 p-4 shadow-lg hover:border-violet-600 dark:border-slate-700 dark:hover:border-violet-400">
          <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
            <AlertDialogTrigger asChild>
              <button
                type="button"
                className="rounded-lg bg-slate-800 p-2 text-white"
              >
                Delete account
              </button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
              <AlertDialogFooter>
                <AlertDialogCancel asChild>
                  <button type="button">Cancel</button>
                </AlertDialogCancel>
                <AlertDialogAction asChild>
                  <button type="button">Yes, delete account</button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="rounded-lg border-2 border-solid border-slate-300 p-4 shadow-lg hover:border-violet-600 dark:border-slate-700 dark:hover:border-violet-400">
          <AspectRatio ratio={16 / 9}>
            <Image
              fill
              alt="Landscape photograph by Tobias Tullius"
              src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
            />
          </AspectRatio>
        </div>

        <div className="rounded-lg border-2 border-solid border-slate-300 p-4 shadow-lg hover:border-violet-600 dark:border-slate-700 dark:hover:border-violet-400">
          <div className="flex gap-1">
            <Avatar className="AvatarRoot">
              <AvatarImage
                className="AvatarImage"
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                alt="Colm Tuite"
              />
              <AvatarFallback className="AvatarFallback" delayMs={600}>
                CT
              </AvatarFallback>
            </Avatar>
            <Avatar className="AvatarRoot">
              <AvatarImage
                className="AvatarImage"
                src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                alt="Pedro Duarte"
              />
              <AvatarFallback className="AvatarFallback" delayMs={600}>
                JD
              </AvatarFallback>
            </Avatar>
            <Avatar className="AvatarRoot">
              <AvatarFallback className="AvatarFallback">PD</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="rounded-lg border-2 border-solid border-slate-300 p-4 shadow-lg hover:border-violet-600 dark:border-slate-700 dark:hover:border-violet-400">
          <div className="flex gap-1">
            <Button size="sm" variant="ghost">
              Hello
            </Button>
            <Button>Hello</Button>
            <Button size="lg" variant="outline">
              Hello
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
