import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import { ReservationProvider } from "@/app/_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  template: "%s / The Wild Oasis",
  default: "Welcome / The wild Oasis",
  description:
    "Luxurious cabin hotel, located in the heart o the Italian Dolomites, sorrounded by beautiful mountains and dark forest",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en  " className="bg-white ">
      <body
        className={`${josefin.className}  bg-primary-950  antialiased text-primary-100 h-screen  flex`}
      >
        <ReservationProvider>{children}</ReservationProvider>
      </body>
    </html>
  );
}
// min - w - screen;
// md: px - 20;
