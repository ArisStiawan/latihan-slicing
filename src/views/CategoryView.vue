<script setup lang="ts">
import FooterContent from '@/components/FooterContent.vue';
import HeaderContent from '@/components/HeaderContent.vue';
</script>


<template>
  <HeaderContent/>
  <main class="w-full h-full overflow-x-hidden">
      <section class="bg-x-lavender p-[80px] flex justify-center items-center">
        <div class="flex flex-col items-center gap-4">
          <h1
            class="text-x-black text-[56px] font-bold leading-[64px] tracking-[-2px]"
          >
            Business
          </h1>
          <p class="w-[515px] text-center text-x-mediumgrey leading-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <a href="/Blog">
          <h5 class="text-x-black font-semibold leading-[20px] tracking-[3px]">
            Blog > Business
          </h5>
        </a>
        </div>
      </section>

      <section class="bg-wgite p-[80px] flex justify-between items-start gap-4">
        <article class="flex flex-col gap-8 w-[70%]">
          <div class="flex justify-between items-center gap-8">
            <img
              class="w-[294px] h-[312px]"
              src="@/assets/images/misc/ngajar.png"
              alt="Two woman in erase board"
            />
            <div class="flex flex-col gap-4">
              <p
                class="text-x-yellow font-semibold leading-[20px] tracking-[3px]"
              >
                BUSINESS
              </p>
              <h2
                href="/author"
                class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]"
              >
                Top 6 free website mockup tools 2022
              </h2>
              <p href="/author" class="text-x-mediumgrey leading-[28px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec.
              </p>
            </div>
          </div>
          <div class="flex justify-between items-center gap-8">
            <img
              class="w-[294px] h-[312px]"
              src="@/assets/images/misc/ngajar.png"
              alt="Two woman in erase board"
            />
            <div class="flex flex-col gap-4">
              <p
                class="text-x-yellow font-semibold leading-[20px] tracking-[3px]"
              >
                BUSINESS
              </p>
              <h2
                class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]"
              >
                Step-by-step guide to choosing great font pairs
              </h2>
              <p class="text-x-mediumgrey leading-[28px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec.
              </p>
            </div>
          </div>
          <div class="flex justify-between items-center gap-8">
            <img
              class="w-[294px] h-[312px]"
              src="@/assets/images/misc/ngajar.png"
              alt="Two woman in erase board"
            />
            <div class="flex flex-col gap-4">
              <p
                class="text-x-yellow font-semibold leading-[20px] tracking-[3px]"
              >
                BUSINESS
              </p>
              <h2
                class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]"
              >
                Ten free foogle fonts that you should use
              </h2>
              <p class="text-x-mediumgrey leading-[28px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec.
              </p>
            </div>
          </div>
          <div class="flex justify-between items-center gap-8">
            <img
              class="w-[294px] h-[312px]"
              src="@/assets/images/misc/ngajar.png"
              alt="Two woman in erase board"
            />
            <div class="flex flex-col gap-4">
              <p
                class="text-x-yellow font-semibold leading-[20px] tracking-[3px]"
              >
                BUSINESS
              </p>
              <h2
                class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]"
              >
                What did I learn from doing 50+ design sprints?
              </h2>
              <p class="text-x-mediumgrey leading-[28px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec.
              </p>
            </div>
          </div>
        </article>
        <aside class="w-[27%]">
          <div class="flex flex-col gap-10">
            <div class="flex flex-col gap-10">
              <h2
                class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]"
              >
                Categories
              </h2>
              <div class="flex flex-col gap-6">
                <div class=" p-6 h-[96px] flex border-[1.5px] hover:bg-x-blue hover:text-white items-center gap-4">
                  <div
                    class="w-[48px] h-[48px] bg-x-lightyellow rounded flex items-center justify-center"
                  >
                    <img src="@/assets/images/logo/shuttle.png" alt="Startup" />
                  </div>
                  <h3
                    class="text-3xl font-bold leading-[40px] tracking-[-1px]"
                  >
                    Startup
                  </h3>
                </div>
                <div
                  class="h-[96px] border-[1.5px] border-[#C1C1C1] p-6 flex items-center gap-4 hover:bg-x-blue hover:border-x-blue hover:cursor-pointer transition duration-200 ease-in-out group"
                >
                  <div
                    class="w-[48px] h-[48px] bg-x-lightyellow rounded flex items-center justify-center"
                  >
                  <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M25.0305 13.9138L14.04 12.2443C13.53 12.1648 13.0095 12.3043 12.6195 12.6343C12.2295 12.9748 12 13.4638 12 13.9738V35.0443C12 35.5948 12.45 36.0448 13.0005 36.0448H16.251V30.7948C16.251 29.8243 17.031 29.0443 18.0015 29.0443H20.502C21.4725 29.0443 22.2525 29.8243 22.2525 30.7948V36.0448H26.502V15.6448C26.5005 14.7838 25.8795 14.0548 25.0305 13.9138ZM17.5005 26.7943H16.0005C15.5865 26.7943 15.2505 26.4583 15.2505 26.0443C15.2505 25.6303 15.5865 25.2943 16.0005 25.2943H17.5005C17.9145 25.2943 18.2505 25.6303 18.2505 26.0443C18.2505 26.4583 17.9145 26.7943 17.5005 26.7943ZM17.5005 23.7943H16.0005C15.5865 23.7943 15.2505 23.4583 15.2505 23.0443C15.2505 22.6303 15.5865 22.2943 16.0005 22.2943H17.5005C17.9145 22.2943 18.2505 22.6303 18.2505 23.0443C18.2505 23.4583 17.9145 23.7943 17.5005 23.7943ZM17.5005 20.7943H16.0005C15.5865 20.7943 15.2505 20.4583 15.2505 20.0443C15.2505 19.6303 15.5865 19.2943 16.0005 19.2943H17.5005C17.9145 19.2943 18.2505 19.6303 18.2505 20.0443C18.2505 20.4583 17.9145 20.7943 17.5005 20.7943ZM17.5005 17.7943H16.0005C15.5865 17.7943 15.2505 17.4583 15.2505 17.0443C15.2505 16.6303 15.5865 16.2943 16.0005 16.2943H17.5005C17.9145 16.2943 18.2505 16.6303 18.2505 17.0443C18.2505 17.4583 17.9145 17.7943 17.5005 17.7943ZM22.5 26.7943H21C20.586 26.7943 20.25 26.4583 20.25 26.0443C20.25 25.6303 20.586 25.2943 21 25.2943H22.5C22.914 25.2943 23.25 25.6303 23.25 26.0443C23.25 26.4583 22.914 26.7943 22.5 26.7943ZM22.5 23.7943H21C20.586 23.7943 20.25 23.4583 20.25 23.0443C20.25 22.6303 20.586 22.2943 21 22.2943H22.5C22.914 22.2943 23.25 22.6303 23.25 23.0443C23.25 23.4583 22.914 23.7943 22.5 23.7943ZM22.5 20.7943H21C20.586 20.7943 20.25 20.4583 20.25 20.0443C20.25 19.6303 20.586 19.2943 21 19.2943H22.5C22.914 19.2943 23.25 19.6303 23.25 20.0443C23.25 20.4583 22.914 20.7943 22.5 20.7943ZM22.5 17.7943H21C20.586 17.7943 20.25 17.4583 20.25 17.0443C20.25 16.6303 20.586 16.2943 21 16.2943H22.5C22.914 16.2943 23.25 16.6303 23.25 17.0443C23.25 17.4583 22.914 17.7943 22.5 17.7943Z"
              fill="#232536"
            />
            <path
              d="M34.6205 22.887L27.5 21.396V36.045H34.25C35.2145 36.045 36.0005 35.2605 36.0005 34.2945V24.597C36.0005 23.7705 35.4365 23.067 34.6205 22.887ZM32.2505 33.045H30.7505C30.3365 33.045 30.0005 32.709 30.0005 32.295C30.0005 31.881 30.3365 31.545 30.7505 31.545H32.2505C32.6645 31.545 33.0005 31.881 33.0005 32.295C33.0005 32.709 32.6645 33.045 32.2505 33.045ZM32.2505 30.045H30.7505C30.3365 30.045 30.0005 29.709 30.0005 29.295C30.0005 28.881 30.3365 28.545 30.7505 28.545H32.2505C32.6645 28.545 33.0005 28.881 33.0005 29.295C33.0005 29.709 32.6645 30.045 32.2505 30.045ZM32.2505 27.045H30.7505C30.3365 27.045 30.0005 26.709 30.0005 26.295C30.0005 25.881 30.3365 25.545 30.7505 25.545H32.2505C32.6645 25.545 33.0005 25.881 33.0005 26.295C33.0005 26.709 32.6645 27.045 32.2505 27.045Z"
              fill="#075EFD"
            />
          </svg>
                  </div>
                  <h3
                    class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px] group-hover:text-white transition duration-200 ease-in-out"
                  >
                    Business
                  </h3>
                </div>
                <div
                  class="h-[96px] border-[1.5px] border-[#C1C1C1] p-6 flex items-center gap-4 hover:bg-x-blue hover:border-x-blue hover:cursor-pointer transition duration-200 ease-in-out group"
                >
                  <div
                    class="w-[48px] h-[48px] bg-x-lightyellow rounded flex items-center justify-center"
                  >
                    <img src="@/assets/images/logo/economy.png" alt="Economy" />
                  </div>
                  <h3
                    class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px] group-hover:text-white transition duration-200 ease-in-out"
                  >
                    Economy
                  </h3>
                </div>
                <div
                  class="h-[96px] border-[1.5px] border-[#C1C1C1] p-6 flex items-center gap-4 hover:bg-x-blue hover:border-x-blue hover:cursor-pointer transition duration-200 ease-in-out group"
                >
                  <div
                    class="w-[48px] h-[48px] bg-x-lightyellow rounded flex items-center justify-center"
                  >
                    <img
                      src="@/assets/images/logo/technology.png"
                      alt="Technology"
                    />
                  </div>
                  <h3
                    class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px] group-hover:text-white transition duration-200 ease-in-out"
                  >
                    Technology
                  </h3>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-8">
              <h2
                class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]"
              >
                All Tags
              </h2>
              <div class="flex flex-wrap items-center justify-between gap-4">
                <button
                  class="w-48 hover:bg-x-blue hover:text-white border-x-mediumgrey border-2 rounded-full font-bold text-sm text-x-black leading-[32px] px-[38px] py-[8px]"
                >
                  Business
                </button>
                <button
                  class="hover:bg-x-blue hover:text-white border-x-mediumgrey border-2 border rounded-full font-bold text-sm text-x-black leading-[32px] px-[38px] py-[8px]"
                >
                  Experience
                </button>
                <button
                  class="w-32 hover:bg-x-blue hover:text-white border-x-mediumgrey border-2 rounded-full font-bold text-sm text-x-black leading-[32px] px-[32px] py-[8px]"
                >
                  Screen
                </button>
                <button
                  class="w-48 hover:bg-x-blue hover:text-white border-x-mediumgrey border-2 rounded-full font-bold text-sm text-x-black leading-[32px] px-[48px] py-[8px]"
                >
                  Technology
                </button>
                <button
                  class="w-48 hover:bg-x-blue hover:text-white border-x-mediumgrey border-2 rounded-full font-bold text-sm text-x-black leading-[32px] px-[54px] py-[8px]"
                >
                  Marketing
                </button>
                <button
                  class="w-32 hover:bg-x-blue hover:text-white border-x-mediumgrey border-2 rounded-full font-bold text-sm text-x-black leading-[32px] px-[38px] py-[8px]"
                >
                  Life
                </button>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
    <FooterContent/>
</template>

