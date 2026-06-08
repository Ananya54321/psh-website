"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaSearch, FaShieldAlt } from "react-icons/fa";
import { Footer, Header } from "@/components/pages";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function InsurancePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const insurances = [
    "Bajaj Allianz General Insurance",
    "Aditya Birla Health Insurance",
    "FHPL Insurance TPA Ltd.",
    "Vipul Health Insurance TPA",
    "Vidal Health Insurance",
    "Health Insurance TPA",
    "Oriental Insurance (Under Govt.)",
    "New India Assurance (Under Govt.)",
    "National Insurance (Under Govt.)",
    "United India Insurance (Under Govt.)",
    "Paramount Health Insurance",
    "Good Health Insurance TPA",
    "Ericson Insurance TPA",
    "Medsave Insurance TPA",
    "Medi Assist Insurance TPA",
    "MD India",
    "Niva Bupa",
    "Raksha Health Insurance TPA",
    "Rothshield Insurance TPA",
    "TATA AIG General Insurance",
    "Edelweiss Tokio General Insurance",
    "ACKO General Insurance",
    "Star Health Insurance",
    "Liberty General Insurance",
    "IFFCO Tokio General Insurance",
    "Cholamandalam",
    "Volo",
    "Care Health Insurance",
    "ManipalCigna Health Insurance",
    "ICICI Lombard",
    "Good Health Plan Insurance TPA",
    "Health India TPA",
    "Universal Sompo",
  ];

  const filteredInsurances = insurances.filter((ins) =>
    ins.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <Header />

        {/* Insurance Page Hero Section */}
        <section className="bg-hospital-blue text-white py-10 md:py-16 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm transition-colors cursor-pointer"
            >
              <FaArrowLeft /> Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Accepted Insurance Partners
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl leading-relaxed">
              We collaborate with major insurance companies and Third-Party
              Administrators (TPAs) to provide hassle-free cashless
              hospitalization and medical claims.
            </p>
          </div>
        </section>

        {/* Insurance Search and Grid Section */}
        <section className="py-10 md:py-16 px-4 sm:px-6 max-w-7xl mx-auto w-full">
          <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 md:p-8 mb-10 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold hospital-green mb-2">
                  Our Network Providers
                </h2>
                <p className="text-gray-600 text-sm">
                  Showing {filteredInsurances.length} of {insurances.length}{" "}
                  accepted insurance partners.
                </p>
              </div>
              <div className="relative w-full md:w-80">
                <Input
                  type="text"
                  placeholder="Search insurance provider..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-gray-200 focus:border-hospital-blue focus:ring-hospital-blue"
                />
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              </div>
            </div>

            {filteredInsurances.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                {filteredInsurances.map((ins, index) => {
                  const isGovt = ins.toLowerCase().includes("govt");
                  return (
                    <Card
                      key={index}
                      className={`border border-gray-100 hover:border-hospital-blue/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 ${isGovt ? "bg-emerald-50/20 border-emerald-100/80" : "bg-white"}`}
                    >
                      <CardContent className="p-3.5 flex items-center gap-3">
                        <div
                          className={`p-2 rounded-md text-sm flex-shrink-0 ${isGovt ? "bg-emerald-100/70 text-emerald-700" : "bg-sky-50 text-hospital-blue"}`}
                        >
                          <FaShieldAlt />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3
                            className="font-semibold text-gray-800 text-sm leading-snug break-words"
                            title={ins}
                          >
                            {ins}
                          </h3>
                          {isGovt ? (
                            <span className="inline-block text-[10px] font-bold text-emerald-700 bg-emerald-100/50 px-1.5 py-0.2 rounded mt-0.5">
                              Govt Scheme
                            </span>
                          ) : (
                            <span className="inline-block text-[10px] font-bold text-sky-700 bg-sky-50 px-1.5 py-0.2 rounded mt-0.5">
                              Private / TPA
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-4xl mb-4 text-gray-300">🔍</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-1">
                  No insurance providers found
                </h3>
                <p className="text-gray-500 text-sm">
                  Try adjusting your search terms or contact our billing desk
                  for clarification.
                </p>
              </div>
            )}
          </div>

          {/* Contact Support Note */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-amber-900 mb-1">
                Don't see your insurance provider?
              </h3>
              <p className="text-amber-800 text-sm max-w-xl">
                We are constantly expanding our network. Please call our billing
                department to check if your specific corporate plan or TPA is
                supported under a different name.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <a href="tel:8801719855" className="w-full md:w-auto">
                <Button className="w-full bg-hospital-green hover:bg-green-700 text-white whitespace-nowrap cursor-pointer">
                  Call Billing Support
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
