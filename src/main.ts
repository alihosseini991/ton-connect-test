import { TonConnectUI } from "@tonconnect/ui";
import "./style.css";

const tonConnectUI = new TonConnectUI({
  manifestUrl: "https://fund-locker.vercel.org/tonconnect-manifest.json",
  buttonRootId: "ton-connect",
});

tonConnectUI.onStatusChange((walletInfo) => {
  console.log(walletInfo);
});
