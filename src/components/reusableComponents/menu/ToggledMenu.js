import React, { Component } from 'react';

export default class ToggledMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleMouseDown(e) {
    this.toggleMenu();

    e.stopPropagation();
  }

  render() {
    const Menu = this.props.MenuContent;
    const MenuButton = this.props.MenuButton;

    return (
      <div className={this.props.styleClass}>
        <MenuButton 
          handleMouseDown={this.handleMouseDown} 
        />
        <Menu 
          handleMouseDown={this.handleMouseDown} 
          menuVisibility={this.state.visible} 
        />
      </div>
    );
  }
}
