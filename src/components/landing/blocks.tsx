'use client';

import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogMain,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Button, buttonStyles } from '@/components/ui/button';
import { Checkbox, CheckboxGroup } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogMain,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerFooter,
  DrawerHeader,
  DrawerMain,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Field, FieldLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Menu,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuTrigger,
} from '@/components/ui/menu';
import { Progress } from '@/components/ui/progress';
import { Radio, RadioGroup } from '@/components/ui/radio';
import { Switch } from '@/components/ui/switch';
import {} from '@/components/ui/tabs';
import LoginForm from '@/registry/blocks/auth/login-form';
import { default as AvatarDemo } from '@/registry/examples/avatar/avatar-demo';
import { default as NoteDemo } from '@/registry/examples/note/note-demo';
import { default as SelectDemo } from '@/registry/examples/select-demo';
import { default as TabsDemo } from '@/registry/examples/tabs-demo';
import { default as ToastDemo } from '@/registry/examples/toast/toast-colors';
import {
  ArrowRightLeft,
  Cloud,
  CreditCard,
  Headphones,
  LogOut,
  Settings,
  Shield,
  ShoppingCart,
  Trash2,
  TriangleAlert,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function Blocks() {
  const inputDialogRef = useRef<HTMLInputElement>(null);
  const inputDrawerRef = useRef<HTMLInputElement>(null);
  const [selectedRadio, setSelectedRadio] = useState('high');
  return (
    <section className="bg-bg" id="components">
      <div className="mx-auto grid w-full max-w-screen-xl gap-4 px-6 sm:grid-cols-2 xl:grid-cols-[repeat(15,_minmax(0,_1fr))]">
        <div className="flex h-52 items-center justify-center rounded-3xl border bg-surface p-8 xl:col-span-5">
          <SelectDemo />
        </div>
        <div className="flex h-52 items-center justify-center rounded-3xl border bg-surface p-8 xl:col-span-5">
          <Dialog>
            <DialogTrigger
              className={buttonStyles({
                variant: 'danger',
              })}
            >
              <Trash2 />
              Delete Project
            </DialogTrigger>
            <DialogPopup initialFocus={inputDialogRef}>
              <DialogHeader>
                <DialogTitle>Delete Project Permanently</DialogTitle>
              </DialogHeader>
              <DialogMain>
                <DialogDescription>
                  This action will <b>permanently delete your project</b>{' '}
                  including all environments, configurations, and deployment
                  history. This cannot be undone.
                </DialogDescription>
                <Field>
                  <FieldLabel className={'font-normal'}>
                    <span>
                      Enter your project name <strong>project-name</strong> to
                      confirm:
                    </span>
                  </FieldLabel>
                  <Input required ref={inputDialogRef} />
                </Field>
                <Field>
                  <FieldLabel className={'font-normal'}>
                    <span>
                      To verify, type <strong>delete this project</strong>{' '}
                      below:
                    </span>
                  </FieldLabel>
                  <Input required />
                </Field>
              </DialogMain>

              <DialogFooter>
                <DialogClose>Cancel</DialogClose>
                <Button variant="danger" className="sm:flex-1">
                  Delete project
                </Button>
              </DialogFooter>
            </DialogPopup>
          </Dialog>
        </div>
        <div className="flex h-52 items-center justify-center gap-6 rounded-3xl border bg-surface p-8 sm:col-span-2 md:col-span-1 xl:col-span-5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Enable notifications</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="marketing" defaultChecked />
              <Label htmlFor="marketing">Marketing emails</Label>
            </div>
          </div>
        </div>
        <div className="row-span-3 flex items-center justify-center rounded-3xl border bg-surface p-8 sm:col-span-2 md:col-span-1 xl:col-span-6">
          <LoginForm />
        </div>
        <div className="flex h-52 flex-col justify-center rounded-3xl border bg-surface p-8 sm:col-span-2 md:col-span-1 xl:col-span-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Uploading files...</span>
              <span className="text-sm text-text-2">84%</span>
            </div>
            <Progress
              value={84}
              className="w-full"
              aria-label="Progress of file upload"
            />
            <div className="flex gap-2">
              <Badge variant="secondary" className="w-fit">
                3 files
              </Badge>
              <Badge className="w-fit">1.2 MB</Badge>
            </div>
          </div>
        </div>
        <div className="flex h-52 flex-col items-center justify-center rounded-3xl border bg-surface p-8 xl:col-span-4">
          <Menu>
            <MenuTrigger className="cursor-pointer">
              <AvatarDemo />
            </MenuTrigger>

            <MenuPopup>
              <MenuGroup>
                <MenuGroupLabel>Cristhian R.</MenuGroupLabel>
                <MenuSeparator />
                <MenuItem>
                  <User />
                  Profile
                </MenuItem>
                <MenuItem>
                  <CreditCard />
                  Billings
                </MenuItem>
                <MenuItem>
                  <Settings />
                  Preferences
                </MenuItem>
              </MenuGroup>
              <MenuSeparator />
              <MenuItem>
                <ArrowRightLeft />
                Switch account
              </MenuItem>
              <MenuItem className="text-danger">
                <LogOut />
                Sign out
              </MenuItem>
            </MenuPopup>
          </Menu>
        </div>
        <div className="flex h-52 items-center justify-center rounded-3xl border bg-surface p-8 xl:col-span-4">
          <Drawer>
            <DrawerTrigger className={buttonStyles()}>
              <ShoppingCart />
              Checkout
            </DrawerTrigger>
            <DrawerPopup initialFocus={inputDrawerRef}>
              <DrawerHeader>
                <DrawerTitle>Checkout</DrawerTitle>
              </DrawerHeader>
              <DrawerMain className="gap-0 p-0">
                {/* Worker Advanced Plan */}
                <div className="flex flex-col gap-4 border-b px-5.5 py-6">
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-secondary">
                      <Cloud size={24} />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h3 className="font-medium">Worker Advanced Plan</h3>
                      <p className="text-text-2">Serverless Application</p>
                    </div>
                    <div className="flex flex-col text-right">
                      <p className="font-medium">$99</p>
                      <p className="text-text-2">×1</p>
                    </div>
                  </div>

                  {/* Addons - Jumper */}
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-secondary">
                      <CreditCard size={24} />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h3 className="font-medium">Addons - Jumper</h3>
                      <p className="text-text-2">Reverse Proxy</p>
                    </div>
                    <div className="flex flex-col text-right">
                      <p className="font-medium">$19</p>
                      <p className="text-text-2">×1</p>
                    </div>
                  </div>

                  {/* Addons - Shield */}
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-secondary">
                      <Shield size={24} />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h3 className="font-medium">Addons - Shield</h3>
                      <p className="text-text-2">WAF</p>
                    </div>
                    <div className="flex flex-col text-right">
                      <p className="font-medium">$39</p>
                      <p className="text-text-2">×1</p>
                    </div>
                  </div>

                  {/* Advanced Technical Support */}
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-secondary">
                      <Headphones size={24} />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h3 className="font-medium">
                        Advanced Technical Support
                      </h3>
                      <p className="text-text-2">7×24 Rapid Response</p>
                    </div>
                    <div className="flex flex-col text-right">
                      <p className="font-medium">$59</p>
                      <p className="text-text-2">×1</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 border-b px-5.5 py-6">
                  <div className="flex justify-between">
                    <span className="text-text-2">Subtotal</span>
                    <span>$216</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-text-2">Tax (5%)</span>
                    <span>$10.8</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-text-2">Discount</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">EARLY ACCESS 20% OFF</Badge>
                      <span>-$43.2</span>
                    </div>
                  </div>
                  <div className="flex justify-between font-medium text-xl">
                    <span>Total</span>
                    <span>$183.6</span>
                  </div>
                </div>
                <div className="flex flex-col px-5.5 py-6">
                  <p className="text-text-2">
                    Before proceeding with your payment, please visit the{' '}
                    <Link href="#" className="text-primary hover:underline">
                      compliance documents
                    </Link>{' '}
                    section to review all necessary information.
                  </p>
                </div>
              </DrawerMain>

              <DrawerFooter>
                <Button>Pay now</Button>
                <DrawerClose>Cancel</DrawerClose>
              </DrawerFooter>
            </DrawerPopup>
          </Drawer>
        </div>
        <div className="row-span-2 flex flex-col items-center justify-center rounded-3xl border bg-surface p-8 sm:col-span-2 md:col-span-1 xl:col-span-5">
          <RadioGroup
            aria-labelledby="security"
            value={selectedRadio}
            className="flex flex-col items-start gap-6"
            onValueChange={(value) => setSelectedRadio(value as string)}
          >
            <div className="flex flex-col items-start">
              <Label>
                <Radio value="high" />
                High Security
              </Label>
              <span className="mb-3 ml-6 font-normal text-sm text-text-2">
                Enable all security features
              </span>
              <CheckboxGroup
                aria-labelledby="features"
                defaultValue={['encryption']}
                className="ml-6 flex flex-col items-start gap-3"
                disabled={selectedRadio !== 'high'}
              >
                <Label>
                  <Checkbox name="encryption" />
                  Encryption
                </Label>
                <Label>
                  <Checkbox name="two-factor" />
                  Two-factor Auth
                </Label>
              </CheckboxGroup>
            </div>
            <div className="flex flex-col items-start">
              <Label>
                <Radio value="low" />
                Low Security
              </Label>
              <span className="ml-6 font-normal text-sm text-text-2">
                Basic security features only
              </span>
            </div>
          </RadioGroup>
        </div>
        <div className="flex h-52 items-center justify-center rounded-3xl border bg-surface p-8 xl:col-span-4">
          <AlertDialog>
            <AlertDialogTrigger
              className={buttonStyles({
                variant: 'secondary',
              })}
            >
              <TriangleAlert />
              License Expiring
            </AlertDialogTrigger>
            <AlertDialogPopup>
              <AlertDialogMain>
                <AlertDialogTitle>License expires in 3 days</AlertDialogTitle>
                <AlertDialogDescription>
                  Your team license will expire on December 21, 2025. Renew now
                  to access to all features.
                </AlertDialogDescription>
              </AlertDialogMain>

              <AlertDialogFooter>
                <AlertDialogClose>Remind me later</AlertDialogClose>
                <Button className="flex-1">Renew License</Button>
              </AlertDialogFooter>
            </AlertDialogPopup>
          </AlertDialog>
        </div>
        <div className="flex h-52 items-center justify-center gap-6 rounded-3xl border bg-surface p-8 xl:col-span-5">
          <ToastDemo />
        </div>
        <div className="flex h-52 items-center justify-center rounded-3xl border bg-surface p-8 sm:col-span-2 md:col-span-1 xl:col-span-5">
          <TabsDemo />
        </div>
        <div className="flex h-52 flex-col items-center justify-center gap-3 rounded-3xl border bg-surface p-8 sm:col-span-2 xl:col-span-5">
          <NoteDemo />
        </div>
      </div>
    </section>
  );
}
