import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x7E4e74db6F5356aF7C3D6f8a7e6410C0d5d1056F",
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