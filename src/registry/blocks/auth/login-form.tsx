'use client';

import Github from '@/components/icons/github';
import Google from '@/components/icons/google';
import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldLabel, Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-4">
        <Image
          className="dark:invert"
          src="/feather.svg"
          alt="Feather logo"
          width={32}
          height={32}
        />
        <div className="flex flex-col items-center gap-1">
          <h1 className="font-semibold text-2xl">Login to Feather</h1>
          <p className="text-text-2">
            Don't have an account?&nbsp;
            <Link href="#" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <Form>
        <Field name="email">
          <FieldLabel>Email address</FieldLabel>
          <Input type="email" placeholder="name@email.com" required />
          <FieldError />
        </Field>
        <Button type="submit">Continue</Button>
      </Form>
      <p className="text-text-3 text-xs">OR</p>

      <div className="flex w-full flex-col gap-4">
        <Button color="secondary">
          <Google />
          Continue with Google
        </Button>
        <Button color="secondary">
          <Github className="fill-text" />
          Continue with Github
        </Button>
      </div>
    </div>
  );
}
