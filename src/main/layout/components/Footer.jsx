import GitHubProfile from "../../../components/settings/GitHubProfile";

// components/Footer.jsx
export default function Footer() {
  return (
    <footer className=" py-3 text-center text-lg relative bottom-0 right-0 left-0">
      <p className="text-sm text-gray text-center">
        ©{" "}
        <span className="">
          {new Date().getFullYear()}
        </span>{" "}
        <span className="font-semibold text-green-600">eat'O</span> |
        All rights reserved. Built by {" "} <GitHubProfile />
      </p>
    </footer>
  );
}
