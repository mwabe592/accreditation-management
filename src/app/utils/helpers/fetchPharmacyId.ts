import { createClient } from "../supabase/server";

async function fetchPharmacyId() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: pharmacyData, error } = await supabase
    .from("profiles")
    .select("pharmacy_id")
    .eq("id", user?.id)
    .single();

  if (error || !pharmacyData) {
    throw new Error("Error fetching user profile.");
  }

  return pharmacyData.pharmacy_id;
}

export default fetchPharmacyId;
