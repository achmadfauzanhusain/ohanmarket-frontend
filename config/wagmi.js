import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID', // dari cloud.walletconnect.com
  chains: [mainnet],
  ssr: true, // Next.js selalu render di server dulu
});