import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pb-16 text-center">
      <p>
        <span>Copyright &copy; {new Date().getFullYear()} - </span>
        <Link className="hover:text-slate-700 transition" href="/">
          The Blog
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
