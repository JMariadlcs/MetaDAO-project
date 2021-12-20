import sdk from "./1-initialize-sdk.js";

// Grab the app module address.
const appModule = sdk.getAppModule(
  "0xA57ea94A4F2492eccE27DC3E6F229dF3Fa95c9FB",
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      // Give your governance contract a name.
      name: "MetaDAO's proposals",

      // This is the location of our governance token, our ERC-20 contract!
      //To only allow people holding $METADAO vote not other tokens
      votingTokenAddress: "0xE0dB1E14f0aAF18F829317259F08f81614433851",

      // After a proposal is created, when can members start voting?
      // For now, we set this to immediately.
      proposalStartWaitTimeInSeconds: 0,

      // How long do members have to vote on a proposal when it's created?
      // Here, we set it to 24 hours (86400 seconds)
      proposalVotingTimeInSeconds: 24 * 60 * 60,

      // Used to avoid proposal approbed with only 1 participation of the creator
      //if the rest of the members are on vacations for example
      //Change the number to set the % of votting needed to approbe the proposal
      votingQuorumFraction: 0,

      // What's the minimum # of tokens a user needs to be allowed to create a proposal?
      // I set it to 0. Meaning no tokens are required for a user to be allowed to
      // create a proposal.
      //Anyone with 0 tokens can create a proposal
      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.log("Failed to deploy vote module", err);
  }
})();
