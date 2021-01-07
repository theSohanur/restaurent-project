import React,{ Component, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

  import { Link } from 'react-router-dom';



  class Navigation extends Component{
      constructor(props){
          super(props);
          this.state = {
              isNavOpen: false
          }
      }
      navToggle = () => {
          this.setState({
              isNavOpen:!this.state.isNavOpen
          })
      }
      render(){
          return(
              <div>
                  <Navbar dark color="dark" expand='sm'>
                    <div className="container">
                        <NavbarBrand href="/">Restaurent</NavbarBrand>
                        <NavbarToggler onClick={this.navToggle} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className='mr-auto' navbar>
                                <NavItem>
                                    <Link to='/' className="nav-link active">Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/menu' className="nav-link">Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/about' className="nav-link ">About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/contact' className="nav-link ">Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>                       
                    </div>
                  </Navbar>
              </div>
          )
      }
  }

// const Navigation = () => {

//     const [isOpen, setIsOpen] = useState(false);
//     const toggle = () => setIsOpen(!isOpen);
//     return (
//         <div>
//             <Navbar dark color='dark' >
//                 <div className="container">
//                     <NavbarBrand href='/'>Restaurent</NavbarBrand>
//                     <NavbarToggler onClick={toggle} />
//                     <Collapse isOpen={isOpen} navbar>
//                     <Nav className="mr-auto" navbar>
//                         <NavItem>
//                         <NavLink href="/components/">Components</NavLink>
//                         </NavItem>
//                         <NavItem>
//                         <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//                         </NavItem>
//                         <UncontrolledDropdown nav inNavbar>
//                         <DropdownToggle nav caret>
//                             Options
//                         </DropdownToggle>
//                         <DropdownMenu right>
//                             <DropdownItem>
//                             Option 1
//                             </DropdownItem>
//                             <DropdownItem>
//                             Option 2
//                             </DropdownItem>
//                             <DropdownItem divider />
//                             <DropdownItem>
//                             Reset
//                             </DropdownItem>
//                         </DropdownMenu>
//                         </UncontrolledDropdown>
//                     </Nav>
//                     <NavbarText>Simple Text</NavbarText>
//                     </Collapse>
//                 </div>
                
//             </Navbar>
//         </div>
//     )
// }

export default Navigation




