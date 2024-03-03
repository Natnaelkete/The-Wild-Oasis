import { createClient } from "@supabase/supabase-js";
import { supaKey } from "../secret/supabasekey";
export const supabaseUrl = "https://oodleqbkjqizazwrdaza.supabase.co";
const supabaseKey = supaKey;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
