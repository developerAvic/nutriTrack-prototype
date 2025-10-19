import GitHubProfile from "../../../components/settings/GitHubProfile";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-20 right-20 py-3 text-center z-20">
      <p className="text-xs sm:text-sm text-gray-600 mx-auto max-w-screen-xl">
        © <span>{new Date().getFullYear()}</span>{" "}
        <span className="font-semibold text-green-600">eat'O</span> | All rights reserved. Built by <GitHubProfile />
      </p>
    </footer>
  );
}