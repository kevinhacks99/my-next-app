import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("*");

  if (error) {
    return <div>Something went wrong: {error.message}</div>;
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="mb-6 text-3xl font-bold">Profiles</h1>

      <div className="space-y-4">
        {profiles?.map((profile) => (
          <div
            key={profile.id}
            className="rounded-lg border p-4"
          >
            <p className="font-semibold">{profile.username}</p>

            <p className="text-sm text-gray-500">
              ID: {profile.id}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}