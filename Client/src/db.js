import dashboardImg from "./assets/dashboard.svg"
import employeesImg from "./assets/Employees.svg"
import settingsImg from "./assets/settings.svg"
import taskboardImg from "./assets/Taskboard.svg"
import leaveboardImg from "./assets/Leaveboard.svg"
import payrollImg from "./assets/Payroll.svg"
import EmployImg from "./assets/employ.svg"
import TaskImg from "./assets/task.svg"
import Calendar from "./assets/date.svg"
import TwoImg from "../src/assets/2pics.png"
import TreeImg from "../src/assets/3pics.png"
import FourImg from "../src/assets/4pics.png"
import Eclipse from "../src/assets/Ellipse 7.svg"
import Dot from "./assets/dot.svg"
export const sidebarLinks = [
    {
      id: 1,
      icon: dashboardImg,
      name: "Dashboard",
      path: "",
    },
    {
      id: 2,
      icon: employeesImg,
      name: "Employess",
      path: "/admin-dashboard/employees",
    },
    {
      id: 3,
      icon: taskboardImg,
      name: "TaskBoard",
      path: "/admin-dashboard/taskboard",
    },
    {
      id: 4,
      icon: leaveboardImg,
      name: "LeaveBoard",
      path: "/admin-dashboard/leaveboard",
    },
    {
      id: 5,
      icon: payrollImg,
      name: "PayRoll",
      path: "/admin-dashboard/payroll",
    },
    {
      id: 6,
      icon: settingsImg,
      name: "Settings",
      path: "/admin-dashboard/settings",
    },
  ];
  export const Dashboard = [
    {
        id:1,
        names:"Total Employees",
        number:"24",
        Icons:EmployImg,
    },
    {
        id:2,
        names:"Total Tasks",
        number:"107",
        Icons:TaskImg,
    },
    {
        id:3,
        names:"Current Leaves",
        number:"15",
        Icons:Calendar,
    },
]
// Teams
import aisha from "../src/assets/Aisha.svg"
import kingsley from "../src/assets/kingsley ifijie.svg"
import kekere from "../src/assets/kekere ekun.svg"
import badmus from "../src/assets/badmus John.svg"
import dami from "../src/assets/oluwatobi damilola.svg"
export const teams = [
  {
    id: 1,
    name: "Aisha Akinwunmi",
    position: "Manager",
    Image: aisha,
  },
  {
    id: 2,
    name: "Kingsley Ifijie",
    position: "Front-end Developer",
    Image:kingsley,
  },
  {
    id: 3,
    name: "Kekere-Ekun Tolani",
    position: "Data Analyst",
    Image:kekere,
  },
  {
    id: 4,
    name: "Badmus John",
    position: "Manager",
    Image:badmus,
  },
  {
    id: 5,
    name: "Oluwatobi Damilola",
    position: "Back-End Developer",
    Image:dami,
  },
];

export const AdminTable=[
      { 
        id:1,
        task:"website Project Update On Slack",
        team:FourImg,
        Start:"Start:03 Mar 2023",
        end:"End 10 Mar 2023",
        action:"Planned",
      },
      {
        id:2,
        task:"Product Beta Testing",
        team:TreeImg,
        Start:"Start:03 Mar 2023",
        end:"End 10 Mar 2023",
        action:"Completed",
      },
      {
        id:3,
        task:"Website Project Update On Slack",
        team:TwoImg,
        Start:"Start:03 Mar 2023",
        end:"End 10 Mar 2023",
        action:"In Progress",
      },
      {
        id:4,
        task:"Website Project Update On Slack",
        team:FourImg,
        Start:"Start:03 Mar 2023",
        end:"End 10 Mar 2023",
        action:"Planned",
      },
      {
        id:5,
        task:"Product Beta Testing",
        team:TreeImg,
        Start:"Start:03 Mar 2023",
        end:"End 10 Mar 2023",
        action:"Completed",
      },
      { 
        id:6,
        task:"Website Project Update On Slack",
        team:TwoImg,
        Start:"Start:03 Mar 2023",
        end:"End 10 Mar 2023",
        action:"In Progress",
      },
      { 
        id:7,
        task:"Website Project Update On Slack",
        team:FourImg,
        Start:"Start:03 Mar 2023",
        end:"End 10 Mar 2023",
        action:"Planned",
      },
]
export const LeaveTable=[
  {
    id:1,
    image:Eclipse,
    name:"Oluwatosin Sanya",
    LeaveType:"Casual Leave",
    Start:"Start:03 Mar 2023",
    end:"End 10 Mar 2023",
    days:"6 Days",
    action:"Pending",
    stop:Dot,

  },
  {
    id:2,image:Eclipse,
    name:"Oluwatosin Sanya",
    LeaveType:"Sick Leave",
    Start:"Start:03 Mar 2023",
    end:"End 10 Mar 2023",
    days:"6 Days",
    action:"Pending",
    stop:Dot,
  },
  {
    id:3,image:Eclipse,
    name:"Oluwatosin Sanya",
    LeaveType:"Annaul Leave",
    Start:"Start:03 Mar 2023",
    end:"End 10 Mar 2023",
    days:"6 Days",
    action:"Declined",
    stop:Dot,
  },
  {
    id:4,image:Eclipse,
    name:"Oluwatosin Sanya",
    LeaveType:"Annual Leave",
    Start:"Start:03 Mar 2023",
    end:"End 10 Mar 2023",
    days:"6 Days",
    action:"Approved",
    stop:Dot,
  },
  {
    id:5,image:Eclipse,
    name:"Oluwatosin Sanya",
    LeaveType:"sick Leave",
    Start:"Start:03 Mar 2023",
    end:"End 10 Mar 2023",
    days:"6 Days",
    action:"Pending",
    stop:Dot,
  },
  {
    id:6,image:Eclipse,
    name:"Oluwatosin Sanya",
    LeaveType:"Annual Leave",
    Start:"Start:03 Mar 2023",
    end:"End 10 Mar 2023",
    days:"6 Days",
    action:"Declined",
    stop:Dot,
  },
  {
    id:7,image:Eclipse,
    name:"Oluwatosin Sanya",
    LeaveType:"Annual Leave",
    Start:"Start:03 Mar 2023",
    end:"End 10 Mar 2023",
    days:"6 Days",
    action:"Approved",
    stop:Dot,
  },
  {
    id:8,image:Eclipse,
    name:"Oluwatosin Sanya",
    LeaveType:"Casual Leave",
    Start:"Start:03 Mar 2023",
    end:"End 10 Mar 2023",
    days:"6 Days",
    action:"Approved",
    stop:Dot,
  }

]
export const leavelist=[
  {
    id:1,
    name:"HR/Admin",
    number:3,
  },
  {
    id:2,
    name:"HR/Admin",
    number:5,
  },
  {
    id:3,
    name:"HR/Admin",
    number:4,
  },
  {
    id:4,
    name:"HR/Admin",
    number:6,
  },
]
