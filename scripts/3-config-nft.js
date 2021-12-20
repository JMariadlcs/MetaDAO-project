import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xA57ea94A4F2492eccE27DC3E6F229dF3Fa95c9FB",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Metaverse card from Yu-Gi-Oh",
        description: "This NFT will give you access to MetaDAO!",
        image: readFileSync("scripts/assets/metaverse.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()