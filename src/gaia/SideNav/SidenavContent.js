import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from 'util/CustomScrollbars';


class SidenavContent extends Component {
    componentDidMount() {
        const {history} = this.props;
        const that = this;
        const pathname = `#${history.location.pathname}`;// get current path

        const subMenuLi = document.querySelectorAll('.sub-menu > li');
        for (let i = 0; i < subMenuLi.length; i++) {
            subMenuLi[i].onclick = function (event) {
                event.stopPropagation();
            }
        }

        const menuLi = document.getElementsByClassName('menu');
        for (let i = 0; i < menuLi.length; i++) {
            menuLi[i].onclick = function (event) {
                for (let j = 0; j < menuLi.length; j++) {
                    const parentLi = that.closest(this, 'li');
                    if (menuLi[j] !== this && (parentLi === null || !parentLi.classList.contains('open'))) {
                        menuLi[j].classList.remove('open')
                    }
                }
                this.classList.toggle('open');
                event.stopPropagation();
            }
        }

        const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
        try {
            const activeNav = this.closest(activeLi, 'ul'); // select closest ul
            if (activeNav.classList.contains('sub-menu')) {
                this.closest(activeNav, 'li').classList.add('open');
            } else {
                this.closest(activeLi, 'li').classList.add('open');
            }
        } catch (error) {

        }
    }

    closest(el, selector) {
        try {
            let matchesFn;
            // find vendor prefix
            ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
                if (typeof document.body[fn] == 'function') {
                    matchesFn = fn;
                    return true;
                }
                return false;
            });

            let parent;

            // traverse parents
            while (el) {
                parent = el.parentElement;
                if (parent && parent[matchesFn](selector)) {
                    return parent;
                }
                el = parent;
            }
        } catch (e) {

        }

        return null;
    }

    render() {
        return (
            <CustomScrollbars className=" scrollbar">
                <ul className="nav-menu">

                    <li className="menu disable-caret">
                        <NavLink className="prepend-icon" to="/app/dashboard/default">
                            <span className="nav-text"><IntlMessages id="sidebar.dashboard"/></span>
                        </NavLink>
                    </li>

                    <li className="menu disable-caret">
                        <NavLink className="prepend-icon" to="/app/table/basic">
                            <span className="nav-text"><IntlMessages id="sidebar.tables.basicTable"/></span>
                        </NavLink>
                    </li>

                    <li className="menu disable-caret">
                        <NavLink className="prepend-icon" to="/app/table/data">
                            <span className="nav-text"><IntlMessages id="sidebar.tables.dataTable"/></span>
                        </NavLink>
                    </li>

                    <li className="menu disable-caret">
                        <NavLink className="prepend-icon" to="/app/table/assets-market">
                            <span className="nav-text"><IntlMessages id="sidebar.tables.assets"/></span>
                        </NavLink>
                    </li>1

                    <li className="menu disable-caret">
                        <NavLink className="prepend-icon" to="/app/tokenization">
                            <span className="nav-text"><IntlMessages id="sidebar.forms.tokenization"/></span>
                        </NavLink>
                    </li>

                </ul>
            </CustomScrollbars>
        );
    }
}

export default withRouter(SidenavContent);
