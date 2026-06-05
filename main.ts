import Plugin, { runPlugin } from "@dotmatrixlabs/dotx-plugin-sdk";

const STREAM_DECK_MARKETPLACE_URL =
  "https://marketplace.elgato.com/product/dot-x-b1ccbe64-949a-4017-a153-853c93ce1097";

class StreamDeckCompanionPlugin extends Plugin {
  async onLoad() {
    await this.settingsPage.addSettings((s) => {
      s.addSection("info").setName("Info");
      s.addInfo("infoText").setText(
        "To integrate Dot X with Stream Deck, a separate Stream Deck plugin is required. This plugin is just a guide to help you set it up. Please follow the instructions below to get everything working."
      );

      s.addSection("step1install").setName("Step 1: Install");
      s.addInfo("releaseText").setText(
        "Install the Dot X Stream Deck plugin from the official Elgato Marketplace listing."
      );
      s.addLink("installStreamDeckPlugin")
        .setLabel("Stream Deck Plugin")
        .setText("Open Marketplace")
        .setHref(STREAM_DECK_MARKETPLACE_URL)
        .setIcon("fas fa-store")
        .setDesc("Opens the Dot X Stream Deck plugin listing in your browser.");


      s.addSection("step2").setName("Step 2");
      s.addInfo("step2Text").setText(
        "Open the Elgato Stream Deck app. Find \"Dot X Channel\" under the Dot X category and drag it onto a key."
      );

      s.addSection("step3").setName("Step 3");
      s.addInfo("step3Text").setText(
        "In the key settings, set the Channel number (0-4) to match the slider you want to control."
      );
    });
  }

  async onUnload() {}
}

if (require.main === module) {
  runPlugin(StreamDeckCompanionPlugin);
}
