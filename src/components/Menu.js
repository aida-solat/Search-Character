import React from "react";

const Menu = (props) => {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li className="nav__menu-item">
          <p>Filter By</p>
          <ul className="nav__submenu">
            <li className="nav__submenu-item">
              <button type="button" onClick={props.setFilterD}>
                Date Desc
              </button>
            </li>
            <li className="nav__submenu-item ">
              <button type="button" onClick={props.setFilterA}>
                Date Asc
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

// class Menu extends React.Component {
//   render() {
//     return (
//       <nav className="nav">
//         <ul className="nav__menu">
//           <li className="nav__menu-item">
//             <p>Filter By</p>
//             <Submenu />
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }

// class Submenu extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       filterD: false,
//       filterA: true,
//     };
//     this.setFilterD = this.setFilterD.bind(this);
//     this.setFilterA = this.setFilterA.bind(this);
//   }
//   setFilterD() {
//     console.log("1");
//     if (this.state.filterD) this.setState({ filterD: false });
//     else this.setState({ filterD: true });
//     console.log("2");
//   }
//   setFilterA() {
//     console.log("3");
//     if (this.state.filterD) this.setState({ filterA: false });
//     else this.setState({ filterA: true });
//     console.log("4");
//   }
//   render() {
//     return (
//       <ul className="nav__submenu">
//         <li className="nav__submenu-item">
//           <button type="button" onClick={this.setFilterD}>
//             Date Desc
//           </button>
//         </li>
//         <li className="nav__submenu-item ">
//           <button type="button" onClick={this.setFilterA}>
//             Date Asc
//           </button>
//         </li>
//       </ul>
//     );
//   }
// }
export default Menu;
