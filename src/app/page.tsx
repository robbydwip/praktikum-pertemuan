import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiAdobephotoshop,
  SiCoreldraw,
} from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      {/* FOTO */}
      <Image
        src="/Foto profil.jpg"
        alt="Profile"
        width={160}
        height={160}
        className="rounded-full mb-6 border-4 border-white shadow-lg"
      />

      {/* HERO */}
      <h1 className="text-4xl font-bold mb-2">Hallo, Saya Robby Dwi P 👋</h1>
      <p className="text-gray-300 text-center max-w-md mb-12">
        Pengembang Web & Mahasiswa Informatika yang sedang membangun aplikasi
        web modern.
      </p>

      {/* ABOUT */}
      <h2 className="text-2xl font-semibold mb-2">Tentang saya</h2>
      <p className="text-gray-400 text-center max-w-md mb-12">
        Bersemangat di bidang desain, teknologi, UI/UX, web devoloper, dan
        pendidikan. Saat ini sedang mempelajari Next.js dan membangun platform
        LMS.
      </p>

      {/* SKILLS */}
      <h2 className="text-2xl font-semibold mb-6">Skill</h2>
      <div className="flex gap-6 text-4xl mb-16">
        <SiHtml5 size={65} color="#F97316" />
        <SiCss3 size={65} color="#2563EB" />
        <SiJavascript size={65} color="#FACC15" />
        <SiReact size={65} color="#22D3EE" />
        <SiNextdotjs size={65} color="#FFFFFF" />
        <SiFigma size={65} color="#ffffffff" />
        <SiAdobephotoshop size={65} color="#012fabff" />
        <SiCoreldraw size={65} color="#007d0fff" />
      </div>

      {/* CONTACT */}
      <h2 className="text-2xl font-semibold mb-3">Kontak</h2>
      <p className="text-gray-400 mb-4">Mari kita membangun sesuatu bersama!</p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:robbydwi2006@email.com"
          className="px-4 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-white"
          >
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.511l-8 5.333-8-5.333V6h16zM4 18V8.489l8 5.333 8-5.333V18H4z" />
          </svg>
        </a>
        <a
          href="https://wa.me/qr/N36PPZ4JSS3TO1"
          className="px-4 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-white"
          >
            <path d="M20.52 3.48A11.77 11.77 0 0012 0a11.92 11.92 0 00-10 18.69L0 24l5.45-1.42A11.93 11.93 0 0012 24h.01A12 12 0 0024 12a11.77 11.77 0 00-3.48-8.52zM12 22a9.94 9.94 0 01-5.09-1.38l-.36-.21-3.24.84.87-3.16-.23-.33A9.94 9.94 0 1122 12a10 10 0 01-10 10zm5.36-7.28c-.3-.15-1.77-.87-2.04-.96s-.47-.15-.67.15-.77.96-.94 1.15-.35.22-.64.07a8.07 8.07 0 01-2.37-1.46 8.8 8.8 0 01-1.63-2.03c-.17-.3 0-.46.13-.61s.3-.35.45-.52.2-.3.3-.5a.54.54 0 000-.52c-.08-.15-.67-1.62-.92-2.22s-.48-.52-.67-.53h-.57a1.1 1.1 0 00-.78.36 3.28 3.28 0 00-1 2.42 5.7 5.7 0 001.2 2.97c.15.21 2.19 3.32 5.3 4.64a12.4 12.4 0 001.29.47 3.1 3.1 0 001.42.09 2.31 2.31 0 001.52-1.07 1.92 1.92 0 00.13-1.07c-.04-.15-.23-.22-.48-.36z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/robbypms__?igsh=cmQ1cTBnOGliODc2"
          className="px-4 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-white"
          >
            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.25a1.25 1.25 0 11-.001 2.501A1.25 1.25 0 0116.5 8.75z" />
          </svg>
        </a>
      </div>
    </main>
  );
}
