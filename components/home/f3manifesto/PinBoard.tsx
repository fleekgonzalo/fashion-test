import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PinBoard = (): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="w-fit bg-gradient-to-r from-grad1 via-grad2 to-grad3 h-full relative border-2 border-borderBlue overflow-hidden">
      <div className="relative grid auto-rows-[auto auto] grid-flow-row w-full h-full">
        <div className="relative h-fit w-full row-start-1 pt-8">
          <div className="relative w-full h-auto grid grid-cols-3 grid-flow-row justify-center">
            <div className="relative h-full w-full flex justify-center align-center cursor-empireS hover:rotate-12">
              <Link href="https://digitalax.xyz">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={`cursor-empireS ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    width={50}
                    height={50}
                    src="/images/digi.png"
                    placeholder="blur"
                    blurDataURL="/images/blurred/digi.png"
                    onLoadingComplete={() => setBlur(false)}
                  />
                </a>
              </Link>
            </div>
            <div className="relative h-full w-full flex justify-center align-center cursor-empireS hover:rotate-12">
              <Link href="https://inarisynth.xyz">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={`cursor-empireS ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    width={50}
                    height={50}
                    src="/images/inari.png"
                    placeholder="blur"
                    blurDataURL="/images/blurred/inari.png"
                    onLoadingComplete={() => setBlur(false)}
                  />
                </a>
              </Link>
            </div>
            <div className="relative h-full w-full flex justify-center align-center cursor-empireS hover:rotate-12">
              <Link href="https://diysynth.xyz">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={`cursor-empireS ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    width={50}
                    height={50}
                    src="/images/diy.png"
                    placeholder="blur"
                    blurDataURL="/images/blurred/diy.png"
                    onLoadingComplete={() => setBlur(false)}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-fit w-full row-start-2">
          <div className="relative w-full max-h-fit grid auto-rows-[auto auto] grid-flow-row gap-8 justify-center pl-3 pr-3">
            <div className="relative w-fit h-fit row-start-1">
              <div className="relative grid auto-cols-[auto auto] grid-flow-col w-full h-fit">
                <div className="relative h-fit w-full col-start-1">
                  <div className="relative border border-offWhite text-darkP font-firaL w-fit h-fit p-1 text-xxs flex ml-4 mb-3">
                    68 73 89
                  </div>
                  <div className="relative grid auto-cols-[auto auto] grid-flow-col w-full h-fit">
                    <div className="relative top-1 h-fit w-fit font-fira text-darkP text-xs col-start-1 self-start mr-2">
                      01
                    </div>
                    <div className="relative h-fit w-full font-fira text-darkP text-md col-start-2 self-center">
                      D.I.Y <br /> <b className="font-firaB">Brutalism</b>
                    </div>
                  </div>
                </div>
                <div
                  className={`relative col-start-2 w-fit h-fit hover:rotate-45 h-fit w-fit self-center pl-3 ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    src="/images/wheel.png"
                    width={50}
                    height={50}
                    placeholder="blur"
                    blurDataURL="/images/blurred/wheel.png"
                    onLoadingComplete={() => setBlur(false)}
                  />
                </div>
              </div>
            </div>
            <div className="relative w-full h-fit row-start-2">
              <div className="relative grid auto-cols-[auto auto] grid-flow-col w-full h-fit">
                <div
                  className={`relative col-start-1 w-fit h-fit hover:rotate-45 h-fit w-fit self-center pr-2 ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    src="/images/player.png"
                    width={65}
                    height={50}
                    placeholder="blur"
                    blurDataURL="/images/blurred/player.png"
                    onLoadingComplete={() => setBlur(false)}
                  />
                </div>
                <div className="relative col-start-2 relative h-fit w-fit">
                  <div className="relative border border-offWhite text-darkP font-firaL w-fit h-fit p-1 text-xxs flex mr-4 mb-3">
                    100 105 103 105
                  </div>
                  <div className="relative grid auto-cols-[auto auto] grid-flow-col w-full h-fit">
                    <div className="relative top-1 h-fit w-fit font-fira text-darkP text-xs col-start-1 self-start mr-2">
                      02
                    </div>
                    <div className="relative h-fit w-fit font-fira text-darkP text-md col-start-2 self-center">
                      Digicore
                      <br /> <b className="font-firaB">Patchwork</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-fit h-fit row-start-3">
              <div className="relative grid auto-cols-[auto auto] grid-flow-col w-full h-fit">
                <div className="relative h-fit w-fit col-start-1">
                  <div className="relative border border-offWhite text-darkP font-firaL w-fit h-fit p-1 text-xxs flex ml-4 mb-3">
                    118 105 110 116
                  </div>
                  <div className="relative grid auto-cols-[auto auto] grid-flow-col w-full h-fit">
                    <div className="relative top-1 h-fit w-fit font-fira text-darkP text-xs col-start-1 self-start mr-2">
                      03
                    </div>
                    <div className="relative h-fit w-fit font-fira text-darkP text-md col-start-2 self-center">
                      Vintage <br /> <b className="font-firaB">Americana</b>
                    </div>
                  </div>
                </div>
                <div
                  className={`relative col-start-2 w-fit h-fit hover:rotate-45 h-fit w-fit self-center pl-4 ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    src="/images/flag.png"
                    width={65}
                    height={50}
                    placeholder="blur"
                    blurDataURL="/images/blurred/flag.png"
                    onLoadingComplete={() => setBlur(false)}
                  />
                </div>
              </div>
            </div>
            <div className="relative w-fit h-fit row-start-4">
              <div className="relative grid auto-cols-[auto auto] grid-flow-col w-full h-fit">
                <div className={`relative col-start-1 w-fit h-fit hover:rotate-45 h-fit w-fit self-center pr-2 ${blur && "blur-sm animate-unblur"}`}>
                  <Image
                    src="/images/fox.png"
                    width={75}
                    height={60}
                    placeholder="blur"
                    blurDataURL="/images/blurred/fox.png"
                    onLoadingComplete={() => setBlur(false)}
                  />
                </div>
                <div className="relative col-start-2 relative h-fit w-fit">
                  <div className="relative border border-offWhite text-darkP font-firaL w-fit h-fit p-1 text-xxs flex mr-4 mb-3 ml-6">
                    119 101 98
                  </div>
                  <div className="relative grid auto-cols-[auto auto] grid-flow-col w-full h-fit">
                    <div className="relative top-1 h-fit w-fit font-fira text-darkP text-xs col-start-1 self-start mr-2">
                      04
                    </div>
                    <div className="relative h-fit w-fit font-fira text-darkP text-md col-start-2 self-center">
                      Cottagecore
                      <br /> <b className="font-firaB">Web Kitsch</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-fit w-full row-start-3 pb-2 pr-3 pl-3">
          <div className="relative leading-snug w-fit h-fit p-1 text-xs font-firaL text-center inline-flex align-center justify-center bottom-0">
            MICROFACTORY CO-OPs <br />
            <br />
            VIRTUAL, LATENT & IRL SPACE Chapter 0001 - NYC Edition
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinBoard;
