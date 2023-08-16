"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHeart } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import React from "react";
import styled from "styled-components";

const NavigationBar = () => {
  return (
    <NavContainer>
      <NavButton>
        <Icon>
          <FontAwesomeIcon icon={faHome} />
        </Icon>
        <NavLink href={"/"}>Home</NavLink>
      </NavButton>

      <NavButton>
        <Icon>
          <FontAwesomeIcon icon={faHeart} />
        </Icon>
        <NavLink href={"/favorites"}>Favorites</NavLink>
      </NavButton>
    </NavContainer>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}

const NavContainer = styled.nav`
  width: 100%;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  border-top: 2px solid #444;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
  }
`;

const NavButton = styled.div`
  text-decoration: none;
  color: inherit;
  text-align: center;
  flex-grow: 1;
  padding: 0.5rem 0;
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 5rem;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: #444;
  }
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;
