require("dotenv").config();

const supabase = require("./config/supabase");

async function test() {
  const { data, error } = await supabase
    .from("users")
    .select("*");

  if (error) {
    console.log("❌ Error");
    console.log(error);
  } else {
    console.log("✅ Connected Successfully");
    console.log(data);
  }
}

test();