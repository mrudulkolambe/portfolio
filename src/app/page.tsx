import AboutInfoCard from "@/components/AboutInfoCard"
import { FlipWords } from "@/components/FlipWords"
import GlowButton from "@/components/GlowButton"
import ImgSlider from "@/components/ImgSlider"
import ServiceCard from "@/components/ServiceCard"
import ServiceSlider from "@/components/ServiceSlider"
import StackCard from "@/components/StackCard"
import WorkSlider from "@/components/WorkSlider"

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen w-screen flex-col items-center justify-between p-8">


      <div className="gap-3 grid grid-cols-12 w-full h-full">
        <div className="h-full col-span-3 main gap-3 flex flex-col">

          <div className="bento-item bento-item-flex justify-between">
            <div className="flex items-center flex-col">
              <span className="flex items-center justify-center gap-2 text-white/50 text-sm"><img src="https://framerusercontent.com/images/UBcgJtsbwOAPFFDLBuFRJvN0.svg" className="h-5 w-5" alt="" /> My Stacks</span>
              <p className="text-center font-semibold mt-1">Tech Arsenal</p>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full h-max">
              <StackCard img="/assets/nextjs.svg" link="https://nextjs.org/" title="NextJS" />
              <StackCard img="/assets/react.svg" link="https://react.dev/" title="ReactJS" />
              <StackCard img="/assets/tailwind.svg" link="https://tailwindcss.com/" title="Tailwind" />
              <StackCard img="/assets/flutter.svg" link="https://flutter.dev/" title="Flutter" />
            </div>
          </div>
          <div className="bento-item bento-item-flex relative gap-5 px-0">
            <div className="flex items-center flex-col px-5">
              <span className="flex items-center justify-center gap-2 text-white/50 text-sm"><img src="https://framerusercontent.com/images/pWnyWbSLaOXRIu2gmjo18aL9N0.svg" className="h-5 w-5" alt="" /> Projects</span>
              <p className="text-center font-semibold mt-1">Works Gallery</p>
            </div>
            <WorkSlider />
            <div className="absolute bottom-8 z-[10] left-1/2 -translate-x-1/2 p-1 rounded-xl bg-tertiary/70 backdrop-blur-md w-max">
              <button className="text-sm purple-button px-7 py-2.5 text-black/80 font-semibold rounded-xl">View Works</button>
            </div>
          </div>
          <div className="bento-item bento-item-flex relative gap-5 px-0">
            <div className="flex items-center flex-col px-5">
              <span className="flex items-center justify-center gap-2 text-white/50 text-sm"><img src="https://framerusercontent.com/images/jacjITjmU0DoMreUZALWPAiyqhU.svg" className="h-5 w-5" alt="" /> Services</span>
              <p className="text-center font-semibold mt-1">Solutions Suite</p>
            </div>
            <div>
              <ServiceSlider />
            </div>
          </div>

        </div>
        {/* Second Col */}
        <div className="grid grid-rows-9 col-span-4 gap-3 auto-rows-fr">
          {/* 1st item */}
          <div className="row-span-2 flex flex-0 gap-3 h-full">
            <div className="flex-0 bento-item bento-item-flex justify-between px-3">
              <div className="flex items-center gap-1 justify-center">
                <h1 className="text-6xl">09</h1>
                <h3 className="text-3xl font-bold plus">+</h3>
              </div>
              <div className="w-full rounded-full bg-secondary/50 border border-secondary px-2 py-1.5 text-center">
                <p className="h-max flex gap-1 items-center justify-center text-xs font-semibold text-grey"><img className="h-[18px] w-[18px]" src="https://framerusercontent.com/images/TtE1Ucrq3H5xVwYxH1lG8IiWM.svg" alt="" />Projects</p>
              </div>
            </div>

            <div className="flex-0 bento-item bento-item-flex justify-between px-3">
              <div className="flex items-center gap-1 justify-center">
                <h1 className="text-6xl">07</h1>
                <h3 className="text-3xl font-bold plus">+</h3>
              </div>
              <div className="w-full rounded-full bg-secondary/50 border border-secondary px-2 py-1.5 text-center">
                <p className="h-max flex gap-1 items-center justify-center text-xs font-semibold text-grey"><img className="h-[18px] w-[18px]" src="https://framerusercontent.com/images/3g2Cba5ZQlYmKnSN67kVjWlItTk.svg" alt="" />Happy Clients</p>
              </div>
            </div>
            <div className="flex-0 bento-item bento-item-flex justify-between px-3">
              <div className="flex items-center gap-1 justify-center">
                <h1 className="text-6xl">03</h1>
                <h3 className="text-3xl font-bold plus">+</h3>
              </div>
              <div className="w-full rounded-full bg-secondary/50 border border-secondary px-2 py-1.5 text-center">
                <p className="h-max flex gap-1 items-center justify-center text-xs font-semibold text-grey"><img className="h-[18px] w-[18px]" src="https://framerusercontent.com/images/BwWdTTsCmCvWVRIwVB2vLrPGY.svg" alt="" />Year Expertise</p>
              </div>
            </div>

          </div>
          {/* 2nd item */}
          <div className="row-span-4 bento-item">
            <div className="flex flex-col">
              <div className="flex gap-4">
                <img className="h-[105px] w-[100px] object-cover rounded-2xl bg-[#A290FC]" src="/assets/asdasdmain.png" alt="" />
                <div>
                  <div className="h-max text-gray-400 font-semibold bg-secondary p-2 px-5 rounded-full w-max text-sm flex items-center">
                    <div className="relative flex items-center justify-center mr-4">
                      <span className="absolute rounded-full animate-ping bg-green-500 h-3 w-3 opacity-70 duration-1000"></span>
                      <span className="absolute rounded-full bg-green-400 h-1.5 w-1.5 "></span>
                    </div>
                    <p>Available to work</p>
                  </div>
                  <h2 className="mt-2 text-xl font-bold">Mrudul Kolambe</h2>
                  <span className="mt-5 text-sm text-gray-400">I&apos;m a<FlipWords className="font-semibold text-[#A08EF8]" words={["Web Developer", "FullStack Developer", "MERN stack developer", "Devops Engineer"]} /></span>
                </div>
              </div>
              <div className="mt-4 bg-secondary/50 p-3 w-full rounded-2xl flex flex-wrap gap-x-3 gap-y-2 border border-tertiary/30">
                <AboutInfoCard img="https://framerusercontent.com/images/LnINChddZ7WxbcCRF4yX3pY30.svg" title="India" />
                <AboutInfoCard img="https://framerusercontent.com/images/Je0bncWlBPyemX1nWwnHkgx7Pd4.svg" title="English & Hindi" />
                <AboutInfoCard img="https://framerusercontent.com/images/oT8R3yT3QObEqWbS7g0bAjsEjk.svg" title="Computer Engineer" />
                <AboutInfoCard img="https://framerusercontent.com/images/XuLSzLC1W0MEx1tX6UiWRrGwsQ.svg" title="Freelancer" />
                <AboutInfoCard img="https://framerusercontent.com/images/zr11FpnutRZXbPLLyBlAwdp7vQ.svg" title="Good Boy" />
              </div>
              <div className="mt-3 gap-3 flex items-center">
                <GlowButton child={<><img className="h-5 w-5" src="https://framerusercontent.com/images/Noy5SjiQS1OWy3FZmUE4TGu45ZA.svg" /> <p>Whatsapp me</p></>} />
                <GlowButton child={<><img className="h-5 w-5" src="https://framerusercontent.com/images/4rZDKWUuqRB6ULj5HSwlfav8tZg.svg" /> <p>Email me</p></>} />
              </div>
            </div>
          </div>

          {/* 3rd item */}
          <div className="row-span-3 bento-item"></div>
        </div>


        <div className="h-full col-span-5 grid grid-rows-9 gap-3">
          <div className="h-full row-span-5 grid grid-cols-9 gap-3">
            <div className="h-full bento-item col-span-5"></div>
            <div className="h-full bento-item col-span-4 bento-item-flex px-0">
              <div className="flex flex-col items-center px-5 overflow-hidden pb-3">
                <span className="flex items-center justify-center gap-2 text-white/50 text-sm">
                  <img src="https://framerusercontent.com/images/sLqaFTUqaRxZE3NDOW5UBvaw.svg" className="h-5 w-5 object-cover" alt="" /> Work Process
                </span>
                <p className="text-center font-semibold mt-1 overflow-hidden">Workflow Highlights</p>
              </div>
              <div className="pt-5 border-t px-5 gap-2.5 flex flex-col border-tertiary">
                <ServiceCard className="w-full" title="Requirements Analysis" img="https://framerusercontent.com/images/1T0QC3LeQ3V4l7797MOyLkfjLg.svg" />
                <ServiceCard className="w-full" title="Planning" img="https://framerusercontent.com/images/VbClbr6IpnfOIpgpqALPBgmZcA.svg" />
                <ServiceCard className="w-full" title="Development" img="https://framerusercontent.com/images/8m3vpxwjPd9KqJSt4RmKKimrU0E.svg" />
                <ServiceCard className="w-full" title="Testing" img="https://framerusercontent.com/images/HMSzDHzbSdFSiKJtLrgiPY70S3s.svg" />
                <ServiceCard className="w-full" title="Deployment" img="https://framerusercontent.com/images/4jy4JFNUcDYkbxATO7bQgis0.svg" />
              </div>
            </div>
          </div>
          <div className="h-full row-span-4 grid grid-cols-9 gap-3">
            <div className="h-full bento-item col-span-4 px-0">
              <div className="flex flex-col items-center px-5 overflow-hidden pb-3">
                <span className="flex items-center justify-center gap-2 text-white/50 text-sm">
                  <img src="https://framerusercontent.com/images/0vhyMwtblVaa7PxizFESpz2nQ.svg" className="h-5 w-5 object-cover" alt="" /> Follow Me
                </span>
                <p className="text-center font-semibold mt-1 overflow-hidden">Online Presence</p>
              </div>
              <div className="pt-5 border-t px-5 gap-2.5 flex flex-col border-tertiary">
                <StackCard img="https://framerusercontent.com/images/hkfUpw762MHnL3zUhjcmbswdk.svg" link="https://nextjs.org/" title="@mrudulkolambe" />
                <StackCard img="https://framerusercontent.com/images/cKpPPh92KzrcERv5MNOVmrY1h0.svg" link="https://nextjs.org/" title="@mrudul-kolambe" />
                <StackCard img="/assets/github.svg" link="https://nextjs.org/" title="@mrudulkolambe" />
              </div>
            </div>
            <div className="h-full bento-item col-span-5 flex flex-col items-center justify-evenly">
              <span className="h-[56px] w-[56px] bg-secondary flex items-center justify-center rounded-full">
                <img className="h-[28px] w-[28px]" src="https://framerusercontent.com/images/RNhprVgPRIRYVpd0baDySQLMk.svg" alt="" />
              </span>
              <div className="mt-3">
                <h2 className="text-lg font-bold text-white text-center">Let&apos;s Work Together</h2>
                <p className="text-gray-400 text-sm text-center mt-1">Let&apos;s Make Magic Happen Together!</p>
              </div>
              <div className="flex flex-col mt-2 gap-2.5 w-full">
                <GlowButton child={<><img className="h-5 w-5" src="https://framerusercontent.com/images/1i79OSogPnkvzpCkZ3nqdP1UKWY.svg" /> <p>Schedule Call</p></>} />
                <GlowButton child={<><img className="h-5 w-5" src="https://framerusercontent.com/images/Noy5SjiQS1OWy3FZmUE4TGu45ZA.svg" /> <p>Whatsapp me</p></>} />
              </div>
            </div>
          </div>
        </div>




      </div>
    </main >
  )
}