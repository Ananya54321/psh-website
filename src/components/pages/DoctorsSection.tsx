"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Award,
  Brain,
  ChevronDown,
  ChevronUp,
  Clock,
  Heart,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  User,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function DoctorsSection() {
  const [showAll, setShowAll] = useState(false);
  const otherDoctors = [
    {
      name: "Dr. Sushanth",
      specialty: "DNB ORTHO (Kamineni)",
      icon: Activity,
    },
    {
      name: "Dr. Shashidhar",
      specialty: "MD Anasthesia ( Gandhi )",
      icon: HeartPulse,
    },
    {
      name: "Dr. Srikanth",
      specialty: "DM NEURO ( NIMS )",
      icon: Brain,
    },
    {
      name: "Dr. Ujwal Kumar",
      specialty: "MD General",
      icon: User,
    },
    {
      name: "Dr. Rajkiran",
      specialty: "MCH ( Plastic surgery)",
      icon: Sparkles,
    },
    {
      name: "Dr. Pruthvi",
      specialty: "DM Cardiology",
      icon: Heart,
    },
    {
      name: "Dr. Srikanth",
      specialty: "MCH Neurosurgery",
      icon: Brain,
    },
    {
      name: "Dr. Ramakrishna",
      specialty: "MD Radiology",
      icon: Activity,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="doctors"
      className="py-12 md:py-16 px-4 sm:px-6 bg-slate-50/50 scroll-mt-20 overflow-hidden relative"
    >
      {/* Background patterns and glowing mesh blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-hospital-blue/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] bg-hospital-green/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-hospital-blue/10 border border-hospital-blue/20 rounded-full px-4 py-1.5 text-hospital-blue text-xs sm:text-sm font-semibold mb-4 backdrop-blur-md"
          >
            <Stethoscope className="h-4 w-4 text-hospital-blue animate-pulse" />
            <span>Medical Experts</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-2 leading-tight tracking-tight text-gray-900"
          >
            <span className="hospital-blue">Meet Our Expert</span>{" "}
            <span className="hospital-green">DOCTORS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Our team of experienced medical professionals is dedicated to
            providing you with the highest standard of personalized healthcare
            and clinical excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Featured Main Doctor (Dr. Srinivas) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col h-full"
          >
            <div className="bg-gradient-to-br from-white via-white to-hospital-blue/5 border border-gray-100 shadow-xl shadow-slate-100/50 rounded-3xl p-5 md:p-6 lg:p-5 xl:p-6 flex flex-col justify-between h-full relative overflow-hidden group hover:shadow-2xl hover:border-hospital-blue/15 transition-all duration-300">
              {/* Glowing backdrop shape */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-hospital-blue/5 rounded-full blur-2xl pointer-events-none group-hover:bg-hospital-blue/10 transition-all duration-300" />

              <div className="flex flex-col md:flex-row lg:flex-col gap-5 lg:gap-4 xl:gap-6 items-center md:items-stretch lg:items-center h-full relative z-10 w-full">
                {/* Left/Top: Image and Badge */}
                <div className="flex flex-col items-center justify-center flex-shrink-0">
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-hospital-blue/10 text-hospital-blue border border-hospital-blue/20">
                      <Award className="w-3.5 h-3.5" />
                      Chief Medical Consultant
                    </span>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden border-2 border-hospital-blue/10 shadow-lg group-hover:border-hospital-blue/30 transition-all duration-300 bg-slate-50">
                    <Image
                      src="/images/dr_srinivas.png"
                      alt="Dr. Aleti Srinivas"
                      width={400}
                      height={500}
                      className="h-auto w-auto max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[160px] xl:max-w-[180px] object-contain transition-transform duration-500 "
                    />
                  </div>
                </div>

                {/* Right/Bottom: Content Details */}
                <div className="flex-1 flex flex-col justify-between text-center md:text-left lg:text-center mt-2 md:mt-0 lg:mt-2">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-2xl font-extrabold text-gray-900 mb-1 tracking-tight">
                      Dr. Aleti Srinivas Goud
                    </h3>
                    <p className="text-sm font-semibold text-hospital-green mb-2 lg:mb-1.5">
                      MS ORTHO ( Gandhi )
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3">
                      Specializes in advanced joint replacement, spine care, and
                      complex trauma treatments.
                    </p>

                    {/* Core Expertise Tags */}
                    <div className="flex flex-wrap justify-center md:justify-start lg:justify-center gap-1.5 mb-4">
                      <span className="px-2.5 py-1 bg-slate-50 text-slate-700 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-slate-100">
                        Joint Replacement
                      </span>
                      <span className="px-2.5 py-1 bg-slate-50 text-slate-700 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-slate-100">
                        Spine Surgery
                      </span>
                      <span className="px-2.5 py-1 bg-slate-50 text-slate-700 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-slate-100">
                        Complex Trauma
                      </span>
                    </div>
                  </div>

                  {/* Experience highlights */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100 mt-auto w-full">
                    <div className="flex items-center gap-3 bg-slate-50/50 p-2.5 rounded-xl border border-slate-100 hover:bg-white hover:border-hospital-blue/10 transition-all duration-300 justify-center md:justify-start lg:justify-center">
                      <div className="p-2 rounded-lg bg-hospital-blue/10 text-hospital-blue">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                          Experience
                        </p>
                        <p className="text-sm font-extrabold text-gray-800">
                          23 Years
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50/50 p-2.5 rounded-xl border border-slate-100 hover:bg-white hover:border-hospital-green/10 transition-all duration-300 justify-center md:justify-start lg:justify-center">
                      <div className="p-2 rounded-lg bg-hospital-green/10 text-hospital-green">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                          Specialist
                        </p>
                        <p className="text-sm font-extrabold text-gray-800">
                          15 Years
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Other Doctors Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col h-full"
          >
            <div className="bg-white border border-gray-100 shadow-xl shadow-slate-100/50 rounded-3xl p-5 md:p-6 lg:p-5 xl:p-6 flex flex-col h-full justify-between">
              <div className="flex flex-col h-full justify-between w-full">
                <div className="pb-6 py-3 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Our Specialized Medical Team
                  </h3>
                  <p className="text-sm text-gray-500">
                    A network of leading specialists collaborating to deliver
                    comprehensive care.
                  </p>
                </div>

                <div className="flex-1 flex flex-col justify-center py-4 lg:py-2">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 xl:gap-5"
                  >
                    {otherDoctors.map((doc, idx) => {
                      const Icon = doc.icon;
                      const isHiddenOnMobile = idx >= 4;
                      return (
                        <motion.div
                          key={`${doc.name}-${doc.specialty}`}
                          variants={itemVariants}
                          className={`group p-2.5 px-3.5 lg:p-3.5 lg:px-4 bg-slate-50/50 hover:bg-white border border-transparent hover:border-hospital-blue/20 rounded-2xl flex items-center gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-default ${isHiddenOnMobile && !showAll
                            ? "hidden lg:flex"
                            : "flex"
                            }`}
                        >
                          <div className="flex-shrink-0 p-2 rounded-xl bg-white group-hover:bg-hospital-blue/10 text-hospital-blue/80 group-hover:text-hospital-blue transition-colors duration-300 shadow-sm border border-gray-100/50">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-800 text-sm group-hover:text-hospital-blue transition-colors duration-300 truncate">
                              {doc.name}
                            </h4>
                            <p className="text-xs text-gray-500 font-semibold group-hover:text-hospital-green transition-colors duration-300 truncate">
                              {doc.specialty}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>

                <div className="mt-4 text-center lg:hidden">
                  <button
                    type="button"
                    onClick={() => setShowAll(!showAll)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border border-hospital-blue text-hospital-blue hover:bg-hospital-blue hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    {showAll ? "Show Less" : "Show More Specialists"}
                    {showAll ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
