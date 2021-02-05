import React, { Component, useState } from 'react';
import './Header.css';
import NewRep from '../NewRep/NewRepository';
import { AiFillGithub, 
         AiOutlineSearch, 
         AiOutlinePlus,
         AiOutlineStar,
         AiFillStar,
         AiFillAppstore
        } from 'react-icons/ai';
import { CgDarkMode } from 'react-icons/cg'
import { GoPlus } from 'react-icons/go'
import { Button,
         Nav,
         Navbar,
         NavItem,
         NavLink,
         Dropdown,
         DropdownToggle,
         DropdownMenu,
         InputGroup,
         InputGroupAddon, 
         Input,
         DropdownItem
        } from 'reactstrap';

  
  const Headers = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false); 
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

    const [dropdownOpenF, setDropdownOpenF] = useState(false); 
    const toggleDropDownF = () => setDropdownOpenF(!dropdownOpenF);
  
    return (
      <div>
        <Nav>
          <Navbar className='headerNav'>
            <AiFillGithub className='gitIco link'/>
            <NavLink className='link' disabled>
                Github Compare
            </NavLink>

            <Dropdown nav isOpen={dropdownOpenF} toggle={toggleDropDownF}>
                <DropdownToggle aria-expanded={dropdownOpenF} caret backgroundColor className='dropDownFilter'>
                Filter and Order
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem header className='dropHeader'>ORDER BY</DropdownItem>
                    <DropdownItem className='dropItem'>Forks</DropdownItem>
                    <DropdownItem className='dropItem'>Open Issues</DropdownItem>
                    <DropdownItem className='dropItem'>Age</DropdownItem>
                    <DropdownItem className='dropItem'>Last Commit</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <InputGroup style={{width:400}} >
                <Input placeholder="Search" style={{ backgroundColor: '#F1F2F5'}} />
                <InputGroupAddon>
                <Button className='searchButton'><AiOutlineSearch /></Button>
                </InputGroupAddon>
            </InputGroup>
            
            <NavItem>
                <NavLink className='link'><AiOutlineStar className='ico' /></NavLink>
            </NavItem>
            
            <NavItem>
                <NavLink className='link'><CgDarkMode className='ico' /></NavLink>
            </NavItem>
            
            <NavItem >
                <NavLink className='link'><AiFillAppstore className='ico' /></NavLink>
            </NavItem>
            
            <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropDown} className='dropDown'>
                <DropdownToggle className='dropDownCreate'>
                <GoPlus />
                </DropdownToggle>
                <DropdownMenu right>
                    <NewRep />
                </DropdownMenu>
            </Dropdown>
          </Navbar>
        </Nav>
      </div>
    );
  }

export default Headers;