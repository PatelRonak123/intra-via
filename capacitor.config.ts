// import type { CapacitorConfig } from '@capacitor/cli';

// const config: CapacitorConfig = {
//   appId: 'com.example.intravia',
//   appName: 'IntraVia',
//   webDir: 'public'
// };

// export default config;

import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.intravia",
  appName: "IntraVia",
  webDir: ".next", // Change from 'public' to '.next'
  server: {
    url: "http://192.168.228.108:3000", // Replace with your local IP
    cleartext: true,
  },
  // bundledWebRuntime: false // Removed as it is not a valid property
};

export default config;
