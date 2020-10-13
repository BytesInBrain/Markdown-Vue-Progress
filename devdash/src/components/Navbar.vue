<template>
  <div class="n">
    <div class="navbar">
      <div class="logo">
        <a href="#" class="nav-link">
          <span class="link-text logo-text">DashBoard</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </div>

      <div
        class="nav-item"
        @mouseover="subnavtoggle = true"
        @mouseleave="subnavtoggle = false"
      >
        <div>
          <a href="#" class="nav-link">
            <svg
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="note"
              role="img"
              class="svg-inline--fa fa-cat fa-w-16 fa-9x"
            >
              <g id="filled_outline" data-name="filled outline">
                <path d="m392 424h-304v-32h-16v-344h232 88z" fill="#683b0d" />
                <path d="m360 392h-288v-368h232v56h56z" fill="#fbb540" />
                <path
                  d="m72 112a32 32 0 0 1 0-64 8 8 0 0 1 0 16 16 16 0 1 0 15.5 20.006 8 8 0 0 1 15.5 3.988 31.983 31.983 0 0 1 -31 24.006z"
                  fill="#cbcbcb"
                />
                <path
                  d="m72 192a32 32 0 0 1 0-64 8 8 0 0 1 0 16 16 16 0 1 0 15.5 20.006 8 8 0 0 1 15.5 3.988 31.983 31.983 0 0 1 -31 24.006z"
                  fill="#cbcbcb"
                />
                <path
                  d="m72 272a32 32 0 0 1 0-64 8 8 0 0 1 0 16 16 16 0 1 0 15.5 20.006 8 8 0 0 1 15.5 3.988 31.983 31.983 0 0 1 -31 24.006z"
                  fill="#cbcbcb"
                />
                <path
                  d="m72 344a32 32 0 0 1 0-64 8 8 0 0 1 0 16 16 16 0 1 0 15.5 20.006 8 8 0 0 1 15.5 3.988 31.983 31.983 0 0 1 -31 24.006z"
                  fill="#cbcbcb"
                />
                <g fill="#d18d28">
                  <path d="m312 120h-176a8 8 0 0 1 0-16h176a8 8 0 0 1 0 16z" />
                  <path d="m312 168h-176a8 8 0 0 1 0-16h176a8 8 0 0 1 0 16z" />
                  <path d="m312 216h-176a8 8 0 0 1 0-16h176a8 8 0 0 1 0 16z" />
                  <path d="m312 264h-176a8 8 0 0 1 0-16h176a8 8 0 0 1 0 16z" />
                  <path d="m360 80h-56v-56z" />
                  <path d="m200 312h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16z" />
                </g>
                <path
                  d="m347.144 244.86h32v224h-32z"
                  fill="#0a9acd"
                  transform="matrix(.863 .506 -.506 .863 230.271 -134.635)"
                />
                <path
                  d="m286.291 488 6.42-42.6 27.609 16.179z"
                  fill="#e6a98d"
                />
                <path
                  d="m413.84 233.878h24v32h-24z"
                  fill="#cbcbcb"
                  transform="matrix(.506 -.863 .863 .506 -5.055 490.934)"
                />
                <path
                  d="m426.193 217.631-8.09 13.8 27.609 16.18 8.09-13.8a16 16 0 0 0 -5.715-21.894 16 16 0 0 0 -21.894 5.714z"
                  fill="#fbb540"
                />
                <path d="m136 120h176a8 8 0 0 0 0-16h-176a8 8 0 0 0 0 16z" />
                <path d="m136 168h176a8 8 0 0 0 0-16h-176a8 8 0 0 0 0 16z" />
                <path d="m136 216h176a8 8 0 0 0 0-16h-176a8 8 0 0 0 0 16z" />
                <path d="m136 264h176a8 8 0 0 0 0-16h-176a8 8 0 0 0 0 16z" />
                <path d="m136 312h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16z" />
                <path
                  d="m452.132 205.015a24.024 24.024 0 0 0 -32.841 8.571l-19.291 32.914v-198.5a8 8 0 0 0 -8-8h-60.686s-24.038-24.48-25-23.656a7.976 7.976 0 0 0 -2.314-.344h-232a8 8 0 0 0 -8 8v25.013a32 32 0 0 0 0 61.974v18.026a32 32 0 0 0 0 61.974v18.026a32 32 0 0 0 0 61.974v10.026a32 32 0 0 0 0 61.974v49.013a8 8 0 0 0 8 8h8v24a8 8 0 0 0 8 8h203.292l-5.482 9.354a7.938 7.938 0 0 0 -.981 2.721c-.008.046-.021.085-.028.132l-.02.131v.03l-6.4 42.44a8 8 0 0 0 12.817 7.511l34.028-26.419c2.18-1.693 3.245-2.729 3.076-4.119l18.624-31.781h45.074a8 8 0 0 0 8-8v-82.562l60.7-103.583a24.027 24.027 0 0 0 -8.568-32.84zm-14.155 12.965a8 8 0 0 1 8.922 11.786l-4.045 6.9-13.8-8.09 4.046-6.9a7.944 7.944 0 0 1 4.877-3.696zm-120.515 232.652-13.8-8.09 105.164-179.453 13.8 8.09zm-5.462-407.318 28.686 28.686h-28.686zm104.916 205.97 4.044-6.9 13.805 8.09-4.045 6.9zm-32.916-193.284v216a8.041 8.041 0 0 0 .152 1.546l-16.152 27.562v-221.108a7.978 7.978 0 0 0 -2.336-5.649l-.007-.008-18.343-18.343zm-304-24h216v48a8 8 0 0 0 8 8h48v240.41l-32.578 55.59h-239.422v-41.012a31.974 31.974 0 0 0 22.991-22.994 8 8 0 0 0 -15.5-3.988 15.948 15.948 0 0 1 -7.491 9.844v-54.862a31.974 31.974 0 0 0 22.991-22.994 8 8 0 0 0 -15.5-3.988 15.948 15.948 0 0 1 -7.491 9.844v-62.862a31.974 31.974 0 0 0 22.991-22.994 8 8 0 0 0 -15.5-3.988 15.948 15.948 0 0 1 -7.491 9.844v-62.862a31.974 31.974 0 0 0 22.991-22.994 8 8 0 0 0 -15.5-3.988 15.948 15.948 0 0 1 -7.491 9.844zm-24 48a16 16 0 0 1 8-13.835v27.67a16 16 0 0 1 -8-13.835zm0 80a16 16 0 0 1 8-13.835v27.67a16 16 0 0 1 -8-13.835zm0 80a16 16 0 0 1 8-13.835v27.67a16 16 0 0 1 -8-13.835zm0 72a16 16 0 0 1 8-13.835v27.67a16 16 0 0 1 -8-13.835zm40 104v-16h214.045l-9.377 16zm202.861 42.276 7.219 4.231-8.9 6.908zm85.139-42.276h-27.7l27.7-47.261z"
                />
              </g>
            </svg>
            <span class="link-text">Notebook</span>
          </a>
        </div>
        <transition name="fade">
          <div v-if="subnavtoggle">
            <!-- <div class="sub-nav-item">
              <div>
                <a href="" class="sub-nav-link">
                  <svg
                    id="Capa_1"
                    enable-background="new 0 0 512 512"
                    height="512"
                    viewBox="0 0 512 512"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="m475.43 73.14v402.29h-402.29v-73.14l329.15-329.15z"
                        fill="#ffa001"
                      />
                      <path
                        d="m475.43 73.14v402.29h-201.14v-274.29l128-128z"
                        fill="#f87f02"
                      />
                      <path
                        d="m402.29 0v402.29h-402.29v-402.29h146.23l54.91 14 54.92-14z"
                        fill="#ffda2d"
                      />
                      <path
                        d="m402.29 0v402.29h-201.15v-388.29l54.92-14z"
                        fill="#fcbe00"
                      />
                      <g fill="#ffa001">
                        <path d="m68.857 309.857h98.857v30h-98.857z" />
                        <path d="m68.857 241h49.431v30h-49.431z" />
                        <path
                          d="m256.06 0v141.53l-54.92-31.7-54.91 31.7v-141.53z"
                        />
                      </g>
                      <path
                        d="m256.06 0v141.53l-54.92-31.7v-109.83z"
                        fill="#f87f02"
                      />
                      <path
                        d="m512 402.29c0 60.59-49.12 109.71-109.71 109.71-60.6 0-109.72-49.12-109.72-109.71 0-60.6 49.12-109.72 109.72-109.72 60.59 0 109.71 49.12 109.71 109.72z"
                        fill="#39689e"
                      />
                      <path
                        d="m512 402.29c0 60.59-49.12 109.71-109.71 109.71v-219.43c60.59 0 109.71 49.12 109.71 109.72z"
                        fill="#224370"
                      />
                      <path
                        d="m451.72 387.29v30h-34.43v34.42h-30v-34.42h-34.43v-30h34.43v-34.43h30v34.43z"
                        fill="#f3fdff"
                      />
                      <path
                        d="m451.72 387.29v30h-34.43v34.42h-15v-98.85h15v34.43z"
                        fill="#d7f3f7"
                      />
                    </g>
                  </svg>
                  <span class="sub-link-text">Add Notebook</span>
                </a>
              </div>
            </div> -->
            <div class="sub-nav-item">
              <div>
                <a href="" class="sub-nav-link">
                  <svg
                    id="Capa_1"
                    enable-background="new 0 0 512 512"
                    height="512"
                    viewBox="0 0 512 512"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="m277.644 404.346h23v100h-23z" fill="#abc4d6" />
                      <g fill="#f9f5f3">
                        <path d="m277.644 156.312h23v322.556h-23z" />
                        <path
                          d="m289.145 471.368v-314.75c.001-18.298 14.834-33.131 33.132-33.131h149.092c18.298 0 33.132 14.833 33.132 33.132v281.619z"
                        />
                        <path
                          d="m289.145 471.368-.001-314.75c0-18.298-14.834-33.131-33.132-33.131h-85.671l-85.384 8.325c-6.851 6.07-11.169 14.934-11.169 24.806v281.619z"
                        />
                      </g>
                      <path
                        d="m266.144 156.618.001 311.212 23 3.538-.001-314.75c0-18.298-14.834-33.131-33.132-33.131h-23c18.298 0 33.132 14.833 33.132 33.131z"
                        fill="#f9eae0"
                      />
                      <path
                        d="m471.369 123.487h-23c18.298 0 33.132 14.833 33.132 33.132v281.619l-192.356 29.592v3.538l215.355-33.131v-281.618c0-18.299-14.833-33.132-33.131-33.132z"
                        fill="#f9eae0"
                      />
                      <path
                        d="m289.145 471.368c.001-18.298 14.834-33.131 33.132-33.131h182.223v33.131c0 18.298-14.833 33.132-33.132 33.132h-182.223z"
                        fill="#bdd3dd"
                      />
                      <path
                        d="m289.144 471.368c0-18.298-14.834-33.131-33.132-33.131h-182.223v33.131c0 18.298 14.834 33.132 33.132 33.132h182.224z"
                        fill="#bdd3dd"
                      />
                      <path
                        d="m481.5 438.237v33.131c0 18.298-14.833 33.132-33.132 33.132h23c18.298 0 33.132-14.833 33.132-33.132v-33.131z"
                        fill="#abc4d6"
                      />
                      <path
                        d="m289.144 471.368c0-18.298-14.834-33.131-33.132-33.131h-23c18.298 0 33.131 14.833 33.132 33.131v33.132h23.001z"
                        fill="#abc4d6"
                      />
                      <g>
                        <path
                          d="m208.861 162.004-129.302-129.302-46.857 46.857 129.302 129.302c1.5 1.5 3.535 2.343 5.657 2.343h7.141l36.403-36.403v-7.141c-.001-2.121-.843-4.156-2.344-5.656z"
                          fill="#a0c8ff"
                        />
                        <path
                          d="m208.861 162.004-129.302-129.302-11.476 11.476 133.806 133.806c1.097 1.097 1.838 2.481 2.159 3.974l7.156-7.156v-7.141c0-2.122-.842-4.157-2.343-5.657z"
                          fill="#91b2fa"
                        />
                        <path
                          d="m211.204 203.205v-35.545c0-.966-.183-1.911-.515-2.799l-45.828 45.828c.888.332 1.833.515 2.799.515h35.544c4.419.001 8-3.581 8-7.999z"
                          fill="#f9eae0"
                        />
                        <path
                          d="m35.781 12.353-23.428 23.428c-6.47 6.47-6.47 16.959 0 23.429l23.429 23.429 46.858-46.858-23.43-23.428c-6.469-6.47-16.959-6.47-23.429 0z"
                          fill="#fa8ebb"
                        />
                        <path
                          d="m36.02 12.137c.078.075.161.139.238.215l34.905 34.905 11.476-11.476-23.429-23.428c-6.393-6.394-16.704-6.457-23.19-.216z"
                          fill="#f57fb0"
                        />
                        <g>
                          <path
                            d="m471.369 115.987h-149.093c-13.663 0-25.763 6.785-33.132 17.155-7.37-10.37-19.47-17.155-33.132-17.155h-82.563l-85.507-85.507c-.001-.001-.002-.002-.003-.003s-.002-.002-.004-.003l-23.424-23.424c-4.545-4.546-10.589-7.05-17.017-7.05s-12.472 2.504-17.017 7.049l-23.427 23.428c-4.546 4.545-7.05 10.588-7.05 17.016 0 6.429 2.504 12.473 7.049 17.018l23.423 23.424c.001.001.002.003.004.004.001.001.003.002.004.004l44.101 44.101c-5.327 7.015-8.292 15.633-8.292 24.575v134.095c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-134.096c0-4.942 1.437-9.728 4.052-13.816l73.694 73.695c.178.178.364.345.557.503 1.143.931 2.55 1.509 4.014 1.657.243.024.488.036.732.036h43.748l9.518 9.518c1.464 1.464 3.384 2.196 5.303 2.196.178 0 16.54-.025 16.54-.025 4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-13.458l-7.295-7.295v-43.746c0-.246-.012-.491-.036-.736-.148-1.464-.725-2.873-1.658-4.014-.158-.193-.325-.378-.503-.556l-28.047-28.047h67.563c14.133 0 25.631 11.498 25.632 25.63v283.254c-6.997-5.705-15.921-9.134-25.632-9.134h-174.724v-110.025c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v150.655c0 22.404 18.228 40.632 40.632 40.632h292.324c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-102.6l.001-18.132h141.592c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-140.47c3.215-10.485 12.985-18.131 24.509-18.131h174.723v25.631c0 14.134-11.498 25.632-25.631 25.632h-42.124c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h42.124c22.404 0 40.631-18.227 40.631-40.632v-314.75c0-22.404-18.227-40.631-40.631-40.631zm-453.714-62.084c-1.712-1.712-2.655-3.988-2.655-6.41 0-2.421.943-4.697 2.656-6.409l23.428-23.429c1.711-1.712 3.988-2.655 6.41-2.655 2.421 0 4.698.943 6.411 2.656l18.123 18.124-18.119 18.119c-.002.002-.003.003-.005.005s-.003.003-.005.005l-18.119 18.119zm146.683 146.684-117.951-117.952 12.821-12.821 117.951 117.952zm39.355 3.106h-21.248l21.248-21.248zm-3.106-39.355-12.821 12.821-117.951-117.952 12.821-12.82 82.393 82.392.021.021zm81.058 332.662h-174.724c-14.133 0-25.632-11.498-25.632-25.632v-25.631h174.724c11.524 0 21.294 7.646 24.509 18.131h-140.47c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h141.592v18.132zm215.355-66.263h-174.724c-9.711 0-18.634 3.429-25.632 9.134l.001-283.254c0-14.133 11.498-25.63 25.631-25.63h149.093c14.133 0 25.631 11.498 25.631 25.631z"
                          />
                          <path
                            d="m371.974 180.685h49.697c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-49.697c-4.143 0-7.5 3.357-7.5 7.5 0 4.142 3.357 7.5 7.5 7.5z"
                          />
                          <path
                            d="m454.803 215.382h-115.961c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h115.961c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"
                          />
                          <path
                            d="m454.803 248.513h-115.961c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h115.961c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"
                          />
                          <path
                            d="m454.803 281.645h-115.961c-4.143 0-7.5 3.358-7.5 7.5 0 4.143 3.357 7.5 7.5 7.5h115.961c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"
                          />
                          <path
                            d="m454.803 314.776h-115.961c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h115.961c4.143 0 7.5-3.357 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5z"
                          />
                          <path
                            d="m454.803 347.908h-99.395c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h99.395c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span class="sub-link-text">Existing</span>
                </a>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      subnavtoggle: false,
    };
  },
  methods: {
    // togglesubnavbar: () => {
    //   this.subnavtoggle = true;
    // },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
n {
  color: #eeeeee;
  background-color: white;
  margin: 0;
  padding: 0;
}

n::-webkit-scrollbar {
  width: 0.25rem;
}

n::-webkit-scrollbar-track {
  background: #1e1e24;
}

n::-webkit-scrollbar-thumb {
  background: #6649b8;
}
.navbar {
  background-color: #eeeeee;
  transition: width 600ms ease;
  height: 100vh;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.nav-item {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.sub-nav-item {
  width: 100%;
}
.sub-nav-item div {
  margin-left: 20px;
}
/* 
.nav-item:last-child {
  margin-top: auto;
} */

.nav-link {
  display: flex;
  align-items: center;
  height: 3.5rem;
  color: #b6b6b6;
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: 600ms;
}
.nav-link div {
  width: 100%;
  margin-left: 10px;
}
.sub-nav-link {
  display: flex;
  align-items: center;
  height: 2rem;
  color: #b6b6b6;
  text-decoration: none;
  transition: 600ms;
}
.sub-nav-link a {
  margin: 5px;
}
.nav-link:hover {
  filter: grayscale(0%) opacity(1);
  background: #a6a6a4;
  color: #ececec;
}
.sub-nav-link:hover {
  filter: grayscale(0%) opacity(1);
  background: #a6a6a4;
  color: #ececec;
}
.link-text {
  visibility: hidden;
  opacity: 0;
  margin-left: 0.5rem;
  color:#1a1c20;
  font-size: 20px;
  transition: visibility 0s, opacity 600ms linear;
}
.sub-link-text {
  font-size: 17px;
  transition: 600ms;
  color:#1a1c20;

}

.nav-link svg {
  width: 2rem;
  min-width: 2rem;
  margin: 0 1.5rem;
}
.sub-nav-link svg {
  width: 1rem;
  min-width: 1rem;
  margin: 0 1.5rem;
}

.fa-primary {
  color: #ff7eee;
}

.fa-secondary {
  color: #df49a6;
}

.fa-primary,
.fa-secondary {
  transition: 600ms;
}

.logo {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: #ececec;
  background: #faf3dd;
  font-size: 1.5rem;
  letter-spacing: 0.3ch;
  width: 100%;
}

.logo svg {
  transform: rotate(0deg);
  transition: 600ms;
}

.logo-text {
  display: inline;
  position: absolute;
  left: -999px;
  transition: 600ms;
  font-size: medium;
}

.navbar:hover .logo svg {
  transform: rotate(-180deg);
}

/* Small screens */
@media only screen and (max-width: 600px) {
  .navbar {
    bottom: 0;
    width: 100vw;
    height: 5rem;
    flex-direction: row;
  }

  .logo {
    display: none;
  }

  .nav-link {
    justify-content: center;
  }

  main {
    margin: 0;
  }
}

/* Large screens */
@media only screen and (min-width: 600px) {
  .navbar {
    top: 0;
    width: 5rem;
    height: 100vh;
  }

  .navbar:hover {
    width: 16rem;
  }

  .navbar:hover .link-text {
    visibility: visible;
    opacity: 1;
  }

  .navbar:hover .logo svg {
    margin-left: 11rem;
  }

  .navbar:hover .logo-text {
    left: 0px;
  }
}

.dark {
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #23232e;
  --bg-secondary: #141418;
}

.light {
  --text-primary: #1f1f1f;
  --text-secondary: #000000;
  --bg-primary: #ffffff;
  --bg-secondary: #e4e4e4;
}

.solar {
  --text-primary: #576e75;
  --text-secondary: #35535c;
  --bg-primary: #fdf6e3;
  --bg-secondary: #f5e5b8;
}

.theme-icon {
  display: none;
}

.dark #darkIcon {
  display: block;
}

.light #lightIcon {
  display: block;
}

.solar #solarIcon {
  display: block;
}
</style>
