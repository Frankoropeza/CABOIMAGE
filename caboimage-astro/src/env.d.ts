/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_SITE_NAME: string;
  readonly PUBLIC_PHOTOGRAPHER_NAME: string;
  readonly PUBLIC_WHATSAPP_NUMBER: string;
  readonly PUBLIC_EMAIL: string;
  readonly PUBLIC_PHONE: string;
  readonly PUBLIC_INSTAGRAM_URL: string;
  readonly PUBLIC_FACEBOOK_URL: string;
  readonly PUBLIC_INSTAGRAM_HANDLE: string;
  readonly RESEND_API_KEY: string;
  readonly CONTACT_EMAIL_TO: string;
  readonly PUBLIC_FORMSPREE_ID: string;
  readonly PUBLIC_UMAMI_WEBSITE_ID: string;
  readonly PUBLIC_UMAMI_SRC: string;
  readonly PUBLIC_GA_MEASUREMENT_ID: string;
  readonly PUBLIC_CLOUDINARY_CLOUD_NAME: string;
  readonly PUBLIC_GOOGLE_MAPS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
