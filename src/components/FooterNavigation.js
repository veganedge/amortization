function FooterNavigation() {
  return (
    <footer className="text-center text-lg-start bg-white text-muted mt-3">
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a
          className="text-reset fw-bold footer-brand"
          href="https://scottxbrown.com/"
        >
          SxB Development
        </a>
      </div>
    </footer>
  );
}

export default FooterNavigation;
