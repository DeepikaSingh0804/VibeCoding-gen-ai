// import { pricingPlans } from "@/app/Pricing-Data/page";

// bg-[#F3ECE3]

"use client";

import { useState } from "react";
import { pricingMatrix } from "@/app/Pricing-Data/page";

export default function Pricing() {
  const [currency, setCurrency] = useState("INR");
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      key: "starter",
    },
    {
      name: "Pro",
      key: "pro",
    },
    {
      name: "Enterprise",
      key: "enterprise",
    },
  ];

  const symbols = {
    INR: "₹",
    USD: "$",
    EUR: "€",
  };

  return (
    <section className="py-20 bg-[#0B0F19]">

      <div className="max-w-6xl mx-auto px-5">

        <h2 className="text-4xl font-bold text-center mb-10 ">
          Simple Pricing
        </h2>

        {/* Controls */}

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="border px-4 py-2 rounded-lg hover:cursor-pointer"
          >
            <option value="INR">INR ₹</option>
            <option value="USD">USD $</option>
            <option value="EUR">EUR €</option>
          </select>

          <div className="flex border rounded-lg overflow-hidden">

            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 hover:cursor-pointer ${
                billing === "monthly"
                  ? "bg-black text-white"
                  : ""
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("annual")}
              className={`px-5 py-2 hover:cursor-pointer ${
                billing === "annual"
                  ? "bg-black text-white"
                  : ""
              }`}
            >
              Annual
            </button>

          </div>

        </div>

        {/* Pricing Cards */}

        <div className="grid md:grid-cols-3 gap-6">

          {plans.map((plan) => {
            let price =
               pricingMatrix[
                plan.key as keyof typeof pricingMatrix
              ][currency as "INR" | "USD" | "EUR"];

            if (billing === "annual") {
              price = price * 12 * 0.8;
            }

            return (
              <div
                key={plan.key}
                className="border rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold">
                  {plan.name}
                </h3>

                <p className="text-5xl font-bold mt-6">
                  {
                    symbols[
                      currency as keyof typeof symbols
                    ]
                  }
                  {Math.round(price)}
                </p>

                <p className="text-gray-500 mt-2">
                  {billing === "monthly"
                    ? "/month"
                    : "/year"}
                </p>

                <button className="mt-8 w-full bg-green-500 text-white py-3 rounded-xl">
                  Get Started
                </button>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}