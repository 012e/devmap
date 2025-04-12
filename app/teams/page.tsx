"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import ListBlock from "./block";
import ListSense from "./sense";
import { MdContentCopy } from "react-icons/md";
import TabIndex from "./tab_index";
export default function page() {
  const [copied, setCopied] = React.useState(false);
  const textToCopy = "https://hentai-ne-giam-bam-khong";
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div>
      {/* block 1: introduce */}
      <div className="flex align-baseline lg:mx-60 md:mx-10 sm:mx-10 gap-2 py-15 mx-10">
        <div className="space-y-5 w-300">
          <div className="space-y-2">
            <h1 className="font-bold text-5xl">Roadmaps for Gays</h1>
            <p className="text-lg text-gray-600">
              Train, plan and track your gay's skills.
            </p>
          </div>
          <div className="space-y-5">
            <ListSense></ListSense>
            <Button className="hover:bg-gray-700 hover:cursor-pointer">
              Create group gay pls
            </Button>
          </div>
        </div>
        <div className="hidden lg:block justify-self-end">
          <img src="/hero-img.png" alt="not found image" className=""></img>
        </div>
      </div>
      <hr />
      {/* block 2: skills */}
      <div className="md:mx-10 sm:mx-10 lg:mx-60 py-15 mx-10">
        <div className="space-y-10">
          <div className="space-y-3">
            <h2 className="font-bold text-3xl">
              Track and guide your gay's knowledge
            </h2>
            <p>
              Individual and team level growth plans, progress tracking, skill
              gap analysis, team insights and more.
            </p>
          </div>
          <div className="">
            <ListBlock />
          </div>
        </div>
      </div>
      <hr />
      {/* block 3: how it working */}
      <div className="py-15 lg:mx-60 sm:mx-10 space-y-5 flex-col hidden min-[1080px]:block max-[599px]:hidden mx-10 ">
        <div className="space-y-3">
          <h2 className="font-bold text-3xl">See how gay works</h2>
          <p>
            Here is a sneak peek of what you can do today (more coming soon!)
          </p>
        </div>
        <div className="">
          <TabIndex />
        </div>
      </div>
      <hr />
      {/* block 4: pricing */}
      <div className="py-15 lg:mx-60 sm:mx-10 md:mx-10 space-y-5 mx-10">
        <div className="space-y-3">
          <h2 className="font-bold text-3xl">Beta Pricing</h2>
          <p>
            We are currently in public beta and are offering free access to all
            features.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 md:gap-y-3 sm:gap-y-3 gap-y-3 lg:gap-x-3">
          <div className="rounded-2xl border-2 ">
            <div className="p-5 text-center">
              <h3 className="font-bold text-2xl">Free</h3>
              <p>No credit card required</p>
              <div className="flex items-start justify-center py-5">
                <span className="text-sm mt-1">$</span>
                <span className="text-5xl font-bold ml-1">0</span>
              </div>
              <Button className="hover:bg-gray-700 hover:cursor-pointer">
                Claim gay
              </Button>
            </div>
            <hr />
            <div className="p-5 text-center space-y-2">
              <p className="font-bold">All the features</p>
              <p>Roles and Permissions</p>
              <p>Custom Roadmaps</p>
              <p>Sharing Options</p>
              <p>Progress Tracking</p>
              <p>Team Insights</p>
              <p>Onboarding support</p>
            </div>
          </div>
          <div className="rounded-2xl border-2 p-10 col-span-2 flex-col text-center flex justify-center space-y-3">
            <div className="flex justify-center">
              <img
                src="/contact.png"
                alt="not found image"
                className="w-50 "
              ></img>
            </div>
            <p>Questions? We are here to help!</p>
            <div className="flex justify-center">
              <Button
                onClick={handleCopy}
                className="w-40 hover:bg-gray-100 text-black hover:cursor-pointer bg-white border-2"
              >
                {copied ? "Copied!" : "Blued.com"}
                <span>
                  <MdContentCopy size={40} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
