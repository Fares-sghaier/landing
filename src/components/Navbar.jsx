import { NavLink, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Logo from "../assets/images/logo.png";
const contracts = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: Squares2X2Icon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className=" justify-start lg:w-0 lg:flex-1 flex">
            <a href="#" className="md:inline-flex">
              <img className="h-14 w-auto sm:h-13" src={Logo} alt="" />
              <h1 className="decoration-solid text-2xl font-semibold mt-2 ml-4">
                E-Tafakna
              </h1>
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <NavLink
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              to="/contracts"
            >
              Contracts
            </NavLink>
            <NavLink
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              to="/team"
            >
              Team
            </NavLink>
            <NavLink
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              to="/contact"
            >
              Contact us
            </NavLink>

            {/* Dont touch this */}
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            ></a>
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center 0"
            ></a>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-10 w-auto" src={Logo} alt="Your Company" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                    <icon
                      className="h-6 w-6 flex-shrink-0 text-indigo-600"
                      aria-hidden="true"
                    />
                    <NavLink
                      to="/"
                      className="ml-3 text-base font-medium text-gray-900"
                    >
                      Home
                    </NavLink>
                  </a>
                  <a className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                    <icon
                      className="h-6 w-6 flex-shrink-0 text-indigo-600"
                      aria-hidden="true"
                    />
                    <NavLink
                      to="/contracts"
                      className="ml-3 text-base font-medium text-gray-900"
                    >
                      Contracts
                    </NavLink>
                  </a>
                  <a className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                    <icon
                      className="h-6 w-6 flex-shrink-0 text-indigo-600"
                      aria-hidden="true"
                    />
                    <NavLink
                      to="/team"
                      className="ml-3 text-base font-medium text-gray-900"
                    >
                      Team
                    </NavLink>
                  </a>
                  <a className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                    <icon
                      className="h-6 w-6 flex-shrink-0 text-indigo-600"
                      aria-hidden="true"
                    />
                    <NavLink
                      to="/contact"
                      className="ml-3 text-base font-medium text-gray-900"
                    >
                      Contact us
                    </NavLink>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
