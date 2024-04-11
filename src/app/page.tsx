"use client";

import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="pt-4">
      <div className="text-3xl font-bold flex justify-center mb-5">
        <h1>GigEasy</h1>
      </div>
      <Container>
        <div className="flex justify-center text-xl">
          Insurance Coverage for the Gig Economy
        </div>
      </Container>
    </div>
  );
}
