const Navbar = (props) => {
    return (
      <header
        className={
          props.isDropDownMenu ? "header-mobile" : "header-absolute"
        }
      >
        <nav
          style={{
            justifyContent: props.isDropDownMenu
              ? "space-between"
              : "unset",
          }}
        >
          <img
            onClick={props.onHandleDropDown}
            src={
              props.isDropDownMenu
                ? "images/icon-close.svg"
                : "images/icon-hamburger.svg"
            }
            alt=""
          />
          <img
            src="images/logo.svg"
            alt=""
            style={{ display: props.isDropDownMenu ? "none" : "block" }}
          />
          <ul className={props.isDropDownMenu ? "ul-mobile" : "ul-desktop"}>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </nav>
      </header>
    );
  }

  export default Navbar;