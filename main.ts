import Plugin, { runPlugin } from "@dotmatrixlabs/dotx-plugin-sdk";

class StreamDeckCompanionPlugin extends Plugin {
  async onLoad() {
    await this.settingsPage.addSettings((s) => {
      s.addSection("info").setName("Info");
      s.addInfo("infoText").setText(
        "The Dot X Stream Deck plugin connects directly to Dot X using the plugin system, and will appear as an external plugin. " +
        "This companion app is a guide for now, but may expand with additional features in the future."
      );

      s.addSection("step1").setName("Step 1");
      s.addInfo("step1Text").setText("Download and install the Stream Deck plugin from the Elgato Marketplace: https://marketplace.elgato.com/product/dot-x");

      s.addSection("step2").setName("Step 2");
      s.addInfo("step2Text").setText("Open the Elgato Stream Deck app. Find \"Dot X Channel\" under the Dot X category and drag it onto a key.");

      s.addSection("step3").setName("Step 3");
      s.addInfo("step3Text").setText("In the key settings, set the Channel number (0–4) to match the slider you want to control.");

      s.addSection("step4").setName("Step 4");
      s.addInfo("step4Text").setText("The key will show the apps assigned to that channel. Press it to control media for those apps.");
    });
  }

  async onUnload() {}
}

if (require.main === module) {
  runPlugin(StreamDeckCompanionPlugin);
}
