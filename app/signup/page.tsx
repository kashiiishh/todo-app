// Your SignUp page
"use client";
import React from "react";
import styled from "styled-components";
import { SignUp } from "@clerk/nextjs";
import GlobalStyleProvider from "@/app/providers/GlobalStyleProvider";
import { FaArrowDown } from "react-icons/fa"; // Assuming you're using react-icons for icons

const HeroSection = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black; /* Dark themed background with opacity */
  color: #fff;
  text-align: center;
  border-radius: 16px;
  backdrop-filter: blur(8px); /* Glass and blur effect */
  z-index:1000;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const ScrollButton = styled.button`
  background-color: #fff;
  color: #3498db;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const LocalStyledSignUp = styled(SignUp)`
  // Add your local styles here
  margin-top: 20px;
`;

function page() {
    return (
        <GlobalStyleProvider>
            <HeroSection>
                <h1>Welcome to Your ToDo App</h1>
                <p>Organize your tasks and boost your productivity with our amazing ToDo app!</p>
                <img
                    src="/todo.png"
                    alt="ToDo App"
                    style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "20px" }}
                />
                <ScrollButton>
                    <FaArrowDown />
                </ScrollButton>
            </HeroSection>
            <SignUp />
        </GlobalStyleProvider>
    );
}

export default page;
