'use client';

import { ActionButton } from '@/components/shared/action-button';
import { Field, FieldError, FieldLabel, Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import * as React from 'react';

export default function Component() {
  const [errors, setErrors] = React.useState({});
  const [isLoading, setLoading] = React.useState(false);

  return (
    <Form
      className="max-w-64"
      errors={errors}
      onClearErrors={setErrors}
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const value = formData.get('url') as string;

        setLoading(true);
        const response = await submitForm(value);
        const serverErrors = {
          url: response.error,
        };

        setErrors(serverErrors);
        setLoading(false);
      }}
    >
      <Field name="url">
        <FieldLabel>Homepage</FieldLabel>
        <Input
          type="url"
          required
          defaultValue="https://example.com"
          placeholder="https://example.com"
          pattern="https?://.*"
        />
        <FieldError />
      </Field>
      <ActionButton type="submit" isLoading={isLoading}>
        Submit
      </ActionButton>
    </Form>
  );
}

async function submitForm(value: string) {
  // Mimic a server response
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  try {
    const url = new URL(value);

    if (url.hostname.endsWith('example.com')) {
      return { error: 'The example domain is not allowed' };
    }
  } catch {
    return { error: 'This is not a valid URL' };
  }

  return { success: true };
}
