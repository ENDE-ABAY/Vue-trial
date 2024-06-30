<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import GraphQl from "../GraphQl.vue";
import {
  faCog,
  faBars,
  faSearch,
  faChevronDown,
  faChevronUp,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";

import Nile_Fall from "../Load/img/Nile_Fall.jpg";
import Monastry from "../Load/img/Monastry.jpeg";
import Lake_Tana from "../Load/img/Lake_Tana.jpg";
import Hotels from "../Load/img/Hotels.jpg";
import Bueaty from "../Load/img/Bueaty.jpg";
import Location from "../Load/img/Location.jpeg";
import Good from "../Load/img/Good.jpeg";
library.add(faCog, faBars, faSearch, faChevronDown, faChevronUp, faThLarge);

defineProps({
  msg: String,

  components: {
    FontAwesomeIcon,
  },
});
let isIconClicked = false;

const toggleIcon = () => {
  isIconClicked = !isIconClicked;
};
</script>

<template>
  <div class="lg:flex mt-2 sm:flex-row">
    <div class="flex justify-start">
      <p class="text-3xl">
        <span class="text-red-500">G</span>
        <span class="text-yellow-500">o</span>
        <span class="text-blue-500">o</span>
        <span class="text-green-500">g</span>
        <span class="text-yellow-500">l</span>
        <span class="text-red-500">e</span>
      </p>
    </div>
    <div class="flex h-8 mt-1">
      <div class="flex">
        <input
          type="text"
          v-model="searchQuery"
          @keyup.enter="handleSearch"
          placeholder="Search Google or type URL"
          class="bg-gray-100 rounded-full px-60 py-4 focus:outline-none"
        />
      </div>
      <font-awesome-icon icon="search" class="absolute top-4 left- ml-2 mt-2" />
    </div>
    <div class="flex flex-grow space-x-5 lg:justify-end sm:justify-end">
      <div>
        <div>
          <div class="menu-icons">
            <font-awesome-icon icon="cog" />
            <font-awesome-icon icon="bar" />
            <!-- Setting icon -->
          </div>
        </div>
      </div>

      <div>Menu</div>

      <div>SignIn</div>
    </div>
  </div>
  <div class="flex mt-0 pt-0">
    <div>
      <div class="flex space-x-3 justify-normal ml-20 mt-3">
        <h3>All</h3>
        <h3>Images</h3>
        <h3>aps</h3>
        <h3>Videos</h3>
        <h3>News</h3>
        <h3>More</h3>
        <h3>Tools</h3>
      </div>
      <hr class="shadow-black" />
      <p class="ml-20">About 4,510,000 results (0.36 seconds)</p>
      <div class="sm:flex-row md:flex ml-20 mr-28 bg-slate-100 space-x-6">
        <div class="">
          <p>https:e//en.wekipedia.org>wiki>Bahir_Dar</p>
          <div class="mb-3">
            <p>
              Bahir Dar is the capital city of the Amhara Region, Ethiopia.
              Bahir is one of the leading tourist destinations in Ethiopia, with
              a variety of attractions in...
            </p>
          </div>

          <div class="lg:flex">
            <div class="mr-10">
              <h3>Zone: Bahir Dar Special Zone</h3>
              <h3 class="flex">
                Country:
                <p class="text-blue-700">Ethiopia</p>
              </h3>
              <h3 class="text-blue-700">
                <b>History:</b> Geography, Demographics, Education
              </h3>
            </div>
            <div>
              <h3>Elevation: 1800m(5,900Km)</h3>
              <h3>Area Code: (+251)58</h3>
            </div>
          </div>
          <h1 class="flex justify-center">Poeples Also Ask</h1>
          <div class="mr-10">
            <h3 class="flex items-center justify-between" @click="toggleIcon">
              What is Bahir Dar Known For?
              <font-awesome-icon
                :icon="isIconClicked ? 'chevron-up' : 'chevron-down'"
              />
            </h3>
            <hr />
            <h3 class="flex items-center justify-between">
              What Country is Bahir Dar?
              <font-awesome-icon icon="chevron-down" />
            </h3>
            <hr />
            <h3 class="flex items-center justify-between">
              What Town Is Beautiful In Ethiopia?
              <font-awesome-icon icon="chevron-down" />
            </h3>
            <hr />
            <h3 class="flex items-center justify-between">
              What is the name of Bahir Dar airport?
              <font-awesome-icon icon="chevron-down" />
            </h3>
            <hr />
          </div>

          <em class="flex justify-center">{{ msg }}</em>

          <div class="flex space-x-2 mt-6">
            <div class="flex items-center">
              <a
                href="https://www.google.com/search?sca_esv=abf976e12d8dcb8e&sxsrf=ADLYWIIICiPF8cv5Txo7uEcXFFfQQGUz2A:1715274423949&q=Blue+Nile+Falls&stick=H4sIAAAAAAAAAONgFuLUz9U3MM3OKzFVgjBLCvMytBSzk630c_KTE0sy8_PgDKvEkpKixGQQs3gRK79TTmmqgl9mTqqCW2JOTjEATfvBYU0AAAA&sa=X&ved=2ahUKEwjp9OyVh4GGAxXnUaQEHcO8ALwQ2coHegQIZRAD&biw=1366&bih=611&dpr=1"
              >
                <img :src="Nile_Fall" alt="img" class="w-28 h-28 rounded-md" />
              </a>
            </div>
            <div class="flex items-center w-28 h-28 rounded-md">
              <a
                href="https://www.google.com/search?sca_esv=abf976e12d8dcb8e&sxsrf=ADLYWIIICiPF8cv5Txo7uEcXFFfQQGUz2A:1715274423949&q=Ura+Kidane+Mihret+Monastery+(%E1%8A%A1%E1%88%AB+%E1%8A%AA%E1%8B%B3%E1%8A%90+%E1%88%9D%E1%88%95%E1%88%A8%E1%89%B5+%E1%8C%88%E1%8B%B3%E1%88%9D)&stick=H4sIAAAAAAAAAONgFuLUz9U3MM3OKzFV4gIx03OTLXLMtBSzk630c_KTE0sy8_PgDKvEkpKixGQQs3gRq2toUaKCd2ZKYl6qgm9mRlFqiYJvfl5icUlqUaWCxsOuhQ87Vis87Fr1sHvzw64JCg875j7smPqwY8XDzq0KD3s6QMIdczUBG0Duq4QAAAA&sa=X&ved=2ahUKEwjp9OyVh4GGAxXnUaQEHcO8ALwQ2coHegQIZhAD&biw=1366&bih=611&dpr=1"
                class="link"
              >
                <img :src="Monastry" alt="" class="w-28 h-28 rounded-md" />
              </a>
            </div>
            <div class="flex items-center">
              <a
                href="https://www.google.com/search?sca_esv=abf976e12d8dcb8e&sxsrf=ADLYWIIICiPF8cv5Txo7uEcXFFfQQGUz2A:1715274423949&q=Lake+Tana+Biosphere+Reserve&stick=H4sIAAAAAAAAAONgFuLUz9U3MM3OKzFV4tVP1zc0TM5LtkwzMM7VUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWs0j6J2akKIYl5iQpOmfnFBRmpRakKQanFqUVlqQAeWLxyXQAAAA&sa=X&ved=2ahUKEwjp9OyVh4GGAxXnUaQEHcO8ALwQ2coHegQIXBAD&biw=1366&bih=611&dpr=1"
              >
                <img :src="Lake_Tana" alt="" class="w-28 h-28 rounded-md" />
              </a>
            </div>
            <div class="flex items-center">
              <a
                href="https://www.google.com/search?q=bahir+dar+hotels+list&sca_esv=abf976e12d8dcb8e&sxsrf=ADLYWIIICiPF8cv5Txo7uEcXFFfQQGUz2A%3A1715274423949&ei=twI9Zqm9OeejkdUPw_mC4As&oq=bahir+dar+hotels&gs_lp=Egxnd3Mtd2l6LXNlcnAiEGJhaGlyIGRhciBob3RlbHMqAggBMgUQABiABDIFEAAYgAQyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjICECYyAhAmMgsQABiABBiGAxiKBTIIEAAYogQYiQVI6DpQtgNYvRhwAXgBkAEAmAHWAqAB6g-qAQUyLTYuMbgBAcgBAPgBAZgCCKAChhHCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgITEC4YgAQYsAMYQxjIAxiKBdgBAsICDRAuGIAEGLEDGEMYigXCAgoQABiABBhDGIoFwgIQEC4YgAQYQxjHARiKBRivAcICEBAuGIAEGLEDGEMYgwEYigXCAhwQLhiABBixAxhDGIoFGJcFGNwEGN4EGOAE2AEDwgILEC4YgAQYxwEYrwGYAwCIBgGQBhG6BgYIARABGAm6BgYIAhABGAi6BgYIAxABGBSSBwcxLjAuNC4zoAfxPQ&sclient=gws-wiz-serp"
              >
                <img :src="Hotels" alt="Hotels" class="w-28 h-28 rounded-md" />
              </a>
            </div>

            <div class="flex items-center">
              <a
                href="https://www.google.com/search?sca_esv=abf976e12d8dcb8e&sxsrf=ADLYWIJQoO-HuOvQKgrLrCqR6jdxvvwh6g:1715278855755&q=beautiful+bahir+dar&uds=ADvngMgF8caFCAZs3Q_Gl-MV9drFWb-UTCxS-sfe0Ly9kg0B3bD6P7ikmuweLb5vy-R8mNEWjTPDokmErLXyYLfYid0fEirHvsbHx_CboyaR3HKGRa5xAaV75RIhDpzeaH4x5jUyZI9sATdbAk2E739TZQJraeSruqu2fswu1Z5ar7LQSyn7GSio1lbb5fH6bwou-03WWG_nl0c8hvdH_LKuhn51B-VU34u1SkWxnUVz1m9E2WlEm7BtNzzZlhwx2e-IWxBQntervPUAi-PU4LZjbNN9SFqjLg2A-sZ0zAwd1oaBDaE51WrskPM8N-YVpw2F5B5mYKHt6DOZhjPaOAtgop_JqNJtHQ&udm=2&sa=X&ved=2ahUKEwiM-4zXl4GGAxVFQ6QEHQ5QB6MQxKsJegQICxAB&ictx=0&biw=1366&bih=611&dpr=1"
              >
                <img :src="Bueaty" alt="" class="w-28 h-28 rounded-md" />
              </a>
            </div>
          </div>
          <div>
            <em class="flex sm:justify-end lg:mr-32">{{ msg }}</em>
            <p class="flex justify-center">View all</p>
            <h4><a href="https://www.bdu.edu.et">https://www.bdu.edu.et</a></h4>
            <h2 class="underline text-blue-700">
              <a href="https://www.bdu.edu.et"
                >Bahir Dar University | Wisdom at the source of Blue Nile</a
              >
            </h2>
          </div>
        </div>
        <div class="mt-2 sm:w-auto lg:w-1/2">
          <div class="flex space-x-3">
            <div class="flex items-center rounded-md">
              <a
                href="https://www.google.com/search?q=beautiful%20bahir%20dar%20city&udm=2&hl=en&sa=X&ved=0CB0QtI8BKABqFwoTCIiw3ruagYYDFQAAAAAdAAAAABAH&biw=1366&bih=611&dpr=1#vhid=1mkE_MlgDtkULM&vssid=mosaic"
              >
                <img :src="Good" alt="" class="w-32 h-24" />
              </a>
            </div>
            <div class="flex items-center rounded-md">
              <a
                href="https://www.google.com/search?sca_esv=abf976e12d8dcb8e&sxsrf=ADLYWILIv5B7t-EurNu8LEFCSKDlXJNlhg:1715279132358&q=Bahir+Dar+Location&source=lnms&uds=ADvngMhXvLAy9adNrmazH6IkPBchx4Z8tv85UcYgTFUDYt4x8lYO3WgUTIydBlucqgXS85JWlnGMnZhbtjd15xd7xaNBV8OqpYbB_3cxFe6TRTXP9-1Ugwwl_fa1Go-hvbHiYXN-WEo2y0jw4yVUSgexH0kFGQjysG1KzsWzAdLTEO8rbaWhjyW8D_o4AnyqqlgnSIPHCX3XzF0TmmTuz8_Sxalt8nkIehfU0nZhbKJbGAMyzW3_I4BVl3-AClFTYoEDf7rpDITuBbpVgIm8TxMd_zQDS8d4BcvmAtMVMrcHJ7Eg8B1OWCU&sa=X&ved=2ahUKEwjhtf_amIGGAxV8UqQEHUzVDekQ0pQJegQIERAB&biw=1366&bih=611&dpr=1#eim=CAE"
              >
                <img :src="Location" alt="" class="w-32 h-24" />
              </a>
            </div>
          </div>
          <div>
            <h2 class="text-blue-700">About</h2>
            <h4>Description</h4>
            <p>
              Bahir Dar is the capital city of the Amhara region in the northern
              Ethiopia. It's a port on the south shore of the huge inland Lake
              tana. Dek Island is on of many Islands in the Lake that are home
              to medival Monastries. On the Zee peninsula,the Ura Kidamihret
              monastry is known for its elaborate, colorful murals, The Blue
              Nile river snakes southeast of the city towards the towering
              cliffs at the Blue Nile Falls. -Google
            </p>
            <p><b>Area: </b>213.4km <sup>2</sup></p>
            <h3 class="flex">
              <b>University: </b>
              <p class="text-blue-700 underline">
                Bahir Dar University peda campus
              </p>
            </h3>
            <p><b>Elevation: </b> 1,800 m</p>
            <p><b>Area Code: </b> (+251) 58</p>
            <h3 class="flex">
              <b>Region: </b>
              <p class="text-blue-700 underline">Amhara</p>
            </h3>
            <em class="flex justify-end">{{ msg }}</em>
          </div>
        </div>
      </div>
    </div>
  </div>
  <GraphQl />
</template>

<style scoped></style>
