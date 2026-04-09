export default function PrivacyPage() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-6 opacity-70 leading-relaxed">
        Koydo CLAT UG Prep collects minimal data required to provide the service.
        We store your email, progress data, and subscription status in our secure
        Supabase-hosted database. We do not sell your personal data to third parties.
      </p>
      <p className="mt-4 opacity-70 leading-relaxed">
        Analytics events (page views, question attempts) are processed to improve
        the learning experience. You may request deletion of your data at any time
        by contacting support.
      </p>
    </main>
  );
}
