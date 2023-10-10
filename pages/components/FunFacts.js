import React from "react";

export function FunFacts() {
  const handleFCPXASRClick = () => {
    const fcpx_asr = document.getElementById("fcpx-auto-captions");
    if (fcpx_asr) {
      fcpx_asr.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="py-4 px-10 md:px-16 lg:px-20 xl:px-32 2xl:px-72 mb-8">
      <h3 className="text-3xl py-1 mb-3">Fun Facts</h3>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="text-md leading-8 text-gray-600">
            <div>
              <div className="mb-4">
                I enjoyed creating motion graphics videos using Adobe After
                Effects when I was an undergraduate student. At the final year
                of my uni, I was deeply impressed by the impact of AI
                productivity tools on video editing workflows.{" "}
              </div>
              <div className="mb-4">
                The AI tool mentioned is the Auto Captions in CapCut by
                ByteDance. Most video editors prefer using professional software
                such as Final Cut Pro or Adobe Premiere Pro. CapCut's Auto
                Captions allowed previously tedious subtitle work to be
                completed within minutes. At that time, Adobe Premiere did not
                launch the automatic speech recognition subtitle feature. Final
                Cut Pro, my favorite video editing software, still hasn't
                officially launched this feature.{" "}
                <span className="text-[#ff6188]" onClick={handleFCPXASRClick}>
                  So, I created one!
                </span>{" "}
                I developed a macOS app that provides auto captions for FCP
                powered by Open AI's Whisper model.{" "}
              </div>
              <div className="mb-4">
                During that time, I also tried CapCut's video background removal
                feature - Auto cutout. Compared to Adobe After Effects'
                Rotobrush at that time, its cutout was extremely precise. It
                eliminated the hassle of manually masking frame by frame with
                just one click. Back then, I knew nothing about computer vision.
                But haha, now I have gained some understanding.
              </div>
              <div className="mb-4">
                Those inspire me to pursuing a master's degree in artificial
                intelligence. Since then I began to develop productivity tools
                for video editing software.
              </div>
            </div>

            <div>
              <ul className="list-disc px-6">
                <li>
                  I'm proficient in all mainstream video editing software.
                  <ul className="max-w-xs lg:max-w-md mt-2">
                    <li className="mb-3">
                      <p className="mb-1">Final Cut Pro</p>
                      <span className="h-2.5 bg-black block rounded-full">
                        <span className="h-2.5 bg-[#ff6188] w-[100%] float-left rounded-full"></span>
                      </span>
                    </li>
                    <li className="mb-3">
                      <p className="mb-1">Adobe After Effects</p>
                      <span className="h-2.5 bg-black block rounded-full">
                        <span className="h-2.5 bg-[#ff6188] w-[100%] float-left rounded-full"></span>
                      </span>
                    </li>
                    <li className="mb-3">
                      <p className="mb-1">Adobe Premiere Pro</p>
                      <span className="h-2.5 bg-black block rounded-full">
                        <span className="h-2.5 bg-[#ff6188] w-[80%] float-left rounded-full"></span>
                      </span>
                    </li>
                    <li className="mb-3">
                      <p className="mb-1">Sony Vegas</p>
                      <span className="h-2.5 bg-black block rounded-full">
                        <span className="h-2.5 bg-[#ff6188] w-[80%] float-left rounded-full"></span>
                      </span>
                    </li>
                    <li className="mb-3">
                      <p className="mb-1">DaVinci Resolve</p>
                      <span className="h-2.5 bg-black block rounded-full">
                        <span className="h-2.5 bg-[#ff6188] w-[70%] float-left rounded-full"></span>
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  My editing evolution (2016-2021)
                  <ul className="list-disc pl-6">
                    <li>Final Cut Pro since 2016</li>
                    <li>
                      Adobe After Effect since 2018 (started motion design)
                    </li>
                  </ul>
                </li>
                <li>My favorite AE built-in effect is "Venetian Blinds".</li>
                <li>My favorite AE plugin effect is "S_Blur_MoCurves".</li>
                <li>My favorite moive is THE IMITATION GAME(2014).</li>
                <li>My favorite radio drama is《别来无恙》.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <video src="/dev-log.mp4" controls />
        </div>
      </div>
    </div>
  );
}

export default FunFacts;
