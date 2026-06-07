"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Award,
  Brain,
  Clock,
  Heart,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  User,
} from "lucide-react";
import Image from "next/image";

export function DoctorsSection() {
  const otherDoctors = [
    {
      name: "Dr. A. Srinivas",
      specialty: "Senior Consultant",
      icon: Stethoscope,
    },
    {
      name: "Dr. Sushanth",
      specialty: "DNB Ortho",
      icon: Activity,
    },
    {
      name: "Dr. Vino",
      specialty: "Consultant Physician",
      icon: Stethoscope,
    },
    {
      name: "Dr. Shashidhar",
      specialty: "Emergency & ICU",
      icon: HeartPulse,
    },
    {
      name: "Dr. Srikanth",
      specialty: "Neuro",
      icon: Brain,
    },
    {
      name: "Dr. Vinod Kumar",
      specialty: "General Medicine",
      icon: User,
    },
    {
      name: "Dr. Rajakiran",
      specialty: "Plastic",
      icon: Sparkles,
    },
    {
      name: "Dr. Ponthan",
      specialty: "Cardio",
      icon: Heart,
    },
    {
      name: "Dr. Srikanth",
      specialty: "Neurosurgeon",
      icon: Brain,
    },
    {
      name: "Dr. Ramakrishna",
      specialty: "Radiology",
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
      className="py-16 md:py-24 px-4 sm:px-6 bg-slate-50/50 scroll-mt-20 overflow-hidden relative"
    >
      {/* Background patterns and glowing mesh blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-hospital-blue/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] bg-hospital-green/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
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
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight tracking-tight text-gray-900"
          >
            Meet Our <span className="text-hospital-blue">Expert Doctors</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Featured Main Doctor (Dr. Srinivas) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col h-full"
          >
            <div className="bg-white border border-gray-100 shadow-xl shadow-slate-100/50 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden group hover:shadow-2xl hover:border-hospital-blue/10 transition-all duration-300">
              {/* Glowing backdrop shape */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-hospital-blue/5 rounded-full blur-2xl pointer-events-none group-hover:bg-hospital-blue/10 transition-all duration-300" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-hospital-blue/10 text-hospital-blue">
                    <Award className="w-3.5 h-3.5" />
                    Chief Medical Consultant
                  </span>
                </div>

                {/* Custom image layout with neat border/glow */}
                <div className="relative aspect-square w-full max-w-[280px] sm:max-w-xs mx-auto mb-6 rounded-2xl overflow-hidden border-2 border-hospital-blue/10 shadow-lg group-hover:border-hospital-blue/30 transition-all duration-300">
                  <Image
                    src="/images/dr_srinivas.png"
                    alt="Dr. Srinivas"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Dr. Srinivas
                  </h3>
                  <p className="text-sm font-semibold text-hospital-green mb-4">
                    Senior Consultant & Chief Surgeon
                  </p>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed italic mb-8 max-w-md mx-auto md:mx-0">
                    "Dedicated to delivering exceptional medical care with
                    compassion, expertise, and a commitment to clinical
                    excellence for every patient."
                  </p>
                </div>
              </div>

              {/* Experience highlights */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-hospital-blue/5 text-hospital-blue">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      Experience
                    </p>
                    <p className="text-sm font-bold text-gray-800">20+ Years</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-hospital-green/5 text-hospital-green">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      Quality
                    </p>
                    <p className="text-sm font-bold text-gray-800">
                      Direct Care
                    </p>
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
            <div className="bg-white border border-gray-100 shadow-xl shadow-slate-100/50 rounded-3xl p-6 md:p-8 flex flex-col h-full justify-between">
              <div>
                <div className="mb-6 pb-4 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Our Specialized Medical Team
                  </h3>
                  <p className="text-sm text-gray-500">
                    A network of leading specialists collaborating to deliver
                    comprehensive care.
                  </p>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {otherDoctors.map((doc) => {
                    const Icon = doc.icon;
                    return (
                      <motion.div
                        key={`${doc.name}-${doc.specialty}`}
                        variants={itemVariants}
                        className="group p-4 bg-slate-50/50 hover:bg-white border border-transparent hover:border-hospital-blue/20 rounded-2xl flex items-center gap-3.5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-default"
                      >
                        <div className="flex-shrink-0 p-2.5 rounded-xl bg-white group-hover:bg-hospital-blue/10 text-hospital-blue/80 group-hover:text-hospital-blue transition-colors duration-300 shadow-sm border border-gray-100/50">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base group-hover:text-hospital-blue transition-colors duration-300 truncate">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
