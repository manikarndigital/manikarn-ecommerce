// src/app/env/page.tsx
export default function EnvPage() {
  if (process.env.NODE_ENV !== "development") return null;
  return (
    <pre style={{ padding: 16, overflowX: "auto" }}>
      {JSON.stringify(
        {
          hasDatabaseUrl: Boolean(process.env.DATABASE_URL),
          hasNextAuthSecret: Boolean(process.env.NEXTAUTH_SECRET),
          hasStripe: Boolean(process.env.STRIPE_SECRET_KEY),
          hasRazorpay: Boolean(process.env.RAZORPAY_KEY_ID),
          hasCloudinary: Boolean(process.env.CLOUDINARY_CLOUD_NAME),
          hasResend: Boolean(process.env.RESEND_API_KEY),
          hasSearch: Boolean(process.env.SEARCH_APP_ID || process.env.SEARCH_HOST),
          hasShiprocket: Boolean(process.env.SHIPROCKET_EMAIL || process.env.SHIPROCKET_API_TOKEN),
        },
        null,
        2
      )}
    </pre>
  );
}
