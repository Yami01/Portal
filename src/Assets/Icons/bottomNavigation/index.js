/**
 *
 * General Icons
 * @format
 *
 */

import React from "react"

import Dashboard from "./dashboard.svg"
import DashboardActive from "./dashboard-active.svg"
import TaskList from "./task-list.svg"
import TaskListActive from "./task-list-active.svg"
import Tag from "./tag.svg"
import TagActive from "./tag-active.svg"
import AccountMaintenance from "./account-maintenance.svg"
import AccountMaintenanceActive from "./account-maintenance-active.svg"

const BottomNavigationIcons = (name, extraStyle, width, height, fillColor) => {
  let widthProps = {};
  let heightProps = {};
  if (width) {
    widthProps = {width};
  }
  if (height) {
    heightProps = {height};
  }

  const icons = {
    dashboard: <Dashboard fill={fillColor} style={extraStyle} {...widthProps} {...heightProps} />,
    dashboard_active: (
      <DashboardActive fill={fillColor} style={extraStyle} {...widthProps} {...heightProps} />
    ),
    task_list: <TaskList fill={fillColor} style={extraStyle} {...widthProps} {...heightProps} />,
    task_list_active: (
      <TaskListActive fill={fillColor} style={extraStyle} {...widthProps} {...heightProps} />
    ),
    tag: <Tag fill={fillColor} style={extraStyle} {...widthProps} {...heightProps} />,
    tag_active: <TagActive fill={fillColor} style={extraStyle} {...widthProps} {...heightProps} />,
    account_maintenance: (
      <AccountMaintenance fill={fillColor} style={extraStyle} {...widthProps} {...heightProps} />
    ),
    account_maintenance_active: (
      <AccountMaintenanceActive
        fill={fillColor}
        style={extraStyle}
        {...widthProps}
        {...heightProps}
      />
    ),
  };
  return icons[name];
};

export default BottomNavigationIcons;
