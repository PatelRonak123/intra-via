// "use client";

// import LoaderUI from "@/components/LoaderUI";
// import MeetingRoom from "@/components/MeetingRoom";
// import MeetingSetup from "@/components/MeetingSetup";
// import useGetCallById from "@/hooks/useGetCallById";
// import { useUser } from "@clerk/nextjs";
// import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
// import { useParams } from "next/navigation";
// import { useState } from "react";

// function MeetingPage() {
//   const { id } = useParams() as { id: string };
//   const { isLoaded } = useUser();
//   const { call, isCallLoading } = useGetCallById(id);

//   const [isSetupComplete, setIsSetupComplete] = useState(false);

//   if (!isLoaded || isCallLoading) return <LoaderUI />;

//   if (!call) {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         <p className="text-2xl font-semibold">Meeting not found</p>
//       </div>
//     );
//   }

//   return (
//     <StreamCall call={call}>
//       <StreamTheme>
//         {!isSetupComplete ? (
//           <MeetingSetup onSetupComplete={() => setIsSetupComplete(true)} />
//         ) : (
//           <MeetingRoom />
//         )}
//       </StreamTheme>
//     </StreamCall>
//   );
// }
// export default MeetingPage;

// import dynamic from "next/dynamic";

// // Dynamically import the client component
// const MeetingClient = dynamic(() => import("./MeetingClient"), { ssr: false });

// export default function MeetingPage() {
//   return <MeetingClient />;
// }

// // Static params needed for output: "export"
// export async function generateStaticParams() {
//   return [
//     { id: "mock-meeting-id-1" },
//     { id: "mock-meeting-id-2" },
//   ];
// }



// src/app/meeting/[id]/page.tsx

// import dynamic from "next/dynamic";

// // Dynamically import the client component (disables SSR)
// const MeetingClient = dynamic(() => import("./MeetingClient"), {
//   ssr: false,
// });

// export default function MeetingPage() {
//   return <MeetingClient />;
// }

// app/meeting/[id]/page.tsx

import dynamic from "next/dynamic";

// This disables server-side rendering
const MeetingClient = dynamic(() => import("./MeetingClient"), {
  ssr: false,
});

export default function MeetingPage() {
  return <MeetingClient />;
}

// ❌ DO NOT use this if you have dynamic routing
// export async function generateStaticParams() { ... }
