//PASSING IN BOOTSTRAP CLASS "FIXED-BOTTOM" INTO COMPONENT IF NEEDED
function Footer({ addClass = "" }) {
  return (

    // FOOTER COMPONENT SHOWN AS FIXED/NOT IF "FIXED-BOTTOM" WAS PASSED AS PROP
    <footer
      className={
        addClass
          ? `text-center text-lg-start bg-white text-muted mt-3 ${addClass}`
          : "text-center text-lg-start bg-white text-muted mt-3"
      }
    >

      {/* COPYRIGHT 2021 SXB DEVELOPMENT (LINK - OPENS IN NEW TAB) */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        &copy;2021
        <a
          className="text-reset fw-bold footer-brand"
          href="https://scottxbrown.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SxB Development
        </a>
      </div>
    </footer>
  );
}

export default Footer;
