'use client';

import { ActionButton } from '@/components/ui/button';
import { Field, FieldError, FieldLabel, Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function Component() {
  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [url, setUrl] = useState('https://example.com');

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
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          pattern="https?://.*"
        />
        <FieldError />
      </Field>
      <ActionButton type="submit" loading={isLoading}>
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
