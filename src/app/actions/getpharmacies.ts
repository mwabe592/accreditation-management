import { createClient } from "../utils/supabase/client";

export const getPharmacies = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("pharmacies").select("*");

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
