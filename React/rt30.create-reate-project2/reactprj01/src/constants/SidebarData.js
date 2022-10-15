import React from 'react';

import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'counter',
    path: '/counter',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'recipes',
    path: '/recipes',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
  },
  {
    title: 'starrating',
    path: '/starrating',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'crud',
    path: '/crud',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
  {
    title: 'todo',
    path: '/todo',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
];
