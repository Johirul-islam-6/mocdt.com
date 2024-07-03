import React, { useState } from "react";
import { Drawer, IconButton } from "@material-tailwind/react";
import { Menu } from "antd";

import Link from "next/link";

export default function MobileDrawer({ openRight, closeDrawerRight }) {
  return (
    <React.Fragment>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4 z-[100000] nav_menu_bg"
      >
        <div className="mb-6 flex items-center justify-between ">
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <div>
          <Link
            href="/"
            className="text-white text-[16px] ps-[13.3px] font_outfit pb-1"
          >
            Home
          </Link>

          <Menu
            mode="inline"
            // openKeys={openKeys}
            // onOpenChange={onOpenChange}
            style={{
              width: 256,
            }}
            items={[
              {
                key: "1",

                label: "Products",
                children: [
                  {
                    key: "1-1",

                    label: (
                      <Link href="https://email.mocdt.com/">Mocdt Mail</Link>
                    ),
                    // add link
                  },
                  {
                    key: "1-2",

                    label: (
                      <Link href="https://calendar.mocdt.com/">
                        Mocdt Calendar
                      </Link>
                    ),
                  },
                  {
                    key: "1-3",

                    label: (
                      <Link href="https://file.mocdt.com/">Mocdt File</Link>
                    ),
                  },
                  {
                    key: "1-4",

                    label: <Link href="https://cdo.mocdt.com/">Mocdt CDO</Link>,
                  },
                  {
                    key: "1-5",

                    label: (
                      <Link href="https://dns.mocdt.com/">Mocdt DNS Flow</Link>
                    ),
                  },
                  {
                    key: "1-6",

                    label: (
                      <Link href="https://workspace.mocdt.com/">
                        Mocdt Workspace
                      </Link>
                    ),
                  },
                  {
                    key: "1-7",

                    label: (
                      <Link href="https://explore.mocdt.com/">
                        Mocdt Explore
                      </Link>
                    ),
                  },
                  {
                    key: "1-8",

                    label: (
                      <Link href="https://authenticator.mocdt.com/">
                        Mocdt Authenticator
                      </Link>
                    ),
                  },
                  {
                    key: "1-9",

                    label: (
                      <Link href="https://analytics.mocdt.com/">
                        Mocdt Analytics
                      </Link>
                    ),
                  },
                  {
                    key: "1-10",

                    label: <Link href="/moki">Mocdt Moki</Link>,
                  },
                ],
              },
            ]}
          />

          <Link
            href="/about"
            className="text-white text-[16px] ps-[13.3px] font_outfit block pb-3"
          >
            Company
          </Link>
          <Link
            href="/newsroom"
            className="text-white text-[16px] ps-[13.3px] font_outfit block pb-3"
          >
            News
          </Link>
          <Link
            href="/contact"
            className="text-white text-[16px] ps-[13.3px] font_outfit block pb-3"
          >
            Contact
          </Link>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
