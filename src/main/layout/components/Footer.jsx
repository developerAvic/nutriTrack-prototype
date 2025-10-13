// components/Footer.jsx
export default function Footer() {
  return (
    <footer className=" py-3 h-15 text-center text-lg relative bottom-0 right-0 left-0">
      <p className="text-sm text-gray text-center">
        ©{" "}
        <span className="">
          {new Date().getFullYear()}
        </span>{" "}
        <span className="font-semibold text-green-600">eat'O</span> |
        All rights reserved. Built by 🪄{" "}
        <span className="text-green-600 font-semibold">
          &lt;developerAvic/&gt;
        </span>
      </p>
    </footer>
  );
}
